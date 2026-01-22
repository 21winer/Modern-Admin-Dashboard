import { Calendar, Users, Clock, CheckCircle } from "lucide-react"

interface Event {
  id: number
  title: string
  date: string
  time: string
  type: "meeting" | "deadline" | "event" | "reminder"
  attendees?: number
  status: "upcoming" | "today" | "completed"
}

const events: Event[] = [
  {
    id: 1,
    title: "Réunion d'équipe hebdomadaire",
    date: "22 Jan 2024",
    time: "14:00 - 15:30",
    type: "meeting",
    attendees: 8,
    status: "today"
  },
  {
    id: 2,
    title: "Deadline projet client",
    date: "23 Jan 2024",
    time: "18:00",
    type: "deadline",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Conférence annuelle",
    date: "25 Jan 2024",
    time: "09:00 - 17:00",
    type: "event",
    attendees: 250,
    status: "upcoming"
  },
  {
    id: 4,
    title: "Révision du code",
    date: "21 Jan 2024",
    time: "10:00 - 12:00",
    type: "meeting",
    attendees: 5,
    status: "completed"
  },
  {
    id: 5,
    title: "Rapport mensuel à soumettre",
    date: "20 Jan 2024",
    time: "17:00",
    type: "reminder",
    status: "completed"
  }
]

const getEventColor = (type: string) => {
  switch (type) {
    case "meeting":
      return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 border-l-4 border-blue-500"
    case "deadline":
      return "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-500 border-l-4 border-red-500"
    case "event":
      return "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-500 border-l-4 border-purple-500"
    case "reminder":
      return "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 border-l-4 border-amber-500"
    default:
      return "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-l-4 border-slate-500"
  }
}

function EventsList() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Événements à Venir
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Votre calendrier cette semaine
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all">
            Nouvel Événement
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className={`p-4 rounded-xl ${getEventColor(event.type)} ${
                event.status === "completed" ? "opacity-60" : ""
              } hover:scale-[1.02] transition-all duration-200`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-sm font-semibold">
                      {event.title}
                    </h4>
                    {event.status === "completed" && (
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    )}
                    {event.status === "today" && (
                      <span className="px-2 py-0.5 bg-white dark:bg-slate-800 rounded-full text-xs font-medium flex-shrink-0">
                        Aujourd'hui
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs opacity-90">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 flex-shrink-0" />
                        <span>{event.attendees} participants</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsList
