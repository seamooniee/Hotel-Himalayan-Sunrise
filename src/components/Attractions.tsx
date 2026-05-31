import React, { useRef, useState, useEffect } from 'react';
import attractionKali from '../assets/attraction_kali.png';
import attractionNamobuddha from '../assets/attraction_namobuddha.png';
import attractionDhulikhel from '../assets/attraction_dhulikhel.png';
import attractionSunrise from '../assets/attraction_sunrise.png';
import attractionPanauti from '../assets/attraction_panauti.png';
import attractionNagarkot from '../assets/attraction_nagarkot.png';
import attractionBhaktapur from '../assets/attraction_bhaktapur.png';
import attractionPatan from '../assets/attraction_patan.png';

import './Attractions.css';

const Attractions: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const getScrollAmount = () => {
    if (!gridRef.current) return 320;
    return Math.min(320, Math.round(gridRef.current.clientWidth * 0.85));
  };

  const scrollNext = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }
  };

  const attractions = [
    {
      id: 1,
      title: 'Kali Temple & The 1000 Steps (Hajaar Sidi)',
      image: attractionKali,
      description: "A short hike from the hotel leads you to the Kali Temple, perched on a hilltop. The climb involves around 1,000 steps, but the reward is a 360-degree panoramic view of the Himalayas and the lush green valley. It's the best spot in town for sunrise photography, and you'll find the famous \"Selfie Stone\" up there for that perfect shot .",
      meta: "Distance: Short walk / 20-30 min hike · Best for: Sunrise, Photography, Exercise"
    },
    {
      id: 2,
      title: 'Namobuddha Monastery',
      image: attractionNamobuddha,
      description: "One of the most sacred Buddhist sites in Nepal. The monastery is a masterpiece of Tibetan architecture, offering deep spiritual peace and stunning mountain vistas. It is the legendary site where Lord Buddha offered his body to a starving tigress.",
      meta: "Distance: 40 min drive / 3 hr hike · Best for: Spiritual retreat, Tibetan culture"
    },
    {
      id: 3,
      title: 'Dhulikhel Old Town & Newari Heritage',
      image: attractionDhulikhel,
      description: "Step back in time as you wander through the narrow, cobblestone streets of Dhulikhel's Old Town. You'll see beautiful traditional Newari architecture with intricately carved wooden windows and ancient temples like the Bhagwati Temple. It's a living museum where you can experience the local culture and daily life .",
      meta: "Distance from hotel: 10-15 minute walk · Best for: Cultural walks, photography, history buffs"
    },
    {
      id: 4,
      title: 'Kailashnath Mahadev Statue (Sanga)',
      image: attractionSunrise,
      description: "Just a 20-minute drive from the hotel, you can visit the world's tallest Shiva statue. Standing at an impressive 43.5 meters (143 feet) tall, this copper-painted statue overlooking the village of Sanga is a sight to behold. It's a popular spot for both pilgrims and tourists and makes for a memorable photo opportunity .",
      meta: "Distance from hotel: 20-minute drive · Best for: Spiritual tourism, sightseeing, selfies"
    },
    {
      id: 5,
      title: 'Panauti Village',
      image: attractionPanauti,
      description: "A short drive or scenic hike away, Panauti is a beautifully preserved Newari town located at the confluence of two rivers. It's one of the best places near Dhulikhel to experience authentic Nepali village life, with its ancient temples, traditional houses, and laid-back riverside setting .",
      meta: "Distance from hotel: 15-minute drive / 2-3 hour hike · Best for: Village tourism, culture, peaceful walks"
    },
     {
      id: 6,
      title: 'Nagarkot View Tower',
      image: attractionNagarkot,
      description: "Famous as the 'viewpoint of the Himalayas,' Nagarkot offers a stunning panoramic view of the mountain range, including Mount Everest on very clear days. It's a short drive from Dhulikhel and a great place to watch either the sunrise or sunset.",
      meta: "Distance from hotel: 30-40 minute drive · Best for: Mountain panoramas, sunrise/sunset views"
    },
     {
      id: 7,
      title: 'Bhaktapur Durbar Square',
      image: attractionBhaktapur,
      description: "If you are interested in history and architecture, a trip to Bhaktapur is a must. This UNESCO World Heritage site is just a 30-minute drive away. Known as the 'City of Devotees', it is famous for its stunning palaces, temples, and the impressive 55-Window Palace .",
      meta: "Distance from hotel: 30-minute drive · Best for: Heritage tours, architecture, UNESCO site"
    },
    {
      id: 8,
      title: 'Patan Durbar Square',
      image: attractionPatan,
      description: "The Patan Durbar Square is a beautiful square located in the heart of Patan. It is a popular spot for both locals and tourists alike. The square is known for its stunning architecture. It is a must-visit place for anyone interested in history and architecture.",
      meta: "Distance from hotel: 80-minute drive · Best for: Temple visits, photography"
    },
  ];
  
  return (
    <section id="attractions" className="content-section attractions-section">
      <div className="section-container">
        <div className="section-header">
          <h4 className="section-label">NEARBY ATTRACTIONS</h4>
          <h2 className="section-title attractions-title">Explore Dhulikhel: Nature, Culture, And Adventure</h2>
          <div className="title-underline left-underline"></div>
          <p className="attractions-description">
            One of the best things about staying with us is our location. We are perfectly situated for you to explore the best of what the Dhulikhel valley has to offer.
          </p>
        </div>
        
        <div className="attractions-grid-container" style={{ position: 'relative' }}>
          {canScrollLeft && (
            <div className="scroll-indicator-overlay left-overlay">
              <div className="arrow-circle arrow-left" onClick={scrollPrev}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5"></path>
                  <path d="M12 19l-7-7 7-7"></path>
                </svg>
              </div>
            </div>
          )}

          <div className="attractions-grid" ref={gridRef} onScroll={checkScroll}>
            {attractions.map((item) => (
              <div key={item.id} className="attraction-card" tabIndex={0}>
                <div className="attraction-inner">
                  {/* Front Side */}
                  <div className="attraction-front">
                    <img src={item.image} alt={item.title} className="attraction-img" />
                    <div className="attraction-overlay">
                      <h3 className="attraction-name">{item.title}</h3>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="attraction-back">
                    <h3 className="back-title">{item.title}</h3>
                    <div className="description-scroll-area">
                      <p className="description-text">{item.description}</p>
                    </div>
                    <div className="meta-info">
                      <p>{item.meta}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <div className="scroll-indicator-overlay right-overlay">
              <div className="arrow-circle arrow-right" onClick={scrollNext}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
