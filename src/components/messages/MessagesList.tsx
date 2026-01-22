import { Star, Paperclip } from "lucide-react"

interface Message {
  id: number
  sender: string
  avatar: string
  subject: string
  preview: string
  time: string
  unread: boolean
  starred: boolean
  hasAttachment: boolean
}

const messages: Message[] = [
  {
    id: 1,
    sender: "Jean Dupont",
    avatar: "JD",
    subject: "Nouvelle demande de fonctionnalité",
    preview: "Bonjour, j'aimerais discuter d'une nouvelle fonctionnalité pour...",
    time: "il y a 5 min",
    unread: true,
    starred: true,
    hasAttachment: true
  },
  {
    id: 2,
    sender: "Marie Martin",
    avatar: "MM",
    subject: "Rapport mensuel disponible",
    preview: "Le rapport du mois de janvier est maintenant disponible...",
    time: "il y a 1h",
    unread: true,
    starred: false,
    hasAttachment: true
  },
  {
    id: 3,
    sender: "Pierre Bernard",
    avatar: "PB",
    subject: "Question sur la commande #3842",
    preview: "J'ai une question concernant ma récente commande...",
    time: "il y a 3h",
    unread: false,
    starred: true,
    hasAttachment: false
  },
  {
    id: 4,
    sender: "Sophie Laurent",
    avatar: "SL",
    subject: "Mise à jour du profil",
    preview: "J'ai mis à jour mes informations de profil comme demandé...",
    time: "Hier",
    unread: false,
    starred: false,
    hasAttachment: false
  },
  {
    id: 5,
    sender: "Lucas Robert",
    avatar: "LR",
    subject: "Feedback sur le nouveau design",
    preview: "Le nouveau design est vraiment impressionnant! Quelques suggestions...",
    time: "Il y a 2 jours",
    unread: false,
    starred: false,
    hasAttachment: true
  }
]

function MessagesList() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Boîte de Réception
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Messages récents
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all">
            Nouveau Message
          </button>
        </div>
      </div>

      <div className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 md:p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer ${
              message.unread ? "bg-blue-50/50 dark:bg-blue-900/10" : ""
            }`}
          >
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {message.avatar}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm md:text-base ${message.unread ? "font-bold" : "font-semibold"} text-slate-800 dark:text-white truncate`}>
                      {message.sender}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {message.starred && (
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    )}
                    <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {message.time}
                    </span>
                  </div>
                </div>
                <p className={`text-sm ${message.unread ? "font-semibold" : "font-normal"} text-slate-700 dark:text-slate-300 mb-1 truncate`}>
                  {message.subject}
                </p>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate flex-1">
                    {message.preview}
                  </p>
                  {message.hasAttachment && (
                    <Paperclip className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessagesList
