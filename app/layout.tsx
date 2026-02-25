import './globals.css'
import type { Metadata } from 'next'
import { LanguageProvider } from '@/components/i18n/LanguageProvider'

export const metadata: Metadata = {
    title: 'Odoo ERP Specialist Portfolio',
    description: 'Portfolio highlighting expertise in Odoo ERP architecture, customization, and integration.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    )
}
