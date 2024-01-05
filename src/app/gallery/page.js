import { Copyright, CustomContactButton, Footer, Gallery, HeroCustom, Nav } from "../components";

export default function Page() {
    return <div>
        <Nav />
        <HeroCustom imgSrc={'https://ambicorspace.com/wp-content/uploads/2015/07/subheader-11.jpg'} h2={'PROJECT CATEGORIES'} p={' / PROJECTS'} />
        <Gallery />
        <CustomContactButton text="GET quotation" />
        <Footer />
        <Copyright />
    </div>
}