import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export interface ChartData {
    mois: string,
    revenus: number,
    dépenses: number
}
// Les données doivent être définies ou importées
export const Data: ChartData[] = [
    { mois: 'Jan', revenus: 40000, dépenses: 24000 },
    { mois: 'Fev', revenus: 30000, dépenses: 13980 },
    { mois: 'Mar', revenus: 20000, dépenses: 9800 },
    { mois: 'Avr', revenus: 27800, dépenses: 39080 },
    { mois: 'Mai', revenus: 18900, dépenses: 48000 },
    { mois: 'Juin', revenus: 23900, dépenses: 38000 },
    { mois: 'Juil', revenus: 34900, dépenses: 43000 },
    { mois: 'Août', revenus: 45000, dépenses: 32000 },
    { mois: 'Sep', revenus: 50000, dépenses: 40000 },
    { mois: 'Oct', revenus: 48000, dépenses: 35000 },
    { mois: 'Nov', revenus: 60000, dépenses: 42000 },
    { mois: 'Déc', revenus: 55000, dépenses: 38000 },
];

function revenueChart() {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 ">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        Graphique de Revenus
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Revenus Mensuelles et Dépenses
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to bg-purple-500 rounded-full"></div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            <span>
                                Revenus
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to bg-slate-500 rounded-full"></div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                            <span>
                                Dépenses
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={Data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        barGap={70} // Ajout de l'espacement entre les barres
                    >
                        <defs>
                            {/* Dégradé pour les revenus */}
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                            </linearGradient>
                            {/* Dégradé pour les dépenses, ajusté pour un meilleur rendu */}
                            <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#94A3B8" stopOpacity={0.8}/>
                                <stop offset="100%" stopColor="#64748B" stopOpacity={0.8}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700"vertical={false}
                        opacity={0.3} />
                        <XAxis
                            dataKey="mois"
                            stroke="#64748b"
                            className="dark:stroke-slate-400"
                            tick={{ fill: 'gray' }}
                        />
                        <YAxis
                            stroke="#64748b"
                            className="dark:stroke-slate-400"
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                            tick={{ fill: 'gray' }}
                        />
                        <Tooltip
                            formatter={(value: number, name: string) => [`$${value.toLocaleString('en-US')}`, name]}
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px',
                                color: '#1e293b'
                            }}
                            labelStyle={{
                                color: '#1e293b'
                            }}
                        />
                        <Bar dataKey="revenus" fill="url(#revenueGradient)" barSize={30} />
                        <Bar dataKey="dépenses" fill="url(#expensesGradient)" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default revenueChart