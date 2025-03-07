import React from "react";

const PortfolioPageComponent1 = () => {
  const projects = [
    { id: 1, title: "Encantio Landing Page", image: "https://stastic.ui4free.com/public/images/558840c9-dfe6-4423-bb9c-46799f59cc5d-cover.jpg" },
    { id: 3, title: "Room Decors", image: "https://stastic.ui4free.com/public/images/decor-free-furniture-store-ecommerce-figma-website-design-template_1676781945_thumb.jpg" },
    { id: 2, title: "Perfume Landing Page", image: "https://stastic.ui4free.com/public/images/world-class-fragrance---landing-page-figma-template_1675914944.jpg" },
    { id: 4, title: "ZoldPay Responsive Website", image: "https://stastic.ui4free.com/public/images/crypto-card-landing-page-web-design-figma-template_1675915185.jpg" },
    { id: 5, title: "PooTracker App", image: "https://stastic.ui4free.com/public/images/free-figma-template-app-pootracker-1_1629284055_thumb.jpg" },
    { id: 6, title: "PizFod App", image: "https://stastic.ui4free.com/public/images/food-delivery-app-figma_1628667421.jpg" },
  ];

  return (
    <section className="px-4 py-20 bg-Black">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium text-White lg:text-5xl font-title">
            My Work
          </h1>
          <p className="mb-8 text-Text text-md lg:text-lg font-para">
            My portfolio showcases years of industry experience, collaboration, 
            and expertise through quality results and successful projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group">
              <img
                alt={project.title}
                src={project.image}
                className="object-cover w-full h-64 mb-6 transition-transform duration-300 rounded-xl group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="mb-6 text-lg font-medium text-Text">
                  {project.title}
                </h3>
                <button className="relative group">
            <div className="relative px-6 py-1 transition duration-300 rounded-xl bg-Accent2 border-x-2 hover:bg-Transparent hover:border-Text">
              <div className="flex items-center justify-center p-2">
                <p className="font-medium text-md text-White font-title">
                Explore more
                </p>
              </div>
            </div>
          </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPageComponent1;