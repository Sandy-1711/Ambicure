'use client'
import Link from 'next/link'
import Navcss from './Nav.module.css'
import { usePathname } from 'next/navigation'
export default function Nav() {
    var path = usePathname();
    return <div style={{ background: path !== '/' ? 'rgba(0,0,0,0.4) ' : '#18191B' }} className={Navcss.outer}>
        <div className={Navcss.wrapper}>
            <div className={Navcss.logo}>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/Ambi-PNG.png' alt='Logo' />
            </div>
            <div className={Navcss.links}>
                <ul>
                    <Link style={{ color: path === '/' && 'var(--yellow)' }} href={'/'}><li>HOME</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link style={{ color: path === '/about' && 'var(--yellow)' }} href={'/about'}><li>ABOUT US</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link style={{ color: path === '/gallery' && 'var(--yellow)' }} href={'/gallery'}><li>GALLERY</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link style={{ color: path === '/services' && 'var(--yellow)' }} href={'/services'}><li>SERVICES</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link style={{ color: path === '/contact' && 'var(--yellow)' }} href={'/contact'}><li>CONTACT</li></Link>
                </ul>
            </div>
        </div>
    </div>
}