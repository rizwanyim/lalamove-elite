import { 
  Plus, Trash2, Wallet, Target, TrendingUp, Calendar, 
  Truck, Wrench, Settings, Edit2, Check, 
  X, AlertCircle, Save, ChevronRight, Cloud, BarChart3, CreditCard,
  ChevronLeft
} from 'lucide-react';

// Your web app's Firebase configuration
const firebaseConfig = {
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
const appId = 'lalamove-elite-2026'; // ID unik anda

const App = () => {
  const [user, setUser] = useState(null);
  const [earnings, setEarnings] = useState([]);
  const [target, setTarget] = useState(1000);
  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [tempTarget, setTempTarget] = useState(1000);
  
  const [viewDate, setViewDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [jobsInput, setJobsInput] = useState('');
  const [spendingInput, setSpendingInput] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);

  const MAINTENANCE_CAP = 10; 
  const EXPENSE_RATIO = 0.30; 
  const DAYS_IN_CYCLE = 30;

  const dynamicDailyGoal = (target / 20) + MAINTENANCE_CAP;

  useEffect(() => {
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.error("Auth error:", error);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const q = collection(db, 'artifacts', appId, 'public', 'data', 'earnings');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEarnings(sortedData);
      setLoading(false);
    }, (error) => {
      console.error("Firestore error:", error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  const selectedMonth = viewDate.getMonth();
  const selectedYear = viewDate.getFullYear();

  const monthlyEntries = earnings.filter(item => {
    const d = new Date(item.date);
    return d.getMonth() === selectedMonth && d.getFullYear() === selectedYear;
  });

  const dailyStats = monthlyEntries.reduce((acc, curr) => {
    if (!acc[curr.date]) acc[curr.date] = { totalNet: 0, totalJobs: 0, totalSpending: 0 };
    acc[curr.date].totalNet += curr.net;
    acc[curr.date].totalJobs += curr.jobs;
    acc[curr.date].totalSpending += (curr.spending || 0);
    return acc;
  }, {});

  let totalRealProfit = 0;
  let totalMaintenanceAllocated = 0;
  let totalJobsMonth = 0;
  let totalSpendingMonth = 0;

  Object.values(dailyStats).forEach(day => {
    const dayMaintenance = Math.min(day.totalNet * EXPENSE_RATIO, MAINTENANCE_CAP);
    totalRealProfit += (day.totalNet - dayMaintenance - day.totalSpending);
    totalMaintenanceAllocated += dayMaintenance;
    totalJobsMonth += day.totalJobs;
    totalSpendingMonth += day.totalSpending;
  });

  const uniqueDaysWorked = Object.keys(dailyStats).length;
  const progressPercent = Math.min((totalRealProfit / target) * 100, 100);
  const remainingToTarget = Math.max(0, target - totalRealProfit);

  const todayStr = new Date().toISOString().split('T')[0];
  const todayData = dailyStats[todayStr] || { totalNet: 0, totalJobs: 0, totalSpending: 0 };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !user) return;
    const payload = {
      net: parseFloat(amount),
      jobs: parseInt(jobsInput) || 0,
      spending: parseFloat(spendingInput) || 0,
      date: date,
      timestamp: Date.now()
    };
    try {
      if (editingId) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'earnings', editingId);
        await updateDoc(docRef, payload);
        setEditingId(null);
      } else {
        const colRef = collection(db, 'artifacts', appId, 'public', 'data', 'earnings');
        await addDoc(colRef, payload);
      }
      resetForm();
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setAmount(item.net.toString());
    setJobsInput(item.jobs.toString());
    setSpendingInput(item.spending ? item.spending.toString() : '');
    setDate(item.date);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setAmount('');
    setJobsInput('');
    setSpendingInput('');
    setDate(new Date().toISOString().split('T')[0]);
    setShowForm(false);
    setEditingId(null);
  };

  const changeMonth = (offset) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1);
    setViewDate(newDate);
  };

  const handleDelete = async () => {
    if (!confirmDeleteId || !user) return;
    try {
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'earnings', confirmDeleteId);
      await deleteDoc(docRef);
      setConfirmDeleteId(null);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('ms-MY', { style: 'currency', currency: 'MYR' }).format(val);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mb-4"></div>
        <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.2em]">Menghubungkan ke Cloud Elite...</p>
        <p className="text-slate-300 text-[8px] mt-2 uppercase">Pastikan Firebase Config sudah diisi dalam App.jsx</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      
      {confirmDeleteId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-xs w-full shadow-2xl">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-4">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h3 className="text-center font-black text-slate-900 text-lg mb-2">Hapus Rekod?</h3>
            <p className="text-center text-slate-500 text-sm mb-6 leading-relaxed px-2">Data ini akan dihapus permanen dari jurnal Elite Anda.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDeleteId(null)} className="flex-1 py-3 font-bold text-slate-400 bg-slate-100 rounded-xl">Batal</button>
              <button onClick={handleDelete} className="flex-1 py-3 font-bold text-white bg-red-500 rounded-xl shadow-lg transition-all text-sm">Hapus</button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-orange-600 text-white pt-8 pb-16 px-6 rounded-b-[32px] shadow-lg relative overflow-hidden">
        <div className="max-w-md mx-auto relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-xl font-bold flex items-center gap-2 italic uppercase tracking-tighter">
                <Truck className="w-6 h-6" /> Lalamove Elite
              </h1>
              <div className="mt-2 flex items-center gap-2">
                {isEditingTarget ? (
                  <div className="flex items-center gap-1 bg-orange-700/50 rounded-xl p-1 border border-orange-400/30">
                    <span className="text-xs font-bold pl-1">RM</span>
                    <input 
                      type="number" value={tempTarget} onChange={(e) => setTempTarget(e.target.value)}
                      className="bg-transparent border-none text-white text-xs font-black w-16 focus:ring-0 p-1"
                      autoFocus
                    />
                    <button onClick={() => { setTarget(parseFloat(tempTarget)); setIsEditingTarget(false); }} className="p-1 bg-green-500 rounded-lg shadow-sm">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setIsEditingTarget(true)} className="flex items-center gap-2 bg-orange-700/30 px-3 py-1.5 rounded-full border border-orange-400/30 group transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-wider">Target: {formatCurrency(target)}</span>
                    <Edit2 className="w-3 h-3 text-orange-200 opacity-50 group-hover:opacity-100" />
                  </button>
                )}
                <div className="bg-green-500/20 text-green-200 text-[8px] font-black px-2 py-1 rounded border border-green-500/30 flex items-center gap-1">
                  <Cloud className="w-2 h-2" /> CLOUD SYNC
                </div>
              </div>
            </div>
            <div className="bg-orange-500/50 p-2 rounded-2xl border border-orange-400/50 shadow-inner">
              <Settings className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-6 bg-black/10 rounded-2xl p-1.5 border border-white/10 backdrop-blur-md text-white">
            <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 leading-none mb-1">Jurnal</p>
              <p className="text-sm font-black uppercase tracking-tighter leading-none">
                {viewDate.toLocaleString('ms-MY', { month: 'long', year: 'numeric' })}
              </p>
            </div>
            <button onClick={() => changeMonth(1)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center">
            <p className="text-orange-100 text-[10px] mb-1 uppercase font-black opacity-80 tracking-widest">Duit Poket (Baki Bersih)</p>
            <h2 className="text-5xl font-black mb-3 drop-shadow-lg tracking-tighter">{formatCurrency(totalRealProfit)}</h2>
            <div className="flex justify-center gap-2">
                <div className="bg-black/10 px-3 py-1.5 rounded-xl text-[9px] font-black border border-white/10 backdrop-blur-sm">
                  {uniqueDaysWorked} HARI KERJA
                </div>
                <div className="bg-black/10 px-3 py-1.5 rounded-xl text-[9px] font-black border border-white/10 backdrop-blur-sm uppercase">
                  {totalJobsMonth} Job Selesai
                </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-5 mb-5 border border-white relative overflow-hidden group">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-slate-400 text-[10px] font-black uppercase mb-0.5 tracking-widest">Prestasi Sasaran</p>
              <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none">
                {remainingToTarget > 0 ? `Kurang ${formatCurrency(remainingToTarget)}` : "SASARAN DICAPAI! 🏆"}
              </h3>
            </div>
            <div className="text-orange-600 font-black text-2xl italic leading-none">{progressPercent.toFixed(0)}%</div>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-orange-500 rounded-full transition-all duration-1000 shadow-sm" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-slate-900 rounded-2xl p-4 text-white shadow-xl flex flex-col justify-between h-28 border border-slate-800">
            <p className="text-orange-500 text-[9px] font-black uppercase tracking-widest">Gaji Hari Ini</p>
            <p className="text-xl font-black leading-none">{formatCurrency(todayData.totalNet)}</p>
            <div className="pt-2 border-t border-slate-800">
              <p className="text-[8px] text-slate-500 font-bold uppercase truncate tracking-tighter">Goal: {formatCurrency(dynamicDailyGoal)}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between h-28">
            <p className="text-emerald-600 text-[9px] font-black uppercase tracking-widest">Tabung Maintenance</p>
            <p className="text-xl font-black text-slate-900 leading-none">{formatCurrency(totalMaintenanceAllocated)}</p>
            <div className="pt-2 border-t border-slate-50">
              <p className="text-[8px] text-slate-400 font-bold uppercase italic tracking-tighter">RM10 Cap Harian</p>
            </div>
          </div>
        </div>

        {!showForm ? (
          <button 
            onClick={() => setShowForm(true)}
            className="w-full bg-white hover:bg-slate-50 text-slate-900 py-4 rounded-2xl font-black shadow-md border border-slate-200 flex items-center justify-center gap-3 transition-all mb-6 active:scale-95 group"
          >
            <Plus className="w-5 h-5 bg-orange-600 rounded-lg text-white" /> 
            <span className="uppercase tracking-widest text-xs">Rekod Job Baru</span>
          </button>
        ) : (
          <div className="bg-white p-6 rounded-2xl shadow-2xl mb-6 border-2 border-orange-500 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-black text-slate-900 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                {editingId ? 'Edit Data' : 'Detail Penghantaran'}
              </h3>
              <button onClick={resetForm} className="p-1.5 bg-slate-50 rounded-full text-slate-400"><X className="w-4 h-4" /></button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-1.5 ml-1 tracking-widest text-center">Hasil Wallet Lalamove</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-slate-300 text-xl">RM</span>
                  <input 
                    type="number" step="0.01" value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-12 p-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-orange-500 focus:outline-none text-2xl font-black tracking-tight transition-all"
                    autoFocus
                  />
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-orange-600">
                <label className="block text-[9px] font-black uppercase mb-2 ml-1 flex items-center gap-2 tracking-widest">
                   <CreditCard className="w-3 h-3" /> Total Belanja
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-orange-300 text-lg">RM</span>
                  <input 
                    type="number" step="0.01" value={spendingInput}
                    onChange={(e) => setSpendingInput(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-11 p-2.5 bg-white border-2 border-transparent focus:border-orange-300 rounded-xl focus:outline-none text-lg font-black text-orange-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 rounded-xl p-2 px-3 border border-slate-100 text-center">
                  <label className="block text-[8px] font-black text-slate-400 uppercase mb-0.5">Bil. Job</label>
                  <input 
                    type="number" value={jobsInput}
                    onChange={(e) => setJobsInput(e.target.value)}
                    placeholder="1"
                    className="w-full bg-transparent font-black text-center text-lg focus:outline-none"
                  />
                </div>
                <div className="bg-slate-50 rounded-xl p-2 px-3 border border-slate-100">
                  <label className="block text-[8px] font-black text-slate-400 uppercase mb-0.5">Tarikh</label>
                  <input 
                    type="date" value={date}
                    onChange={(v) => setDate(v.target.value)}
                    className="w-full bg-transparent font-bold text-[9px] focus:outline-none"
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-orange-600 text-white py-3.5 rounded-xl font-black shadow-lg shadow-orange-100 uppercase tracking-widest flex items-center justify-center gap-2 text-xs active:scale-95 transition-all">
                {editingId ? <Save className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                {editingId ? 'Kemaskini' : 'Sahkan'}
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-2xl p-5 mb-6 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-4 relative z-10">
                <BarChart3 className="w-3.5 h-3.5 text-orange-500" />
                <h4 className="text-slate-900 font-black text-[9px] uppercase tracking-widest leading-none">Ringkasan {viewDate.toLocaleString('ms-MY', { month: 'short' })}</h4>
            </div>
            <div className="grid grid-cols-3 gap-2 relative z-10">
                <div className="bg-orange-50 p-2.5 rounded-xl border border-orange-100 text-center shadow-sm">
                    <p className="text-[7px] font-black text-orange-600 uppercase mb-1 truncate tracking-tighter">Total Gaji</p>
                    <p className="text-[11px] font-black text-slate-900 truncate leading-none tracking-tighter">{formatCurrency(totalRealProfit)}</p>
                </div>
                <div className="bg-indigo-50 p-2.5 rounded-xl border border-indigo-100 text-center shadow-sm">
                    <p className="text-[7px] font-black text-indigo-600 uppercase mb-1 truncate tracking-tighter">Job Selesai</p>
                    <p className="text-[11px] font-black text-slate-900 leading-none">{totalJobsMonth}</p>
                </div>
                <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 text-center shadow-sm">
                    <p className="text-[7px] font-black text-emerald-600 uppercase mb-1 truncate tracking-tighter">Total Belanja</p>
                    <p className="text-[11px] font-black text-slate-900 truncate leading-none tracking-tighter">{formatCurrency(totalSpendingMonth)}</p>
                </div>
            </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-slate-900 font-black text-[9px] uppercase tracking-widest flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-orange-500" /> Jurnal Elite
            </h3>
            <span className="text-[8px] font-black text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
              {monthlyEntries.length} Rekod
            </span>
          </div>
          
          {monthlyEntries.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center opacity-50">
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest leading-none">Tiada rekod data.</p>
            </div>
          ) : (
            monthlyEntries.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center group border border-transparent hover:border-orange-100 transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md transition-transform group-hover:rotate-3 ${item.date === todayStr ? 'bg-orange-600' : 'bg-slate-900'}`}>
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-black text-slate-900 text-base leading-none">{formatCurrency(item.net)}</p>
                      <span className="text-[8px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md font-black uppercase">
                        {item.jobs} J
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter leading-none">
                          {new Date(item.date).toLocaleDateString('ms-MY', { day: 'numeric', month: 'short' })}
                        </p>
                        {item.spending > 0 && (
                            <p className="text-[8px] font-black text-orange-500 uppercase flex items-center gap-0.5 tracking-tighter leading-none">
                                <CreditCard className="w-2 h-2" /> -{formatCurrency(item.spending)}
                            </p>
                        )}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => startEdit(item)} className="p-2 text-slate-300 hover:text-orange-600 transition-all active:scale-90">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setConfirmDeleteId(item.id)} className="p-2 text-slate-300 hover:text-red-500 transition-all active:scale-90">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-10 text-center pb-8 opacity-40">
           <div className="inline-flex items-center gap-2 text-[9px] font-black text-slate-300 uppercase tracking-widest">
             <Wrench className="w-2.5 h-2.5" /> Created by Wan SK
           </div>
        </div>
      </main>
    </div>
  );
};

export default App;