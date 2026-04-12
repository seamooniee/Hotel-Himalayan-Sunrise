import React from 'react';
import attractionKali from '../assets/attraction_kali.png';
import attractionNamobuddha from '../assets/attraction_namobuddha.png';
import attractionPanauti from '../assets/attraction_panauti.png';
import attractionSunrise from '../assets/attraction_sunrise.png';
import './Attractions.css';

const Attractions: React.FC = () => {
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
      title: 'Ancient Town of Panauti',
      image: attractionPanauti,
      description: "A beautiful medieval Newari town preserved in time. Filled with stone-paved streets, intricate wood carvings, and the ancient Indreshwar Mahadev Temple, it offers a glimpse into Nepal's rich cultural heritage and history.",
      meta: "Distance: 25 min drive · Best for: Heritage walks, Photography, History"
    },
    {
      id: 4,
      title: 'Himalayan Sunrise View',
      image: attractionSunrise,
      description: "Dhulikhel is renowned for stunning sunrise views. Witness the sun painting the peaks of Langtang, Ganesh Himal, and even Everest in magical hues, with a sea of clouds often filling the valley below.",
      meta: "Distance: From hotel terrace · Best for: Breathtaking views, Morning meditation"
    }
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
        
        <div className="attractions-grid">
          {attractions.map((item) => (
            <div key={item.id} className="attraction-card">
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
                  <div className="back-content">
                    <h3 className="back-title">{item.title}</h3>
                    <p className="description-text">{item.description}</p>
                    <div className="meta-info">
                      <p>{item.meta}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
