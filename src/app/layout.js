import { Inter } from 'next/font/google'
import Head from 'next/head';
import Script from 'next/script';
import './globals.css'
import './css/bootstrap.min.css'
import './css/style.css'
// import header and footer layouts
import Header from './header';
import Footer from './footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'One Ring Rentals',
  description: 'One Ring Rentals',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>One Ring Rentals - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <Script
          src="/js/common/modernizr.js"
        />
      </Head>
      <body className={inter.className}>
        <div id="wrapper">
          {/** header layout */}
          <Header />
          {/** main page content */}
          {children}
          {/** footer layout */}
          <Footer />
          {/** all script tags using nextjs Script component */}
          <Script
            src="/js/common.js"
          />
          <Script
            src="/js/common/jquery-1.11.1.min.js"
          />
          <Script
            src="/js/common/bootstrap.min.js"
          />
          <Script
            src="/js/common/bootstrap-datepicker.js"
          />
          <Script
            src="/js/common/chosen.min.js"
          />
          <Script
            src="/js/common/bootstrap-checkbox.js"
          />
          <Script
            src="/js/common/nice-scroll.js"
          />
          <Script
            src="/js/common/jquery-browser.js"
          />
          <Script
            src="/js/scripts.js"
          />
        </div>
      </body>
    </html>
  )
}
