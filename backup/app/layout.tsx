import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '半年で ISO 27001 を取得｜ISMS Compass 認証支援サービス',
  description: 'ISMS Compassなら、初期費用20万円＋月額7万円で内部監査までワンストップ。80社以上の導入実績、平均取得期間7.2ヶ月の実績で、あなたの企業のISO 27001取得を全面サポートします。',
  keywords: 'ISO 27001, ISMS, 情報セキュリティ, 認証取得, 内部監査, 文書管理',
  openGraph: {
    title: '半年で ISO 27001 を取得｜ISMS Compass 認証支援サービス',
    description: 'ISMS Compassなら、初期費用20万円＋月額7万円で内部監査までワンストップ。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  )
}