'use client'

import React from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/sections/Hero'
import { Problems } from '@/components/sections/Problems'
import { Features } from '@/components/sections/Features'
import { Stats } from '@/components/sections/Stats'
import { Process } from '@/components/sections/Process'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      const offset = 80 // ヘッダーの高さ分のオフセット
      const elementPosition = contactSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <>
      <Header onCTAClick={scrollToContact} />
      <main style={{ paddingTop: '80px' }}>
        <Hero onCTAClick={scrollToContact} />
        <Problems />
        <Features id="features" />
        <Stats />
        <Process id="process" />
        <Pricing id="pricing" onCTAClick={scrollToContact} />
        <Testimonials id="testimonials" />
        <FAQ id="faq" />
        <CTA />
        <Footer />
      </main>
    </>
  )
}