import React from "react";
import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import 'font-awesome/css/font-awesome.min.css';

// import './css/style.css';
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
const categories = [
  {
    name: 'Cargo Tracking',
    href: '#',
    imageSrc: 'https://www.marineinsight.com/wp-content/uploads/2021/05/8-Major-Types-of-Cargo-Transported-Through-the-Shipping-Industry.png',
    imageAlt: 'Ship loaded with cargos ready for departure',
    description: 'a platform to get your products shipped from one country to another',
    occation: 'first collabo',
  },
  {
    name: 'Pay-bank',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WkEZn-dsy3iDxDxQCn21yfYx-EfRK0IcHg&usqp=CAU',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'a platform where students and lecturers are able to store, view and collaborate in projects',
  },
];

function Home() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  
                  <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                    <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      
                    </div>
                  </div>
                  <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                    Hello!
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    I'm Caroline, a software engineer in Kenya
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      work with me
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <img
                  className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                  src="./images/IMG-1374.jpg"
                  alt="Image"
                />
              </div>
            </div>
          </div>
          <div className="bg-white">
      <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Project Highlights</h2>
       

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.description}, {category.occation} </p>
            </a>
          ))}
        </div>
      </div>
    </div>
    
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              More about me
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              It all started with watching hacking movies then i liked checking out different website thats when i knew i loved coding. i started sell teaching my self through youtube videos and free coding apps and it has now been one year working on frront end and backend. i especially enjoy working on backend in a project I'm passionate about creating in general. I enjoy travelling, watching movies, watching football and rugby matches and spending time with my kid.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZ-BE6opnYJYyxroF8PGd-fw8zFlkcwidqA&usqp=CAU"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://blog.logrocket.com/wp-content/uploads/2020/07/react-native-geolocation.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://blog.logrocket.com/wp-content/uploads/2021/02/machine-learning-libraries-javascript.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://blog.logrocket.com/wp-content/uploads/2021/07/Exploring-JIT-mode-TailwindCSS.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-mysql.svg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="data:image/png;base64,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"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="contact information">
            <h2>This is my phone number +254-791-052-978 and my email address syokaucaroline01@gmail.com</h2>
        </div>
        <div className="social-icons">

            <a href="https://www.instagram.com/theidealafrikana/">
                <i class="fa fa-instagram fa-5x" aria-hidden="true"></i>
            </a>
            
            <i class="fa fa-facebook-official fa-5x" aria-hidden="true"></i>
            <i class="fa fa-twitter fa-5x" aria-hidden="true"></i>
          
        </div>
    


        </>
        
      )}
    </Disclosure>
  );
}

export default Home;
