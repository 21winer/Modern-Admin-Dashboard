import type { UserRole } from '@/lib/UserContext'

interface UserStatusProps {
  role: UserRole
  size?: "sm" | "md" | "lg"
}

const roleColors = {
  "Admin": "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  "Comptabilité": "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  "Manager": "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Employé": "bg-slate-100 text-slate-600 dark:bg-slate-700/30 dark:text-slate-400",
  "Client": "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
}

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base"
}

function UserStatus({ role, size = "sm" }: UserStatusProps) {
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${roleColors[role]} ${sizeClasses[size]}`}>
      {role}
    </span>
  )
}

export default UserStatus
