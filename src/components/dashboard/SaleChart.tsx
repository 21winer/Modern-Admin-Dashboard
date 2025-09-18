import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

export interface SaleData {
    name: string;
    value: number;
    color: string;
    [key: string]: any; // compatible avec l'attente de Recharts (ChartDataInput)
}

export const salesData: SaleData[] = [
    {
        name: 'Électronique',
        value: 400,
        color: '#8b5cf6' // Violet
    },
    {
        name: 'Vêtements',
        value: 300,
        color: '#3b82f6' // Bleu
    },
    {
        name: 'Maison',
        value: 200,
        color: '#25ff14' // Vert
    },
    {
        name: 'Nourriture',
        value: 278,
        color: '#f97316' // Orange
    }
];
function SaleChart() {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 ">
            <div className="mb-6">
                <h3 className="text-lg text-slate-800 dark:text-white">
                    Ventes par Catégories
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Distribution de Productions
                </p>
            </div>
            <div className="h-48 flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={salesData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {salesData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value, _name, props) => [
                                `$${value}k`,
                                props?.payload?.name
                            ]}
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
                    </PieChart>
                </ResponsiveContainer>
            </div>
            {/* Section des détails en bas */}
            <div className="mt-6">
                <div className="flex flex-col space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {salesData.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                <span>{item.name}</span>
                            </div>
                            <span>{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SaleChart