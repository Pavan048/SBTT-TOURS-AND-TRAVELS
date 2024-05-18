import React from 'react';
import "../../assets/css/style.css";
import Gallery1 from "../../assets/images/gallery-1.jpg";
import Gallery2 from "../../assets/images/gallery-2.jpg";
import Gallery3 from "../../assets/images/gallery-3.jpg";
import Gallery4 from "../../assets/images/gallery-4.jpg";
import Gallery5 from "../../assets/images/gallery-5.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: Gallery1, alt: "Traveler enjoying a sunset" },
    { src: Gallery2, alt: "Beautiful mountain landscape" },
    { src: Gallery3, alt: "City skyline at night" },
    { src: Gallery4, alt: "Forest trail in autumn" },
    { src: Gallery5, alt: "Ocean view with a boat" },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">Photo Gallery</p>
        <h2 className="h2 section-title">Photos From Travellers</h2>
        <p className="section-text">
          "Explore the world through the lens of fellow travelers. Witness their journeys captured in captivating photographs, igniting your wanderlust and inspiring your next expedition."
        </p>
        <ul className="gallery-list">
          {galleryImages.map((image, index) => (
            <li className="gallery-item" key={index}>
              <figure className="gallery-image">
                <img src={image.src} alt={image.alt} />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
