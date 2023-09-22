import Header from './Header'
import './globals.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from './Footer';
import { Metadata } from 'next';
import { AuthUserProvider } from '@/context/AuthUserContext';


config.autoAddCss = false; 

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata =  {
  title: 'Booki | Hébergements en France',
  description: 'Trouvez un hébérgements partout en France',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
   
      <body className={`${inter.className} md:px-10`}>
        <AuthUserProvider>
        <Header/>
        {children}
        <Footer/>
        </AuthUserProvider>
        </body>
    </html>
  )
}



