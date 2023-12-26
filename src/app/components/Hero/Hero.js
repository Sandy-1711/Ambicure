'use client'
import Link from 'next/link'
import Herocss from './Hero.module.css'
import { useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
export default function Hero() {
    useLayoutEffect(function(){
        gsap.to(`.${Herocss.text} h2`,{
            opacity:1,
            scale:1,
        })
    })
    return (<section className={Herocss.section}>
        <div className={Herocss.wrapper}>
            <div className={Herocss.text}>
                <p id='one'>FEATURED PROJECT</p>
                <h2>GREEN INTERIOR</h2>
                <Link href='https://ambicorspace.com/'><button>OUR PORTFOLIO</button></Link>
            </div>
        </div>
        <div className={Herocss.imageContainer}>
            <img src='http://ambicorspace.com/wp-content/uploads/2015/07/wide2.jpg' alt='Hero Image Background' />
        </div>
    </section>)
}