'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../Card'
import { Button } from '../Button'
import { Send } from 'lucide-react'
import styles from './CTA.module.css'

interface FormData {
  companyName: string
  name: string
  email: string
  phone: string
  message: string
}

export const CTA: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 実際の送信処理の代わりに、デモ用に2秒待機
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // フォームデータをコンソールに出力（開発用）
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }
  
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            最短3分で完了 – 今すぐ無料相談
          </h2>
          <p className={styles.subtitle}>
            ISO 27001取得への第一歩を踏み出しましょう
          </p>
        </motion.div>
        
        <div className={styles.formContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card padding="large">
              {isSubmitted ? (
                <div className={styles.successContainer}>
                  <div className={styles.successIcon}>
                    <Send className={styles.successIconInner} />
                  </div>
                  <h3 className={styles.successTitle}>
                    お問い合わせありがとうございます
                  </h3>
                  <p className={styles.successMessage}>
                    担当者より1営業日以内にご連絡させていただきます。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="companyName" className={styles.label}>
                      会社名 <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="株式会社〇〇"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      お名前 <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="山田 太郎"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      メールアドレス <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="example@company.com"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      電話番号（任意）
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="03-1234-5678"
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      ご相談内容 <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                      placeholder="ISO 27001取得について相談したい内容をご記入ください"
                    />
                  </div>
                  
                  <div className={styles.submitContainer}>
                    <Button
                      type="submit"
                      size="large"
                      disabled={isSubmitting}
                      className={styles.submitButton}
                    >
                      {isSubmitting ? '送信中...' : '無料相談を申し込む'}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}