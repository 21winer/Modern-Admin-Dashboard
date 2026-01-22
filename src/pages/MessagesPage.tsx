import MessagesStatsGrid from '@/components/messages/MessagesStatsGrid'
import MessagesList from '@/components/messages/MessagesList'

function MessagesPage() {
  return (
    <div className="space-y-6">
      {/* Grille de statistiques Messages */}
      <MessagesStatsGrid />

      {/* Liste des messages */}
      <MessagesList />
    </div>
  )
}

export default MessagesPage
