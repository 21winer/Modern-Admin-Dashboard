import { Clock, CreditCard, MessageCircle, ShoppingCart, User, User2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Activity {
    id: number;
    type: string;
    icon: LucideIcon;
    title: string;
    description: string;
    time: string;
    color: string;
    bgColor: string;
}
export const activity: Activity[] = [
    {
        "id": 1,
        "type": "user",
        "icon": User2,
        "title": "Nouvel utilisateur enregistré",
        "description": "Jean Smith a créé un compte.",
        "time": "il y a 2 minutes",
        "color": "text-blue-500",
        "bgColor": "bg-blue-100 dark:bg-blue-900/30"
    },
    {
        "id": 2,
        "type": "order",
        "icon": ShoppingCart,
        "title": "Nouvelle commande reçue",
        "description": "Commande #3841 pour 2,399€.",
        "time": "il y a 5 minutes",
        "color": "text-emerald-500",
        "bgColor": "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
        "id": 3,
        "type": "sale",
        "icon": CreditCard,
        "title": "Paiement reçu",
        "description": "Paiement de 1,500€ pour la commande #3840.",
        "time": "il y a 30 minutes",
        "color": "text-green-500",
        "bgColor": "bg-green-100 dark:bg-green-900/30"
    },
    {
        "id": 4,
        "type": "order",
        "icon": ShoppingCart,
        "title": "Commande annulée",
        "description": "Commande #3839 a été annulée par le client.",
        "time": "il y a 1 heure",
        "color": "text-red-500",
        "bgColor": "bg-red-100 dark:bg-red-900/30"
    },
    {
        "id": 5,
        "type": "user",
        "icon": User,
        "title": "Mise à jour du profil",
        "description": "Marie Léger a mis à jour ses informations de profil.",
        "time": "il y a 2 heures",
        "color": "text-purple-500",
        "bgColor": "bg-purple-100 dark:bg-purple-900/30"
    },
    {
        "id": 6,
        "type": "comment",
        "icon": MessageCircle,
        "title": "Nouveau commentaire",
        "description": "Commentaire sur le produit 'Souris ergonomique'.",
        "time": "il y a 3 heures",
        "color": "text-cyan-500",
        "bgColor": "bg-cyan-100 dark:bg-cyan-900/30"
    }
]
function ActivityFeed() {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50">
            <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Fil d'activité</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Système d'activités récents</p>
                </div>
                <button className="text-blue-500 hover:text-blue-700">Voir Tout</button>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {activity.map((item) => {
                        return (
                            <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className={`p-2 rounded-lg ${item.bgColor}`}>
                                    <item.icon className={`w-4 h-4 ${item.color}`}/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">{item.description}</p>
                                    <div className="flex-1 items-center space-x-1 mt-1 ">
                                        <Clock className="w-3 h-3 text-slate-400" />
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                            {item.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ActivityFeed