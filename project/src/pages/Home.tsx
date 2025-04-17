import React from 'react';
import { Wind, Leaf, Sun, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Powering the Future with
                <span className="text-green-600"> Renewable Energy</span>
              </h1>
              <p className="mt-6 text-gray-600 text-lg">
                Transform your energy consumption with our innovative renewable solutions. 
                Join us in creating a sustainable future for generations to come.
              </p>
              <div className="mt-8 flex gap-4">
                <Link 
                  to="/signup" 
                  className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition flex items-center gap-2"
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  to="/about"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-green-600 hover:text-green-600 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                alt="Wind turbines at sunset"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <BarChart3 className="text-green-600 h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">98%</p>
                    <p className="text-gray-600">Carbon Reduction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold">Our Solutions</h2>
            <p className="mt-4 text-gray-600">
              Discover how we're making renewable energy accessible and efficient for everyone
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Wind className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Wind Energy</h3>
              <p className="text-gray-600">
                Harness the power of wind with our advanced turbine technology and smart grid solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Sun className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Solar Power</h3>
              <p className="text-gray-600">
                Convert sunlight into clean, renewable electricity with our high-efficiency solar panels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Biomass Energy</h3>
              <p className="text-gray-600">
                Transform organic waste into sustainable energy through our innovative biomass solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;