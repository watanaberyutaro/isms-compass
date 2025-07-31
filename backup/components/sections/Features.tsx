'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Users, ShieldCheck } from 'lucide-react'
import styles from './Features.module.css'

const features = [
  {
    icon: Cloud,
    title: 'クラウド文書テンプレート管理',
    description: 'ISO 27001に必要な文書をクラウドで一元管理。テンプレートを活用して効率的に文書作成が可能です。',
    benefits: ['文書作成時間を80%削減', '常に最新版を管理', '監査対応も簡単'],
  },
  {
    icon: Users,
    title: '全国の専門家による内部監査対応',
    description: '全国50名以上の監査員ネットワークを活用。地域を問わず質の高い内部監査を実施します。',
    benefits: ['経験豊富な監査員', '地域密着型サポート', '監査後のフォローアップ'],
  },
  {
    icon: ShieldCheck,
    title: '機密情報の完全抹消支援',
    description: '情報セキュリティの要となる機密情報の適切な処理と完全抹消をサポートします。',
    benefits: ['データ消去証明書発行', '物理的破壊にも対応', 'コンプライアンス準拠'],
  },
]

interface FeaturesProps {
  id?: string
}

export const Features: React.FC<FeaturesProps> = ({ id }) => {
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
            ISMS Compassが選ばれる理由
          </h2>
          <p className={styles.subtitle}>
            3つの強みで、確実なISO 27001取得をサポート
          </p>
        </motion.div>
        
        <div className={styles.featuresContainer}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${styles.feature} ${
                index % 2 === 1 ? styles.featureReverse : ''
              }`}
            >
              <div className={styles.featureContent}>
                <div className={styles.featureHeader}>
                  <feature.icon className={styles.featureIcon} />
                  <h3 className={styles.featureTitle}>
                    {feature.title}
                  </h3>
                </div>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
                <ul className={styles.benefitsList}>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className={styles.benefit}>
                      <span className={styles.benefitDot} />
                      <span className={styles.benefitText}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.featureImage}>
                <div className={styles.imagePlaceholder}>
                  <feature.icon className={styles.placeholderIcon} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}