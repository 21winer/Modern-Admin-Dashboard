import React from 'react'
import type { PropsWithChildren } from "react"

type Inputsize = 'sm' | 'md' | 'lg'
type InputVariant = 'default' | 'filled' | 'outline'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  inputsize?: Inputsize,
  variant?: InputVariant,
  label?: string,
  error?: string,
  helperText?: string,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode
}
function Input({
  inputsize = 'md',
  variant = 'default',
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  ...rest
}: PropsWithChildren<InputProps>) {
  // Classes de base
  const baseClasses = 'w-full transition-colors focus-outline-none focus:ring-2 focus:ring-purple-500'

  // Variantes
  const variants = {
    default: 'border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500',
    filled: 'border border-transparent rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 hover:bg-gray-200',
    outline: 'border border-gray-300 rounded-lg bg-transparent text-gray-900 placeholder-gray-500'
  }

  // Tailles
  const inputsizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-4 py-3 text-base'
  }

  // Etat disabled
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : ''

  // Classes pour le conteneur d'icône
  const iconContainerClasses = 'absolute inset-y-0 flex items-center pointer-events-none'

  // Combinaison des classes
  const inputClasses = `${baseClasses} ${variants[variant]} ${inputsizes[inputsize]} ${disabledClasses} ${className} ${leftIcon ? 'pl-10' : ''
    } ${rightIcon ? 'pr-10' : ''}`

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div>
        {leftIcon && (
          <div className={`${iconContainerClasses} left-0 pl-3`}>
            {leftIcon}
          </div>
        )}

        <input 
          className = {inputClasses}
          disabled = {disabled}
          {...rest} 
        />

        {rightIcon && (
          <div className={`${iconContainerClasses} right-0 pr-3`
          }>
            {rightIcon}
          </div>
        )}
      </div>

      {error ? (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      ) : null}
    </div>
  )
}

export default Input