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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Pets Gallery 🐶🐱🐰🐟🦜</h1>
      {pets.map(category => (
        <section key={category.type} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{category.icon} {category.type}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.animals.map(animal => (
              <figure key={animal.name} className="border p-2 rounded shadow">
                <img src={`/assets/images/${animal.image}`} alt={animal.name} className="w-full rounded mb-1"/>
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
