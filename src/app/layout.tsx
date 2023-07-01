import './globals/globals.css'
import { Libre_Franklin } from 'next/font/google'

const libre_franklin = Libre_Franklin({ subsets: ['latin'] })

export const metadata = {
  title: 'Ramilson Silva | Portofolio',
  description: 'Veja mais sobre os projetos, a experiência, história do Desenvolvedor Web Ramilson Felix da Silva.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={libre_franklin.className}>{children}</body>
    </html>
  )
}
