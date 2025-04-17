import React from 'react';

function About() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Windora</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              At Windora, we're passionate about creating a sustainable future through renewable energy solutions. Our mission is to make clean energy accessible to everyone while reducing the world's carbon footprint.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020, we've been at the forefront of renewable energy innovation, developing cutting-edge technologies in wind, solar, and biomass energy production.
            </p>
            <p className="text-lg text-gray-600">
              Our team of experts works tirelessly to design and implement sustainable energy solutions that meet the unique needs of our clients while contributing to a greener planet.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="Renewable energy facility"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;