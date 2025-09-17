import type { PropsWithChildren } from "react"
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonsProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonVariant,
    size?: ButtonSize,
    isLoading?: boolean
}
function Button({
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    disabled = false,
    className = "",
    ...rest
}: PropsWithChildren<ButtonsProps>) {
    // Classes de base communes à tous les boutons
    const baseClasses = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

    // Variantes de style
    const variants = {
        primary: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
        secondary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline: "bg-gray-300 text-white hover:bg-gray-700 focus:ring-gray-500",
        ghost: "bg-gray-700 text-white hover:bg-gray-100 focus:ring-gray-500"
    }

    // Tailles
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base"
    }

    // Etat disabled
    const disabledClasses = disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""

    // Combinaison de toutes les classes
    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`

    return (

        <button 
            className = {buttonClasses}
            disabled = {disabled || isLoading}
            {...rest}
        >
           {isLoading ? (
            <div className="flex items-center justify-center">
                {/* Animation de chargement simplifié */}
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2">
                </div>
                chargement ...
            </div>
           ):(
            children
           )}
        </button>

    )
}

export default Button