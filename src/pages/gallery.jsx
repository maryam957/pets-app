import React, { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Load local JSON data
    axios.get("/src/data/pets.json")
      .then(res => setPets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="site-container">
      <h1 className="page-title">Pets Gallery 🐶🐱🐰🐟🦜</h1>
      {pets.map(category => (
        <section key={category.type} className="mb-6">
          <h2 className="section-title">{category.icon} {category.type}</h2>
          <div className="gallery-grid">
            {category.animals.map(animal => (
              <figure key={animal.name}>
                <img src={`/assets/images/${animal.image}`} alt={animal.name} className=""/>
                <figcaption>
                  <strong>Name:</strong> {animal.name} <br />
                  <strong>Age:</strong> {animal.age} <br />
                  <strong>Gender:</strong> {animal.gender}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Gallery;
