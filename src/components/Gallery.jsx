import React, {useEffect, useRef} from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from './Card'
import nfts from '../data/nfts.json'

gsap.registerPlugin(ScrollTrigger)

export default function Gallery(){
  const gridRef = useRef()

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from('.card', {opacity:0, y:40, stagger:0.08, ease:'power2.out', scrollTrigger:{trigger:'.gallery-grid', start:'top 80%'}})
    }, gridRef)
    return ()=> ctx.revert()
  },[])

  return (
    <section id="gallery" className="gallery container" ref={gridRef}>
      <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>Featured NFTs</motion.h2>
      <p className="lead">Curated collection — hover to interact, click for details.</p>
      <div className="gallery-grid">
        {nfts.map(n=> <Card key={n.id} item={n} />)}
      </div>
    </section>
  )
}
