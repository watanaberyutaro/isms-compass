'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './Card.module.css'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'small' | 'medium' | 'large'
  hoverable?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'medium',
  hoverable = false,
}) => {
  const classNames = [
    styles.card,
    styles[padding],
    hoverable && styles.hoverable,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <motion.div
      className={classNames}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}