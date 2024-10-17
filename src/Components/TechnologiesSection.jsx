import React from 'react';
import omchainLogo from "../assets/img/logo.webp";
import python from "../assets/img/python.png"
import flask from "../assets/img/flask.png"
import redis from "../assets/img/redis.webp"
import celery from "../assets/img/celery.webp"
const TechnologiesSection = () => {
  const logos = [
    { name: 'Python', logo: python },
    { name: 'Flask', logo: flask },
    { name: 'Redis', logo: redis },
    { name: 'Celery', logo: celery },
    { name: 'Omchain', logo: omchainLogo },
  ];

  return (
    <div className="py-16 bg-gray-100 mb-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Technologies We Use</h2>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {logos.map((tech, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img src={tech.logo} alt={`${tech.name} logo`} className="w-32 h-32 lg:ml-10 object-contain mb-4" />
            <h3 className="text-xl lg:ml-10 font-semibold text-gray-700">{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesSection;