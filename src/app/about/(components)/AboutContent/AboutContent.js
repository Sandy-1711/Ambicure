import style from './style.module.css'
export default function AboutContent() {
    return <div className={style.section}>
        <div className={style.image}>
            <img src='https://ambicorspace.com/wp-content/uploads/2015/07/bg-side-11.jpg' />
        </div>
        <div className={style.content}>
            <div>

                <h1>Award Winning Interior Design</h1>
                <h2>We engage closely with the construction teams to ensure that our ideas are implemented flawlessly on the ground.</h2>
                <p>A house becomes a home when it is lived in. And to make it worthy of our clients to live in, we bring the best interior designing elements in the industry. We work closely with our clients to understand their perspectives with regard to their homes. Do they want to go for a chic post-modern look or a rustic wooden interior? From providing the most vibrant color options to the staidest palette, we have it all covered for you. From the most exclusive furniture pieces to the ultra-modern utilities, TRB helps you make your interior look like one out of a magazine.</p>
            </div>
        </div>
    </div>
}