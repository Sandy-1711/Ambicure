// import Nav from './Nav'
import Link from 'next/link'
import Navcss from './Nav.module.css'
export default function () {
    return <div className={Navcss.outer}>
        <div className={Navcss.wrapper}>
            <div className={Navcss.logo}>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/Ambi-PNG.png' alt='Logo' />
            </div>
            <div className={Navcss.links}>
                <ul>
                    <Link href={'/'}><li>HOME</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link href={'/aboutus'}><li>ABOUT US</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link href={'/gallery'}><li>GALLERY</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link href={'/services'}><li>SERVICES</li></Link>
                    <div className={Navcss.dot}></div>
                    <Link href={'/contact'}><li>CONTACT</li></Link>
                </ul>
            </div>
        </div>
    </div>
}