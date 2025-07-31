'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../Button'
import { Shield } from 'lucide-react'
import { HeroBackground } from '@/components/three/HeroBackground'
import styles from './Hero.module.css'

interface HeroProps {
  onCTAClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section className={styles.hero}>
      <HeroBackground />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
    </section>
  )
}