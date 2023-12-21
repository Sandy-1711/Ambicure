'use client'
import Link from 'next/link'
import Navcss from './Nav.module.css'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react';
import Burger from './Burger';
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
        <div className={Navcss.upperwrapper}>
            <div className={Navcss.navupper}>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill='currentColor'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>                    <p>Get In Touch</p>
                    <span> +91 86051 83887</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill='currentColor'><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>                    <p>Email us:</p>
                    <span className={Navcss.yellow}>contact@ambicorspace.com</span>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill='currentColor'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                    <p>Working Hours:</p>
                    <span className={Navcss.yellow}>08:00-17:00</span>
                </div>
            </div>
            <div className={Navcss.svgsContainer}>
                <div className={Navcss.svgContainer}>
                    <svg fill='currentColor' height="16" width="10" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                </div>
                <div className={Navcss.svgContainer}>
                    <svg fill='currentColor' height="16" width="16" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                </div>
                <div className={Navcss.svgContainer}>
                    <svg fill='currentColor' height="16" width="14" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                </div>

            </div>
        </div>
        <hr></hr>
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
            <Burger />
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