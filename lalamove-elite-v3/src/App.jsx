import React, { useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, collection, doc, addDoc, updateDoc, 
  deleteDoc, onSnapshot
} from 'firebase/firestore';
import { 
  Plus, Trash2, Wallet, Target, Calendar, 
  Truck, Settings, Edit2, Check, Hash, 
  X, Save, ChevronRight, Cloud, BarChart3, CreditCard,
  ChevronLeft, Activity, Download, Zap, MapPin, Info, Wand2, TrendingUp
} from 'lucide-react';

// Konfigurasi Firebase (Gunakan yang asal anda)
const firebaseConfig = typeof __firebase_config !== 'undefined' 
  ? JSON.parse(__firebase_config) 
  : {
      apiKey: "AIzaSyAfmhXFTbr0xs8Mujkrsw_5JHTZozmRohU",
      authDomain: "lalamove-elite.firebaseapp.com",
      projectId: "lalamove-elite",
      storageBucket: "lalamove-elite.firebasestorage.app",
      messagingSenderId: "365572224560",
      appId: "1:365572224560:web:849c2760beed4008281ff5"
    };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Bersihkan appId (Penting untuk ralat Firestore)
const rawAppId = typeof __app_id !== 'undefined' ? __app_id : 'lalamove-elite-2026'; 
const appId = rawAppId.replace(/\//g, '_'); 

const App = () => {
  const [user, setUser] = useState(null);
  const [earnings, setEarnings] = useState([]);
  const [activeTab, setActiveTab] = useState('dompet'); 
  
  // States untuk Sasaran
  const [target, setTarget] = useState(2500); 
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [tempTarget, setTempTarget] = useState(2500);
  
  const [jobTarget, setJobTarget] = useState(100);
  const [isEditingJobTarget, setIsEditingJobTarget] = useState(false);
  const [tempJobTarget, setTempJobTarget] = useState(100);

  // States untuk Borang
  const [amount, setAmount] = useState('');
  const [jobsInput, setJobsInput] = useState('');
  const [spendingInput, setSpendingInput] = useState('');
  const [mileageInput, setMileageInput] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [viewDate, setViewDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const WORKING_DAYS_TARGET = 22; 
  const todayStr = new Date().toLocaleDateString('en-CA');

  // Kira Target Harian
  const dailyTarget = useMemo(() => target / WORKING_DAYS_TARGET, [target]);

  // Logik Anggaran KM (RM5 base, RM0.60/km, 20% + SST commission)
  const calculateEstimatedKm = (netTotal, jobsCount) => {
    const net = parseFloat(netTotal);
    const jobs = parseInt(jobsCount) || 1;
    if (isNaN(net) || net <= 0) return 0;
    const grossTotal = net / 0.784; // Andaikan 21.6% potongan
    const grossPerJob = grossTotal / jobs;
    let kmPerJob = grossPerJob <= 5 ? 5 : 5 + (grossPerJob - 5) / 0.60;
    return (kmPerJob * jobs).toFixed(1);
  };

  const estimatedKmValue = useMemo(() => 
    calculateEstimatedKm(amount, jobsInput), 
    [amount, jobsInput]
  );

  // Auth Effect
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) { console.error("Auth error:", error); }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  // Firestore Listener
  useEffect(() => {
    if (!user) return;
    const q = collection(db, 'artifacts', appId, 'users', user.uid, 'earnings');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEarnings(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
      setLoading(false);
    }, (err) => { setLoading(false); });
    return () => unsubscribe();
  }, [user]);

  // Statistik & Graf
  const stats = useMemo(() => {
    const selectedMonth = viewDate.getMonth();
    const selectedYear = viewDate.getFullYear();

    const fullDailyMap = earnings.reduce((acc, curr) => {
      if (!acc[curr.date]) acc[curr.date] = { net: 0, jobs: 0, spending: 0, mileage: 0 };
      acc[curr.date].net += (Number(curr.net) || 0);
      acc[curr.date].jobs += (Number(curr.jobs) || 0);
      acc[curr.date].spending += (Number(curr.spending) || 0);
      acc[curr.date].mileage += (Number(curr.mileage) || 0);
      return acc;
    }, {});

    const monthlyEntries = earnings.filter(item => {
      const d = new Date(item.date);
      return d.getMonth() === selectedMonth && d.getFullYear() === selectedYear;
    });

    let profit = 0, maintenance = 0, jobs = 0, spending = 0, mileage = 0;
    const monthlyDailyMap = {};

    monthlyEntries.forEach(curr => {
        if (!monthlyDailyMap[curr.date]) monthlyDailyMap[curr.date] = { net: 0, spending: 0, jobs: 0 };
        monthlyDailyMap[curr.date].net += (Number(curr.net) || 0);
        monthlyDailyMap[curr.date].spending += (Number(curr.spending) || 0);
        monthlyDailyMap[curr.date].jobs += (Number(curr.jobs) || 0);
        jobs += (Number(curr.jobs) || 0);
        spending += (Number(curr.spending) || 0);
        mileage += (Number(curr.mileage) || 0);
    });

    // Logik Simpanan 70/30 vs RM10 Cap
    Object.values(monthlyDailyMap).forEach(day => {
        const isAboveTarget = day.net >= dailyTarget;
        const dayMaint = isAboveTarget ? 10 : (day.net * 0.30);
        profit += (day.net - dayMaint - day.spending);
        maintenance += dayMaint;
    });

    // Data 7 Hari Terakhir (Fixing the Chart)
    const chartData = [...Array(7)].map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      const ds = d.toLocaleDateString('en-CA');
      return {
        label: d.toLocaleDateString('ms-MY', { weekday: 'short' }),
        value: fullDailyMap[ds]?.net || 0
      };
    });

    // Data Hari Ini
    const todayNet = fullDailyMap[todayStr]?.net || 0;
    const todayAbove = todayNet >= dailyTarget;
    const todayMaint = todayNet > 0 ? (todayAbove ? 10 : todayNet * 0.30) : 0;

    return { 
      filtered: monthlyEntries, profit, maintenance, jobs, spending, mileage,
      chart: chartData,
      todayNet, todayMaint,
      costPerKm: mileage > 0 ? (spending / mileage) : 0,
      todayMileage: fullDailyMap[todayStr]?.mileage || 0
    };
  }, [earnings, viewDate, todayStr, dailyTarget]);

  const progressPercent = Math.min((stats.profit / target) * 100, 100);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !user) return;
    const payload = {
      net: parseFloat(amount),
      jobs: parseInt(jobsInput) || 0,
      spending: parseFloat(spendingInput) || 0,
      mileage: parseFloat(mileageInput) || 0,
      date: date,
      timestamp: Date.now()
    };
    try {
      const colRef = collection(db, 'artifacts', appId, 'users', user.uid, 'earnings');
      if (editingId) {
        await updateDoc(doc(colRef, editingId), payload);
        setEditingId(null);
      } else {
        await addDoc(colRef, payload);
      }
      resetForm();
    } catch (err) { console.error("Save error:", err); }
  };

  const resetForm = () => {
    setAmount(''); setJobsInput(''); setSpendingInput(''); setMileageInput('');
    setDate(new Date().toLocaleDateString('en-CA'));
    setShowForm(false); setEditingId(null);
  };

  const formatCurrency = (val) => new Intl.NumberFormat('ms-MY', { style: 'currency', currency: 'MYR' }).format(val || 0);

  if (loading) return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="w-16 h-16 border-4 border-orange-500/10 border-t-orange-500 rounded-full animate-spin mb-4"></div>
      <p className="text-orange-500 font-black text-xs tracking-widest animate-pulse uppercase">Elite Portal Loading...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans pb-32">
      
      {/* HEADER SECTION */}
      <header className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 pt-6 pb-12 px-6 rounded-b-[3rem] shadow-2xl relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
        <div className="max-w-md mx-auto relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-xl rounded-lg flex items-center justify-center border border-white/20">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <div className="text-left leading-none">
                <h1 className="text-sm font-black text-white tracking-tighter italic uppercase">Lalamove Elite</h1>
                <span className="text-[7px] font-black text-orange-100 uppercase tracking-widest">Wan SK Edition</span>
              </div>
            </div>
            <button onClick={() => {
                const headers = ['Tarikh', 'Gaji Net', 'Jobs', 'Belanja', 'Mileage'];
                const rows = stats.filtered.map(i => [i.date, i.net, i.jobs, i.spending, i.mileage]);
                const csv = [headers, ...rows].map(e => e.join(",")).join("\n");
                const blob = new Blob([csv], { type: 'text/csv' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a'); a.href = url; a.download = `lalamove_${todayStr}.csv`; a.click();
            }} className="p-2 bg-white/10 rounded-lg border border-white/20 active:scale-90 transition-all"><Download className="w-4 h-4 text-white" /></button>
          </div>

          <div className="flex items-center justify-between mb-6 bg-black/20 rounded-xl p-1 border border-white/10 backdrop-blur-xl">
            <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1))} className="p-1.5 hover:bg-white/10 rounded-lg"><ChevronLeft className="w-4 h-4" /></button>
            <p className="text-[10px] font-black uppercase tracking-widest text-white">{viewDate.toLocaleString('ms-MY', { month: 'long', year: 'numeric' })}</p>
            <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1))} className="p-1.5 hover:bg-white/10 rounded-lg"><ChevronRight className="w-4 h-4" /></button>
          </div>

          <div className="text-center">
            <p className="text-[8px] font-black text-orange-200/60 uppercase tracking-[0.3em] mb-1">Baki Bersih (Pocket)</p>
            <h2 className="text-5xl font-black text-white mb-4 drop-shadow-2xl tracking-tighter leading-none">
              <span className="text-lg align-top mr-0.5 opacity-50">RM</span>{stats.profit.toFixed(0)}
            </h2>
            <div className="flex justify-center gap-2">
                <div className="bg-black/20 px-3 py-1 rounded-lg text-[8px] font-black border border-white/5 backdrop-blur-md text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-orange-400" /> {stats.jobs} Job
                </div>
                <div className="bg-black/20 px-3 py-1 rounded-lg text-[8px] font-black border border-white/5 backdrop-blur-md text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-orange-400" /> {stats.mileage.toFixed(0)} KM
                </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 -mt-6 relative z-20">
        
        {/* TAB DOMPET */}
        {activeTab === 'dompet' && (
          <div className="animate-in fade-in duration-300">
            {!showForm ? (
              <button onClick={() => setShowForm(true)} className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-2xl font-black shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-95 mb-5">
                <div className="bg-white/20 p-1 rounded-md"><Plus className="w-4 h-4" /></div>
                <span className="uppercase tracking-[0.2em] text-[10px]">Log Kerja Baru</span>
              </button>
            ) : (
              <div className="bg-slate-900 p-4 rounded-[2rem] shadow-2xl mb-5 border border-orange-500/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-black text-white flex items-center gap-2 uppercase text-[9px] tracking-[0.2em]">Log Elite</h3>
                  <button onClick={resetForm} className="p-1.5 bg-slate-800 rounded-full text-slate-400"><X className="w-4 h-4" /></button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="text-center">
                    <label className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1 block">Dompet Net (Apps)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 font-black text-slate-700">RM</span>
                      <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full pl-10 p-2.5 bg-slate-800/50 border border-slate-800 rounded-xl text-xl font-black text-white focus:border-orange-500 outline-none text-center" autoFocus />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-800/30 p-2 rounded-xl border border-slate-800">
                      <label className="block text-[7px] font-black text-slate-500 uppercase mb-1 text-center">Belanja (RM)</label>
                      <input type="number" step="0.01" value={spendingInput} onChange={(e) => setSpendingInput(e.target.value)} className="w-full bg-transparent font-black text-base text-orange-400 outline-none text-center" />
                    </div>
                    <div className="bg-slate-800/30 p-2 rounded-xl border border-slate-800 relative">
                      <label className="block text-[7px] font-black text-slate-500 uppercase mb-1 text-center">Jarak (KM)</label>
                      <div className="flex items-center gap-1">
                        <input type="number" step="0.1" value={mileageInput} onChange={(e) => setMileageInput(e.target.value)} className="w-full bg-transparent font-black text-base text-blue-400 outline-none text-center" />
                        {parseFloat(estimatedKmValue) > 0 && (
                          <button type="button" onClick={() => setMileageInput(estimatedKmValue)} className="p-1 bg-blue-600 rounded-md text-white"><Zap className="w-2.5 h-2.5" /></button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-800/30 p-2 rounded-xl border border-slate-800">
                      <label className="block text-[7px] font-black text-slate-500 uppercase mb-1 text-center">Bil. Job</label>
                      <input type="number" value={jobsInput} onChange={(e) => setJobsInput(e.target.value)} className="w-full bg-transparent font-black text-base text-white outline-none text-center" />
                    </div>
                    <div className="bg-slate-800/30 p-2 rounded-xl border border-slate-800">
                      <label className="block text-[7px] font-black text-slate-500 uppercase mb-1 text-center">Tarikh</label>
                      <input type="date" value={date} onChange={(v) => setDate(v.target.value)} className="w-full bg-transparent font-bold text-[9px] text-white outline-none text-center" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-xl font-black text-[9px] uppercase active:scale-95 transition-all shadow-xl">Simpan Data</button>
                </form>
              </div>
            )}

            <section className="space-y-2 pb-10">
              <div className="flex justify-between items-center px-4 mb-3">
                <h3 className="text-white font-black text-[9px] uppercase tracking-widest flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-white" /> Jurnal Elite
                </h3>
              </div>
              {stats.filtered.length === 0 ? (
                <div className="bg-slate-900/50 p-10 rounded-[2rem] border-2 border-dashed border-slate-800 text-center opacity-30">
                  <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest">Tiada rekod data.</p>
                </div>
              ) : (
                stats.filtered.map((item) => (
                  <div key={item.id} className="bg-slate-900/60 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${item.date === todayStr ? 'bg-orange-600' : 'bg-slate-800'}`}><Activity className="w-4 h-4" /></div>
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-0.5"><p className="font-black text-white text-base">RM{Number(item.net).toFixed(2)}</p><span className="text-[6px] text-slate-400 uppercase font-black">{item.jobs}J</span></div>
                        <p className="text-[7px] font-bold text-slate-500 uppercase tracking-widest">{new Date(item.date).toLocaleDateString('ms-MY', { day: 'numeric', month: 'short' })} {item.mileage > 0 && ` • ${item.mileage} KM`}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 opacity-40 hover:opacity-100 transition-opacity">
                      <button onClick={() => { setEditingId(item.id); setAmount(String(item.net)); setJobsInput(String(item.jobs)); setSpendingInput(String(item.spending)); setMileageInput(item.mileage || ''); setDate(item.date); setShowForm(true); }} className="p-1.5 text-slate-400 hover:text-white"><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={async () => { if(confirm('Padam?')) await deleteDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'earnings', item.id)) }} className="p-1.5 text-slate-400 hover:text-red-500"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))
              )}
            </section>
          </div>
        )}

        {/* TAB STATS */}
        {activeTab === 'stats' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
            <section className="bg-slate-900/80 rounded-[2rem] p-5 mb-4 border border-slate-800">
              <h3 className="text-[8px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-5">
                <BarChart3 className="w-3.5 h-3.5 text-orange-500" /> Prestasi 7 Hari
              </h3>
              <div className="flex items-end justify-between h-28 gap-2 px-1">
                {stats.chart.map((day, idx) => {
                  const maxVal = Math.max(...stats.chart.map(d => d.value), 1);
                  const height = (day.value / maxVal) * 100;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center group">
                      <div className="relative w-full flex items-end justify-center h-full">
                        <div style={{ height: `${Math.max(height, 2)}%` }} className={`w-full max-w-[8px] rounded-t-full transition-all duration-700 ${day.value > 0 ? 'bg-gradient-to-t from-orange-600 to-orange-400' : 'bg-slate-800 opacity-20'}`}></div>
                        {day.value > 0 && <div className="absolute bottom-full mb-1 bg-white text-slate-900 text-[6px] font-black px-1 py-0.5 rounded shadow-xl">RM{day.value.toFixed(0)}</div>}
                      </div>
                      <span className="text-[6px] font-black text-slate-600 mt-2 uppercase">{day.label}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="bg-slate-900 p-6 rounded-[2.5rem] border border-slate-800 shadow-xl">
              <h3 className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2"><Activity className="w-3.5 h-3.5 text-emerald-500" /> Intelek Operasi</h3>
              <div className="grid grid-cols-2 gap-3 mb-3.5">
                <div className="bg-orange-500/5 p-4 rounded-xl border border-orange-500/10 text-center">
                  <p className="text-[7px] font-black text-orange-500 uppercase mb-1 tracking-widest">Simpanan (30%)</p>
                  <p className="text-lg font-black text-white">{formatCurrency(stats.todayNet - stats.todayMaint)}</p>
                  <p className="text-[6px] text-slate-600 font-bold uppercase mt-1">Gaji Bersih Hari Ini</p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                  <p className="text-[7px] font-black text-slate-500 uppercase mb-1 tracking-widest">Kos Per KM</p>
                  <p className="text-lg font-black text-white">{formatCurrency(stats.costPerKm).replace('RM','')}<span className="text-[8px] opacity-40">/KM</span></p>
                </div>
              </div>
              <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10 text-center">
                <p className="text-[7px] font-black text-emerald-500 uppercase mb-1 tracking-widest">Tabung Servis Hari Ini</p>
                <p className="text-xl font-black text-white">{formatCurrency(stats.todayMaint)}</p>
                <p className="text-[6px] text-slate-600 font-bold uppercase mt-1">{stats.todayNet >= dailyTarget ? "Cap RM10 Tercapai" : "Formula 30% Aktif"}</p>
              </div>
              <div className="mt-5 pt-5 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
                <div><span className="text-[7px] font-black text-slate-500 uppercase block mb-1">Bersih (Bulan)</span><span className="text-xs font-black text-white">{formatCurrency(stats.profit)}</span></div>
                <div><span className="text-[7px] font-black text-slate-500 uppercase block mb-1">Tabung (Bulan)</span><span className="text-xs font-black text-emerald-500">{formatCurrency(stats.maintenance)}</span></div>
              </div>
            </section>
          </div>
        )}

        {/* TAB MISI */}
        {activeTab === 'misi' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
             <section className="bg-slate-900 rounded-[2.5rem] p-6 mb-4 border border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5"><Target className="w-16 h-16" /></div>
                <div className="flex justify-between items-end mb-5 relative z-10">
                    <div className="text-left">
                        <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1 text-left">Sasaran RM {viewDate.toLocaleString('ms-MY', { month: 'short' })}</p>
                        {isEditingTarget ? (
                            <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-lg border border-orange-500/50">
                                <input type="number" value={tempTarget} onChange={(e) => setTempTarget(e.target.value)} className="bg-transparent text-lg font-black w-20 text-white outline-none" autoFocus />
                                <button onClick={() => { setTarget(parseFloat(tempTarget)); setIsEditingTarget(false); }} className="p-1 bg-orange-500 rounded-md"><Check className="w-3 h-3" /></button>
                            </div>
                        ) : (
                            <h3 onClick={() => setIsEditingTarget(true)} className="text-2xl font-black text-white flex items-center gap-2 cursor-pointer">{formatCurrency(target)}<Edit2 className="w-3.5 h-3.5 text-slate-600" /></h3>
                        )}
                    </div>
                    <div className="text-right">
                        <p className="text-orange-500 font-black text-3xl italic leading-none">{progressPercent.toFixed(0)}%</p>
                        <p className="text-[8px] font-bold text-slate-600 uppercase tracking-widest mt-1">Selesai</p>
                    </div>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden shadow-inner mb-5">
                    <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-1000" style={{ width: `${progressPercent}%` }} />
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1 text-center">Target Harian (22 Hari Kerja)</p>
                    <p className="text-xl font-black text-white text-center">{formatCurrency(dailyTarget)} <span className="text-[9px] opacity-40">/ Hari</span></p>
                </div>
            </section>

            <section className="bg-slate-900 border border-slate-800 p-6 rounded-[2.5rem] shadow-xl">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-left">
                        <h4 className="text-[9px] font-black text-white uppercase tracking-widest flex items-center gap-2"><TrendingUp className="w-3.5 h-3.5 text-orange-500" /> Misi Milestone</h4>
                        <p className="text-[7px] text-slate-600 font-bold uppercase mt-0.5">Job Selesai Bulan Ini</p>
                    </div>
                    {isEditingJobTarget ? (
                      <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg">
                        <input type="number" value={tempJobTarget} onChange={(e) => setTempJobTarget(e.target.value)} className="bg-transparent text-white text-xs font-black w-10 text-center outline-none" />
                        <button onClick={() => { setJobTarget(parseInt(tempJobTarget)); setIsEditingJobTarget(false); }} className="p-1 bg-green-500 rounded-md text-white"><Check className="w-2.5 h-2.5" /></button>
                      </div>
                    ) : (
                      <button onClick={() => setIsEditingJobTarget(true)} className="text-[9px] font-black text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/20 flex items-center gap-1">
                        {stats.jobs} / {jobTarget} Job <Edit2 className="w-2.5 h-2.5" />
                      </button>
                    )}
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 transition-all duration-1000" style={{ width: `${Math.min((stats.jobs/jobTarget)*100, 100)}%` }}></div>
                </div>
            </section>
          </div>
        )}
      </main>

      {/* NAVIGATION BAR */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-slate-950/90 backdrop-blur-2xl border-t border-slate-800/50 flex justify-around items-center z-50">
            <button onClick={() => setActiveTab('dompet')} className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'dompet' ? 'text-orange-500 scale-110' : 'text-slate-600 opacity-60'}`}>
                <Wallet className="w-5 h-5" /><span className="text-[8px] font-black uppercase text-center">Dompet</span>
            </button>
            <button onClick={() => setActiveTab('stats')} className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'stats' ? 'text-orange-500 scale-110' : 'text-slate-600 opacity-60'}`}>
                <Activity className="w-5 h-5" /><span className="text-[8px] font-black uppercase text-center">Stats</span>
            </button>
            <button onClick={() => setActiveTab('misi')} className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'misi' ? 'text-orange-500 scale-110' : 'text-slate-600 opacity-60'}`}>
                <Target className="w-5 h-5" /><span className="text-[8px] font-black uppercase text-center">Misi</span>
            </button>
      </footer>
    </div>
  );
};

export default App;