'use client'
import { usePathname } from 'next/navigation';
import galcss from './Gallery.module.css'
import { useEffect, useState } from 'react'
export default function Gallery() {
    const [slide, setSlide] = useState(1);
    const path = usePathname();
    useEffect(function () {
        const links = document.querySelectorAll(`.${galcss.links} ul li`);
        var active = document.querySelector(`.${galcss.active}`);
        links.forEach(function (link, index) {
            link.addEventListener('click', function () {
                active.classList.remove(galcss.active);
                link.classList.add(galcss.active);
                setSlide(index + 1)
                active = link;
            })
        })
    }, [])
    useEffect(function () {
        const imageContainer = document.querySelectorAll(`.${galcss.imageContainer}`)
        imageContainer.forEach(function (img) {
            const data = img.getAttribute('data')
            if (Number(data) === slide || slide === 1) {
                img.style.width = 'calc(100dvw / var(--x))';
                img.style.transition = "0.5s ease all"
            }
            else {
                img.style.width = '0';
            }
        })
    }, [slide])
    return <section className={galcss.section}>
        <div className={galcss.links}>
            <ul>
                <li className={galcss.active}>ALL PROJECT</li>
                <li>HOSPITALITY</li>
                <li>MODULAR KITCHEN</li>
                <li>RESIDENTIAL</li>
            </ul>
        </div>
        <div className={galcss.imagesContainer}>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data='4' className={galcss.imageContainer}>
                <h2>Study Room</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0029-750x499.jpg' alt='study room' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} className={galcss.imageContainer}>
                <h2>Staircase</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0048-750x499.jpg' alt='Stairs' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data="3" className={galcss.imageContainer}>
                <h2>Modular Kitchen</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0043-750x499.jpg' alt='Modular Kitchen' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data='4' className={galcss.imageContainer}>
                <h2>Lounge Area</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0016-1-750x499.jpg' alt='Lounge Area' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} className={galcss.imageContainer}>
                <h2>Living Area</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0016-750x499.jpg' alt='Living Area' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} className={galcss.imageContainer}>
                <h2>Homeo Gym</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/GYM-1-750x499.jpg' alt='Homeo Gym' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data='4' className={galcss.imageContainer}>
                <h2>Elegant Bathrooms</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0054-750x499.jpg' alt='Elegant Bathrooms' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data='4' className={galcss.imageContainer}>
                <h2>Dining Area</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/Picture6-1-750x499.jpg' alt='Dining Area' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data='4' className={galcss.imageContainer}>
                <h2>Bed Room</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/SANJAY-JHA-PROJECT-converted_page-0013-750x499.jpg' alt='Bed Area' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data='4' className={galcss.imageContainer}>
                <h2>Eco Green Interior</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2015/07/pf-1.jpg' alt='Eco green interior' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data='2' className={galcss.imageContainer}>
                <h2>Modern Elegance Suite</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2015/07/pf-2.jpg' alt='Modern Elegance Suits' />
            </div>
            <div style={{ '--x': path === '/gallery' ? 3 : 4 }} data='2' className={galcss.imageContainer}>
                <h2>Apartment Renovation</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2015/07/pf-3.jpg' alt='Apartment Restroom' />
            </div>
        </div>
    </section>
}