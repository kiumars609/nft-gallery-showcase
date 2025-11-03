import React, {useRef, useEffect} from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function Card({item}){
  const ref = useRef()

  useEffect(()=>{
    const el = ref.current
    function onMove(e){
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(el, {rotationY: x * 8, rotationX: -y * 8, scale:1.03, transformPerspective:800, transformOrigin:'center', duration:0.3})
    }
    function onLeave(){
      gsap.to(el, {rotationY:0, rotationX:0, scale:1, duration:0.5, ease:'power3.out'})
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return ()=>{
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  },[])

  return (
    <motion.article className="card" ref={ref} whileHover={{scale:1.02}} layout>
      <div className="media">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="overlay">
          <button className="btn">View</button>
        </div>
      </div>
      <div className="meta">
        <h3>{item.title}</h3>
        <p className="sub">{item.artist} • {item.price}</p>
      </div>
    </motion.article>
  )
}
