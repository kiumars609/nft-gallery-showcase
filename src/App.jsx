import React from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="site">
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
