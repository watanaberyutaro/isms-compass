'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import styles from './Stats.module.css'

const stats = [
  {
    value: 80,
    suffix: '社',
    label: '以上導入',
    description: '中小企業を中心に多数の実績',
  },
  {
    value: 97,
    suffix: '%',
    label: '満足度',
    description: 'お客様アンケート結果',
  },
  {
    value: 50,
    suffix: '名',
    label: '全国の監査員',
    description: '専門家ネットワーク',
  },
  {
    value: 7.2,
    suffix: 'ヶ月',
    label: '平均取得期間',
    description: '業界最速クラスの実績',
    decimals: 1,
  },
]

export const Stats: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            実績と信頼性
          </h2>
          <p className={styles.subtitle}>
            数字が物語る、ISMS Compassの実力
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp({
              end: stat.value,
              suffix: stat.suffix,
              decimals: stat.decimals || 0,
              duration: 2500,
            })
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.stat}
              >
                <div className={styles.statNumber} ref={ref as any}>
                  {count}
                </div>
                <div className={styles.statLabel}>
                  {stat.label}
                </div>
                <div className={styles.statDescription}>
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}