import React from 'react';
import { Wind, Sun, Leaf, Battery, Cpu, LineChart } from 'lucide-react';

function Services() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of renewable energy solutions to meet your needs. From consultation to implementation, we're here to help you transition to clean energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Wind className="h-8 w-8" />,
              title: "Wind Energy Solutions",
              description: "Custom wind energy solutions for residential and commercial properties."
            },
            {
              icon: <Sun className="h-8 w-8" />,
              title: "Solar Installation",
              description: "Professional solar panel installation and maintenance services."
            },
            {
              icon: <Leaf className="h-8 w-8" />,
              title: "Biomass Energy",
              description: "Convert organic waste into sustainable energy sources."
            },
            {
              icon: <Battery className="h-8 w-8" />,
              title: "Energy Storage",
              description: "Advanced battery solutions for reliable energy storage."
            },
            {
              icon: <Cpu className="h-8 w-8" />,
              title: "Smart Grid Integration",
              description: "Seamless integration with smart grid technology."
            },
            {
              icon: <LineChart className="h-8 w-8" />,
              title: "Energy Monitoring",
              description: "Real-time monitoring and optimization of energy consumption."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <div className="text-green-600">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;