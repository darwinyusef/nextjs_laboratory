import type { Metadata } from 'next'
import "./styles/styles.css"

export const metadata: Metadata = {
  title: 'Yusef',
  description: 'cambio de la description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
