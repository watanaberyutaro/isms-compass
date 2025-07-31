'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Settings, FileText, Activity, CheckCircle, Award } from 'lucide-react'
import styles from './Process.module.css'

const steps = [
  {
    icon: MessageCircle,
    title: '無料相談',
    description: '現状をヒアリングし、最適なプランをご提案',
    duration: '即日〜3日',
  },
  {
    icon: Settings,
    title: '初期設定',
    description: 'クラウドシステムの設定と体制構築',
    duration: '1週間',
  },
  {
    icon: FileText,
    title: '文書作成',
    description: 'テンプレートを活用した効率的な文書整備',
    duration: '1〜2ヶ月',
  },
  {
    icon: Activity,
    title: '運用支援',
    description: 'PDCAサイクルの確立と定着化',
    duration: '3〜4ヶ月',
  },
  {
    icon: CheckCircle,
    title: '内部監査',
    description: '専門監査員による内部監査の実施',
    duration: '1ヶ月',
  },
  {
    icon: Award,
    title: '外部審査',
    description: '認証機関による審査と認証取得',
    duration: '1ヶ月',
  },
]

interface ProcessProps {
  id?: string
}

export const Process: React.FC<ProcessProps> = ({ id }) => {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            導入の流れ
          </h2>
          <p className={styles.subtitle}>
            6つのステップで確実にISO 27001を取得
          </p>
        </motion.div>
        
        <div className={styles.processContainer}>
          <div className={styles.timeline} />
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.step}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>
                        STEP {index + 1}: {step.title}
                      </h3>
                      <p className={styles.stepDescription}>{step.description}</p>
                      <span className={styles.stepDuration}>{step.duration}</span>
                    </div>
                    <div className={styles.stepIconWrapper}>
                      <div className={styles.stepIcon}>
                        <step.icon className={styles.stepIconInner} />
                      </div>
                    </div>
                    <div className={styles.stepPlaceholder} />
                  </>
                ) : (
                  <>
                    <div className={styles.stepPlaceholder} />
                    <div className={styles.stepIconWrapper}>
                      <div className={styles.stepIcon}>
                        <step.icon className={styles.stepIconInner} />
                      </div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>
                        STEP {index + 1}: {step.title}
                      </h3>
                      <p className={styles.stepDescription}>{step.description}</p>
                      <span className={styles.stepDuration}>{step.duration}</span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}