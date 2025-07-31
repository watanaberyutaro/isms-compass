'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../Button'
import { Shield } from 'lucide-react'
import styles from './Hero.module.css'

interface HeroProps {
  onCTAClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.iconWrapper}
            >
              <Shield className={styles.icon} />
              <h1 className={styles.title}>
                半年〜１年で「ISO 27001」を取得し、
                <br />
                取引チャンスを逃さない。
              </h1>
              <p className={styles.subtitle}>
                ISMS Compassなら、初期費用20万円＋月額7万円で内部監査までワンストップ。
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="large" onClick={onCTAClick}>
                無料相談を申し込む
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}