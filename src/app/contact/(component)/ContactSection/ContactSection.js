import style from './style.module.css'
export default function ContactSection() {
    return <div className={style.section}>
        <div className={style.wrapper}>
            <p>FIND US ON GOOGLE</p>
            <div className={style.mapArea}>
                <div className={style.navigator}>
                    <div className={style.nav + ' ' + style.active}>View All</div>
                    <div className={style.nav}>Pune</div>
                    <div className={style.nav}>Ranchi</div>
                </div>
                <div className={style.maps}>
                    Maps
                </div>
            </div>
            <div className={style.container}>
                <div className={style.formArea}>
                    <p>SEND US A MESSAGE</p>
                    <form>
                        <div>
                            <input type='text' placeholder='Your Name' />
                            <input type='email' placeholder='Your Email' />
                            <input type='number' placeholder='Your Phone' />
                        </div>
                        <textarea placeholder='Your message'></textarea>
                    </form>
                    <button>SUBMIT FORM</button>
                </div>
                <div className={style.contactArea}>
                    <p>CONTACT INFO</p>
                    <p><span>Pune</span>-301, Business Square, opposite DSK Ranwara, Bawdhan, Pune :-411021</p>
                    <p><span>Ranchi</span>-4007, 4th Floor, Skyline Tower, Kadru, Ranchi- 834002</p>
                    <p><span>Phone:</span>+91 88307 69062, +91 86051 83887</p>
                    <p><span>Email:</span>contact@ambicorspace.com</p>
                    <p><span>Email:</span>ambicorspace@gmail.com</p>
                    <p><span>Web:</span>https://ambicorspace.com</p>
                    <p><span>Open</span>Monday - Saturday 10:00 - 18:00</p>
                </div>
            </div>

        </div>
    </div>
}