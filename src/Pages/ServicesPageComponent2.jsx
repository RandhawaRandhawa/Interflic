import React from 'react';

const ServicesPageComponent2 = () => {
  const cards = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Anderson Mark',
      description: 'Creative Designer',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/8112135/pexels-photo-8112135.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Alex James',
      description: 'Marketing Specialist',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fHww',
      title: 'Elle James',
      description: 'Financial Analyst',
    },
    {
      image: 'https://images.pexels.com/photos/17811086/pexels-photo-17811086/free-photo-of-a-man-in-black-shirt-sitting-on-a-stool.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      id: 4,
      title: 'John Doe',
      description: 'Marketing Manager',
    },
    {
      image: 'https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 5,
      title: 'Mostafa Sannad',
      description: 'Content Writer',
    },
    {
      image: 'https://images.pexels.com/photos/1760900/pexels-photo-1760900.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 6,
      title: 'Alex P',
      description: 'SEO Specialist',
    },
    {
      image: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 7,
      title: 'Nathan Cowley',
      description: 'Website Development',
    },
    {
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 8,
      title: 'Justin Shalfer',
      description: 'Creative Designer',
    },
  ];

  return (
    <div className="py-10 bg-Transparent">
      <div className="container px-4 mx-auto mt-20 text-center">
        <div className='max-w-3xl mx-auto'>
        <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-Black font-title">
            <span className="text-center">
            Our Team of Experts{""}
              <br />
            </span>
            Are Here to Help
          </h1>
        <p className="mb-8 lg:text-lg text-md font-para text-Black">
        We are a diverse group of passionate individuals dedicated to driving innovation and excellence in our field. We believe that our collective strengths not only enhance our projects but also contribute to a positive workplace culture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full mb-6 transition duration-300 border-2 rounded-2xl h-2/3 border-White hover:border-Black"
              />
              <div className="p-6">
                <h3 className="text-2xl font-medium text-Accent2 font-title">{card.title}</h3>
                <p className="text-lg font-medium text-Black font-para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPageComponent2;