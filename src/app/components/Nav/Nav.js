'use client'
import Link from 'next/link'
import Navcss from './Nav.module.css'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react';
export default function Nav() {
    var path = usePathname();
    // useEffect(function () {
    //     const menubutton = document.querySelector(`.${Navcss.burger}`);
    //     menubutton.addEventListener('click', function () {
    //         handleMenu();
    //     })
    //     function handleMenu() {
    //         const open = document.getElementById('open');
    //         const close = document.getElementById('close');
    //         const menu = document.querySelector(`.${Navcss.mlinks}`)
    //         if (open.style.display === 'block') {
    //             open.style.display = 'none';
    //             close.style.display = 'block';
    //             menu.style.paddingBottom = "320px";
    //             console.log("close");
    //         }
    //         else {
    //             open.style.display = 'block';
    //             close.style.display = 'none';
    //             menu.style.paddingBottom = "0";
    //             console.log('open');
    //         }

    //     }
    // }, [])
    return <div style={{ background: path !== '/' ? 'rgba(0,0,0,0.4) ' : '#18191B' }} className={Navcss.outer}>
        <div className={Navcss.links + ' ' + Navcss.mlinks}>
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
        <div className={Navcss.wrapper}>
            <div className={Navcss.logo}>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/Ambi-PNG.png' alt='Logo' />
            </div>
            <button onClick={function (e) {
                e.preventDefault();
                const open = document.getElementById('open');
                const close = document.getElementById('close');
                // console.log(open);
                // console.log(close);
                const menu = document.querySelector(`.${Navcss.mlinks}`)
                if (open.style.display === 'block') {
                    open.style.display = 'none';
                    close.style.display = 'block';
                    menu.style.paddingBottom = "320px";
                    console.log("close");
                }
                else {
                    open.style.display = 'block';
                    close.style.display = 'none';
                    menu.style.paddingBottom = "0";
                    // console.log('open');
                }
            }} className={Navcss.burger}>
                <svg id='open' className={Navcss.open} fill='currentColor' height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                <svg id='close' className={Navcss.close} height="16" width="12" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
            </button>
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