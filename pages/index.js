// Import Custom Component
import IntroSection from "../components/partials/home/home-slidebanner";
import SpecialCollection from "../components/partials/home/special-collection";

function Home() {
    return (
        <>
            <main className="main">
                <IntroSection />

                <div className="container-fluid mb-1">
                    <SpecialCollection />
                </div>
            </main>
        </>
    )
}

export default Home;