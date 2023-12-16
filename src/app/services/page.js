import { Copyright, Footer, HeroCustom, Nav } from "../components";
import { Services } from "./(components)";

export default function ServicesPage() {
    return <div>
        <Nav />
        <HeroCustom imgSrc={'https://ambicorspace.com/wp-content/uploads/2016/06/subheader-2.jpg'} h2={'SERVICES LIST'} p={' / SERVICES LIST'} />
        <Services />
        <Footer />
        <Copyright />
    </div>
}