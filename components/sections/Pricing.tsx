'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../Card'
import { Button } from '../Button'
import { Check } from 'lucide-react'
import styles from './Pricing.module.css'

interface PricingProps {
  id?: string
  onCTAClick: () => void
}

const features = [
  'クラウド文書管理システム利用料込み',
  '全文書テンプレート提供',
  '専門コンサルタントによる月次サポート',
  '内部監査員派遣（年1回）',
  'メール・電話サポート無制限',
  '外部審査対策支援',
  '従業員向け教育資料提供',
  '更新審査サポート',
]

export const Pricing: React.FC<PricingProps> = ({ id, onCTAClick }) => {
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
            料金プラン
          </h2>
          <p className={styles.subtitle}>
            シンプルで分かりやすい料金体系
          </p>
        </motion.div>
        
        <div className={styles.pricingContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card padding="large" className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3 className={styles.planName}>
                  ISMS Compass スタンダードプラン
                </h3>
                <div className={styles.pricingDetails}>
                  <div className={styles.priceItem}>
                    <span className={styles.priceLabel}>初期費用</span>
                    <p className={styles.price}>
                      200,000<span className={styles.priceUnit}>円</span>
                    </p>
                  </div>
                  <span className={styles.priceSeparator}>+</span>
                  <div className={styles.priceItem}>
                    <span className={styles.priceLabel}>月額</span>
                    <p className={styles.price}>
                      70,000<span className={styles.priceUnit}>円</span>
                    </p>
                  </div>
                </div>
                <p className={styles.priceNote}>
                  ※外部審査機関への支払い（別途10～20万円程度）あり
                </p>
              </div>
              
              <div className={styles.featuresContainer}>
                <h4 className={styles.featuresTitle}>
                  プランに含まれるもの
                </h4>
                <ul className={styles.featuresList}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                      <Check className={styles.featureIcon} />
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.ctaContainer}>
                <Button size="large" onClick={onCTAClick}>
                  無料相談を申し込む
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}