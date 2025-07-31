'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './Section.module.css'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'navy'
  id?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
}) => {
  const classNames = [
    styles.section,
    styles[background],
    className
  ].filter(Boolean).join(' ')
  
  return (
    <motion.section
      id={id}
      className={classNames}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  )
}