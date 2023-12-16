import Link from 'next/link'
import style from './style.module.css'
export default function CustomService({ data, ...props }) {
    // console.log(data);
    return <div className={style.section}>
        <div className={style.wrapper}>

            <div className={style.links}>
                <ul>
                    <Link href={'/services/hospitalitydesign'}><li>HOSPITALITY DESIGN</li></Link>
                    <Link href={'/services/officedesign'}><li>OFFICE DESIGN</li></Link>
                    <Link href={'/services/commercialdesign'}><li>COMMERCIAL DESIGN</li></Link>
                </ul>
            </div>
            <div className={style.desc}>
                <p>{data.desc}</p>
            </div>
            <div className={style.images}>
                {data.images.map(function (image,index) {
                    // console.log(image);
                    return <img src={image.src} key={index}/>
                })}
            </div>
        </div>
    </div>
}