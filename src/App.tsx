import './App.css'
import bgImg from './assets/bg.png'
import hotelImg from './assets/hotel.png'

function App() {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${bgImg})` }}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-container">
          <svg className="logo-svg" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Simple Mountain & Sun Logo representation */}
            <path d="M50 35 L30 50 L70 50 Z" stroke="#aab5ca" strokeWidth="2" fill="none"/>
            <path d="M40 40 L20 50 L60 50 Z" stroke="#aab5ca" strokeWidth="1.5" fill="none"/>
            <path d="M60 40 L80 50 L40 50 Z" stroke="#aab5ca" strokeWidth="1.5" fill="none"/>
            <circle cx="50" cy="20" r="8" fill="#ff9d3b" />
            <path d="M30 45 L50 20 L70 45" stroke="#aab5ca" strokeWidth="2" fill="none"/>
            <path d="M10 45 L35 15 L60 45" stroke="#aab5ca" strokeWidth="1" fill="none"/>
            <path d="M40 45 L65 15 L90 45" stroke="#aab5ca" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        
        <ul className="nav-links">
          <li><a href="#about">About us</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#restaurant">Restaurant</a></li>
        </ul>
        
        <button className="btn-contact">Contact us</button>
      </nav>

      {/* Hero Section */}
      <main className="hero-content">
        <div className="hero-left">
          <h1 className="main-title">
            WELCOME TO <br/>
            <span className="hotel-line">HOTEL</span> HIMALAYAN SUNRISE
          </h1>
          <h2 className="subtitle">Affordable Rooms & Mountain Views</h2>
          
          <p className="description">
            Enjoy a breathtaking sunrise from your bed at our family-run hotel. We offer cheap and comfortable rooms with free WiFi, good food, and a peaceful escape near Namo Buddha and Dhulikhel. Perfect for couples, solo travelers, and groups. Book your weekend getaway today!
          </p>
          
          <div className="cta-buttons">
            <button className="btn-explore">Explore Now</button>
            <button className="btn-availability">Check Availability</button>
          </div>
          
          <div className="find-us-glass">
            <div className="find-us-text">
              <strong>Find Us:</strong> <a href="#">www.booking.com</a>
            </div>
            <div className="find-us-divider"></div>
            <div className="rating">
              <span className="rating-score">8.1</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={hotelImg} alt="Hotel Himalayan Sunrise Building" className="hotel-image" />
          </div>
        </div>
      </main>

      {/* Booking Bar */}
      <div className="booking-bar-wrapper">
        <div className="booking-bar">
          <div className="booking-title">Book now</div>
          
          <div className="booking-divider"></div>
          
          <div className="booking-field">
            <div className="field-info">
              <span className="field-label">Check in</span>
              <span className="field-value">02/ 19/ 2005</span>
            </div>
            <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          
          <div className="booking-divider"></div>
          
          <div className="booking-field">
            <div className="field-info">
              <span className="field-label">Check out</span>
              <span className="field-value">02/ 19/ 2005</span>
            </div>
            <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          
          <div className="booking-divider"></div>
          
          <div className="booking-field">
            <div className="field-info">
              <span className="field-label">Guests</span>
              <span className="field-value">1 adult, 0 children</span>
            </div>
            <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          
          <button className="btn-find-room">
            Find the suitable room
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
