'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../Card'
import { HelpCircle, DollarSign, FileText } from 'lucide-react'
import styles from './Problems.module.css'

const problems = [
  {
    icon: HelpCircle,
    title: 'ノウハウ不足で何から始めたら良いかわからない',
    description: 'ISO 27001の要求事項は複雑で、専門知識なしでは取得への道筋が見えません。',
  },
  {
    icon: DollarSign,
    title: 'コンサル費用や取得までの金額が不安',
    description: '一般的なコンサルティング費用は高額で、総額が見えない不安を抱えています。',
  },
  {
    icon: FileText,
    title: '文書や情報管理が煩雑で担当者が疲弊している',
    description: '大量の文書作成と管理が必要で、本業に支障をきたすほどの負担がかかります。',
  },
]

export const Problems: React.FC = () => {
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
            こんなお悩みありませんか？
          </h2>
          <p className={styles.subtitle}>
            多くの企業がISO 27001取得で直面する課題
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hoverable>
                <div className={styles.card}>
                  <problem.icon className={styles.icon} />
                  <h3 className={styles.cardTitle}>
                    {problem.title}
                  </h3>
                  <p className={styles.description}>
                    {problem.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}