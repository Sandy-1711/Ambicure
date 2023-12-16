import LineDotLine from '../LineDotLine/LineDotLine'
import wwdcss from './whatwedo.module.css'
export default function WhatWeDo() {
    return <section className={wwdcss.section}>
        <div className={wwdcss.wrapper}>
            <h2>WHAT WE DO</h2>
            <LineDotLine />
            <div className={wwdcss.restaurants}>
                <div className={wwdcss.restaurantCard}>
                    <span><h2>HOME</h2> DESIGN</span>
                    <p>A house becomes a home when it is lived in. And to make it worthy of our clients to live in, we bring the best interior designing elements in the industry. We work closely with our clients to understand their perspectives with regard to their homes. From providing the most vibrant color options to the staidest palette, we have it all covered for you. From the most exclusive furniture pieces to the ultra-modern utilities, We help you make your interior look like one out of a magazine.</p>
                    <img  src='https://ambicorspace.com/wp-content/uploads/2015/07/pic_1.jpg'/>
                </div>
                <div className={wwdcss.restaurantCard}>
                    <span><h2>HOTELS</h2> RESTAURANTS</span>
                    <p>It is a very common belief amongst restaurateurs and hoteliers around the world that the quality of food is always overrated. What attracts the customers to these establishments is how warm they feel once inside.
                        <br />
                        The ambicor is the king in restaurants and hotels. The color of the carpet at reception, the layout of the tables, the shade of lightings in the rooms, the palette of color used in the conference rooms, the list could go on.</p>
                    <img src='https://ambicorspace.com/wp-content/uploads/2015/07/pic_2.jpg'/>
                </div>
                <div className={wwdcss.restaurantCard}>
                    <span><h2>MODULAR</h2> KITCHEN DESIGN</span>
                    <p>The best kitchens are the ones in which the utensils and crockery seem to disappear out of sight. Every house yearns for a clutter-free kitchen. But modular kitchens are not a very easy answer.Even the islands would have cabinets under them, and the entire space looks like a locker room. Even modular kitchens can look packed with cabinets and pockets throughout the wall space. We design modular kitchens with subtle storage spaces, beautiful plumbing, and easy lighting.</p>
                    <img src='https://ambicorspace.com/wp-content/uploads/2015/07/pic_3.jpg'/>
                </div>
            </div>
        </div>
    </section>
}