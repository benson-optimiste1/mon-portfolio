import React from 'react';


const callouts = [
  {
    name: 'Mockup mobile app',
    description: 'Immigration connect App',
    imageSrc:"/images/2.png",
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    
  },
  {
    name: 'Mockup mobile app 2',
    description: 'Imcona mobile',
    imageSrc: '/images/1.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    
  },
  {
    name: 'LVL UP Imagining',
    description: 'School Photography Reimagined',
    imageSrc: '/images/3.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'https://apps.apple.com/us/app/lvl-up-imaging/id6476116642?platform=iphone',
  },
  
  {
    name: 'LVL UP Imagining 2',
    description: 'best school photography app',
    imageSrc: '/images/6.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'https://apps.apple.com/us/app/lvl-up-imaging/id6476116642?platform=iphone',
  },
  {
    name: 'IMCONA WEB APP',
    description: 'Immigration connect web app',
    imageSrc: '/images/5.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'https://fir-auth-ceb.web.app/',
    
  },
 { 
    name: 'Flyer Design',
    description: 'Nailtech Flyer Design',
    imageSrc: '/images/4.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    
  },
  { 
    name: 'AutoCAD Design',
    description: 'Plan Design for house',
    imageSrc: '/images/7.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    
  },
  { 
    name: 'Logo Design',
    description: 'School Logo Design',
    imageSrc: '/images/8.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
    
  },
]

const Projects = () => {
  return (
    
     <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-8 space-y-24 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-84 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};




export default Projects;
