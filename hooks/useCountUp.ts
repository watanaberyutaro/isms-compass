'use client'

import { useEffect, useState, useRef } from 'react'

interface UseCountUpProps {
  end: number
  duration?: number
  start?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export const useCountUp = ({
  end,
  duration = 2000,
  start = 0,
  suffix = '',
  prefix = '',
  decimals = 0,
}: UseCountUpProps) => {
  const [count, setCount] = useState(start)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const timer = setInterval(() => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // イージング関数（easeOutCubic）
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const currentCount = start + (end - start) * easeOutCubic(progress)
      
      setCount(currentCount)

      if (now >= endTime) {
        clearInterval(timer)
        setCount(end)
      }
    }, 16) // 60fps

    return () => clearInterval(timer)
  }, [isInView, start, end, duration])

  const formattedCount = `${prefix}${count.toFixed(decimals)}${suffix}`

  return { count: formattedCount, ref }
}