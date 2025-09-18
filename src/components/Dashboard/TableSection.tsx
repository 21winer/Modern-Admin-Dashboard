import { TrendingDown, TrendingUp } from "lucide-react";

export type OrderStatus = 'completed' | 'pending' | 'cancelled' | string;

export interface RecentOrder {
    id: string;
    produit: string;
    prix: string;
    statut: OrderStatus;
    date: string;
    customer: string;
}

export const recentOrder: RecentOrder[] = [
    {
        id: "#1",
        produit: "Ordinateur portable",
        prix: "1200 €",
        statut: "completed",
        date: "2024-09-15",
        customer: "Alex Lawson"
    },
    {
        id: "#2",
        produit: "Smartphone Pro",
        prix: "950 €",
        statut: "pending",
        date: "2024-09-14",
        customer: "Léa Akamakou"
    },
    {
        id: "#3",
        produit: "Écouteurs sans fil",
        prix: "150 €",
        statut: "pending",
        date: "2024-09-13",
        customer: "Marc Apoutchou"
    },
    {
        id: "#4",
        produit: "Tablette graphique",
        prix: "350 €",
        statut: "completed",
        date: "2024-09-12",
        customer: "Amah Kwatcha"
    },
    {
        id: "#5",
        produit: "Clavier mécanique",
        prix: "120 €",
        statut: "cancelled",
        date: "2024-09-11",
        customer: "Jean Leroy"
    },
    {
        id: "#6",
        produit: "Souris ergonomique",
        prix: "65 €",
        statut: "completed",
        date: "2024-09-10",
        customer: "Marie Belford"
    }
];

export interface TopProducts {
    name: string;
    sales: number;
    revenue: number;
    trend: "up" | "down";
    change: string;
}

export const topProducts: TopProducts[] = [
    {
        name: "Ordinateur portable Pro",
        sales: 1500,
        revenue: 1800000,
        trend: "up",
        change: "+12.5%"
    },
    {
        name: "Smartphone Elite",
        sales: 1200,
        revenue: 1140000,
        trend: "down",
        change: "-9.8%"
    },
    {
        name: "Souris Gaming",
        sales: 2100,
        revenue: 147000,
        trend: "up",
        change: "+5.2%"
    },
    {
        name: "Webcam HD Pro",
        sales: 1400,
        revenue: 112000,
        trend: "down",
        change: "-2.1%"
    },
    {
        name: "Disque dur 2To",
        sales: 1750,
        revenue: 175000,
        trend: "up",
        change: "+1.3%"
    }
];

function TableSection() {
    const getStatusColor = (status: OrderStatus) => {
        switch (status) {
            case "completed":
                return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
            case "pending":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "cancelled":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
            default:
                return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400";
        }
    };

    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Commandes Récents</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Dernière commandes client</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Voir Tout</button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto mt-4">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">ID Commande</th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">Client</th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">Produit</th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">Prix</th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">Statut</th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrder.map((order) => (
                                <tr key={order.id} className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">{order.id}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">{order.customer}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">{order.produit}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className="text-sm font-medium text-slate-800 dark:text-white">{order.prix}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`font-medium text-slate-400 dark:text-white text-xs px-3 py-1 rounded-full ${getStatusColor(order.statut)}`}>{order.statut}</span>
                                    </td>
                                    <td className="p-4">
                                        <span className="font-medium text-slate-400 dark:text-white text-xs px-3 py-1 rounded-full">{order.date}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Top products */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Top Produits</h3>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Meilleures catégories de produits</p>
                </div>
                <div className="space-y-4">
                    {topProducts.map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <div>
                                <h4 className="text-sm font-semibold text-slate-500 dark:text-white">{item.name}</h4>
                                <p className="text-xs text-slate-400">Ventes: {item.sales}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-slate-500 dark:text-white">{item.revenue.toLocaleString()}</p>
                                <div className="flex items-center space-x-1">
                                    {item.trend === "up" ? <TrendingUp className="w-5 h-5 text-emerald-500" /> : <TrendingDown className="w-5 h-5 text-red-500" />}
                                    <span className={`text-xs font-medium ${item.trend === "up" ? 'text-emerald-500' : 'text-red-500'}`}>{item.change}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TableSection;