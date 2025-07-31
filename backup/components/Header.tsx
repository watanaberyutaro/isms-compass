'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield } from 'lucide-react'
import { Button } from './Button'
import styles from './Header.module.css'

interface HeaderProps {
  onCTAClick: () => void
}

const navItems = [
  { label: 'サービス概要', href: '#features' },
  { label: '導入の流れ', href: '#process' },
  { label: '料金プラン', href: '#pricing' },
  { label: 'お客様の声', href: '#testimonials' },
  { label: 'よくある質問', href: '#faq' },
]

export const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // ヘッダーの高さ分のオフセット
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={`${styles.container} ${isScrolled ? styles.containerScrolled : ''}`}>
          <a href="#" className={styles.logo}>
            <Shield className={styles.logoIcon} />
            <span>ISMS Compass</span>
          </a>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className={styles.navCta}>
                <Button size="small" onClick={onCTAClick}>
                  無料相談
                </Button>
              </li>
            </ul>
          </nav>

          <button
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="メニューを開く"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container">
              <ul className={styles.mobileNavList}>
                {navItems.map((item) => (
                  <li key={item.href} className={styles.mobileNavItem}>
                    <a
                      href={item.href}
                      className={styles.mobileNavLink}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className={styles.mobileNavCta}>
                <Button size="medium" onClick={onCTAClick}>
                  無料相談を申し込む
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}