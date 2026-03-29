import heroImg from '../assets/Sunrise-hero-bg.png'

function Home() {
    return (
        <div className="home-component">
            <div className="home-hero-bg">
                <img src={heroImg} className="Hero-Bg" alt="Hero Background" />
            </div>
        </div>
    )
}

export default Home