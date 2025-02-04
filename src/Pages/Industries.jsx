import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: 'Healthcare',
      icon: '🏥',
      description: 'Digital solutions for modern healthcare challenges'
    },
    {
      title: 'E-commerce',
      icon: '🛍️',
      description: 'Cutting-edge platforms for online retail'
    },
    {
      title: 'Education',
      icon: '📚',
      description: 'Technology solutions for learning institutions'
    },
    {
      title: 'Finance',
      icon: '💰',
      description: 'Secure systems for financial services'
    }
  ];

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Industries We Serve</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div key={industry.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-4xl mb-4 block">{industry.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Industries;
