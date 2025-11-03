import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">NFT Gallery Showcase</div>
        <nav className="nav">
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  )
}
