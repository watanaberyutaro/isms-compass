'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  className?: string
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ')
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.button>
  )
}