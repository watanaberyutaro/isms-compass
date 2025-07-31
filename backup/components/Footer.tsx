import React from 'react'
import { Mail, Phone, Linkedin } from 'lucide-react'
import styles from './Footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3 className={styles.title}>ISMS Compass</h3>
            <p className={styles.text}>
              ISO 27001認証取得支援サービス
            </p>
            <p className={styles.text}>
              運営: アルディーブイシステムズ × GIUコンサルティングオフィス
            </p>
          </div>
          
          <div>
            <h4 className={styles.subtitle}>お問い合わせ</h4>
            <div className={styles.links}>
              <a href="mailto:info@isms-compass.jp" className={styles.link}>
                <Mail className={styles.icon} />
                <span>info@isms-compass.jp</span>
              </a>
              <a href="tel:03-1234-5678" className={styles.link}>
                <Phone className={styles.icon} />
                <span>03-1234-5678</span>
              </a>
              <a href="#" className={styles.link}>
                <Linkedin className={styles.icon} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className={styles.subtitle}>関連情報</h4>
            <ul className={styles.list}>
              <li>
                <a href="#" className={styles.link}>
                  特定商取引法に基づく表記
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.divider}>
          <p className={styles.copyright}>
            © 2024 ISMS Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}