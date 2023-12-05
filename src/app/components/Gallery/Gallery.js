import galcss from './Gallery.module.css'
export default function Gallery() {
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
            <div className={galcss.imageContainer}>
                <h2>Study Room</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0029-750x499.jpg' alt='study room' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Staircase</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0048-750x499.jpg' alt='Stairs' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Modular Kitchen</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0043-750x499.jpg' alt='Modular Kitchen' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Lounge Area</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0016-1-750x499.jpg' alt='Lounge Area' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Living Area</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0016-750x499.jpg' alt='Living Area' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Homeo Gym</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/GYM-1-750x499.jpg' alt='Homeo Gym' />
            </div>
            {/* <div className={galcss.imageContainer}>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0054-750x499.jpg' alt='Homeo Gym' />
            </div> */}
            <div className={galcss.imageContainer}>
                <h2>Elegant Bathrooms</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/VINITA-MAM-UPDATED-NEW-PROJECT-converted_page-0054-750x499.jpg' alt='Elegant Bathrooms' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Dining Area</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/Picture6-1-750x499.jpg' alt='Dining Area' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Bed Room</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2022/05/SANJAY-JHA-PROJECT-converted_page-0013-750x499.jpg' alt='Bed Area' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Eco Green Interior</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2015/07/pf-1.jpg' alt='Eco green interior' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Modern Elegance Suite</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2015/07/pf-2.jpg' alt='Modern Elegance Suits' />
            </div>
            <div className={galcss.imageContainer}>
                <h2>Apartment Renovation</h2>
                <img src='http://ambicorspace.com/wp-content/uploads/2015/07/pf-3.jpg' alt='Apartment Restroom' />
            </div>
        </div>
    </section>
}