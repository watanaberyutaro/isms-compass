'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import styles from './FAQ.module.css'

const faqs = [
  {
    question: 'ISO 27001取得までの期間はどれくらいですか？',
    answer: '平均的には7.2ヶ月で取得可能です。企業規模や現在の管理体制によって前後しますが、最短6ヶ月、最長でも1年以内には取得できるようサポートいたします。',
  },
  {
    question: '初期費用と月額費用以外に必要な費用はありますか？',
    answer: '外部審査機関への審査費用（10～20万円程度）が別途必要です。これは認証機関に直接お支払いいただく費用となります。その他の隠れた費用は一切ございません。',
  },
  {
    question: '自社にIT専門の担当者がいなくても大丈夫ですか？',
    answer: 'はい、大丈夫です。ISMS Compassは専門知識がない方でも理解しやすいように設計されています。専門用語を避け、分かりやすい説明と手厚いサポートで、確実に取得まで導きます。',
  },
  {
    question: '内部監査員の派遣エリアは限定されますか？',
    answer: '全国対応可能です。50名以上の監査員ネットワークがあり、北海道から沖縄まで、お客様の所在地に合わせて適切な監査員を派遣いたします。',
  },
  {
    question: '取得後の更新審査もサポートしてもらえますか？',
    answer: 'もちろんです。ISO 27001は取得後も継続的な改善が必要です。更新審査に向けた準備から当日の立ち会いまで、継続的にサポートいたします。',
  },
  {
    question: '他社のコンサルティングサービスとの違いは何ですか？',
    answer: 'クラウドシステムによる効率化、明確な料金体系、内部監査までのワンストップサービスが特徴です。また、80社以上の実績に基づく豊富なノウハウで、最短での取得を実現します。',
  },
]

interface FAQProps {
  id?: string
}

export const FAQ: React.FC<FAQProps> = ({ id }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
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
            よくある質問
          </h2>
          <p className={styles.subtitle}>
            お客様からよくいただく質問にお答えします
          </p>
        </motion.div>
        
        <div className={styles.faqContainer}>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={styles.faqItem}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={styles.faqButton}
                >
                  <span className={styles.faqQuestion}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`${styles.faqIcon} ${
                      openIndex === index ? styles.faqIconOpen : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.faqAnswer}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}