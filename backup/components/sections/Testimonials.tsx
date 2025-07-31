'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../Card'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: '山田 太郎',
    company: '株式会社テックイノベーション',
    role: '代表取締役',
    content: 'ISMS Compassのおかげで、わずか6ヶ月でISO 27001を取得できました。特にクラウドでの文書管理システムが便利で、監査の準備も非常にスムーズでした。費用も明確で安心して進められました。',
    image: '/images/testimonial-1.jpg',
  },
  {
    name: '佐藤 花子',
    company: '株式会社セキュアシステムズ',
    role: '情報システム部長',
    content: '他社では1年以上かかると言われていたISO 27001取得が、8ヶ月で完了しました。専門家によるサポートが手厚く、内部監査も含めてワンストップで対応してもらえたのが大きかったです。',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: '鈴木 一郎',
    company: '株式会社デジタルソリューション',
    role: 'セキュリティ責任者',
    content: '文書作成の負担が大幅に軽減されました。テンプレートが充実していて、自社に合わせてカスタマイズするだけで済みました。月額制なので予算も立てやすく、経営陣の承認も得やすかったです。',
    image: '/images/testimonial-3.jpg',
  },
]

interface TestimonialsProps {
  id?: string
}

export const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
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
            お客様の声
          </h2>
          <p className={styles.subtitle}>
            実際にISO 27001を取得された企業様の声
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card padding="large" className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <div className={styles.avatar} />
                  <h3 className={styles.name}>
                    {testimonial.name}
                  </h3>
                  <p className={styles.company}>
                    {testimonial.company}
                  </p>
                  <p className={styles.role}>
                    {testimonial.role}
                  </p>
                </div>
                <p className={styles.content}>
                  "{testimonial.content}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}