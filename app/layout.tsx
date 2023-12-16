import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const font = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UI/UX Template',
  description: 'Next js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-bg`}>{children}</body>
    </html>
  );
}
