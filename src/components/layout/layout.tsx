import * as React from 'react';
import Header from '../header';
import Footer from '../footer';
import * as styles from "./layout.module.css"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
        <main className={`main ${styles.main}`}>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout
