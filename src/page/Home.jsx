import { Link } from "react-router-dom";

export default function Home() {
  return (

    <div>
      <div className="relative overflow-hidden bg-gray-200">
        <div className="pb-16 pt-8 sm:pb-40 sm:pt-12 lg:pb-48 lg:pt-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-2xl sm:text-6xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                EVELYBENSON CHATELAIN
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500">
                Welcome to the online home of Evelybenson Chatelain, a versatile and skilled professional in graphic design, civil engineering, and software development. With a dedication to excellence and a commitment to innovation, I offer a range of services that combine creativity, technical expertise, and strategic thinking to help you achieve your goals.
              </p>
            </div>
            <div className="mt-8 sm:mt-12 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div >
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="/images/c1.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center sm:h-full"
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />
                        </div>
                        <br />
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/images/c2.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/images/d1.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/images/profil.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/images/d2.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/images/s1.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="/images/s2.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <Link to="/about" className="inline-block rounded-md border border-transparent bg-indigo-600 px-4 sm:px-6 py-2 sm:py-3 text-center font-medium text-white hover:bg-indigo-700">
                <a 
                  href="/about"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-4 sm:px-6 py-2 sm:py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Learn more
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      





      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 md:text-3xl">
            ABOUT ME
          </h2>
          <span className="flex items-center">
            <span className="h-0.5 flex-1 bg-indigo-500"></span>
          </span>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 py-20 md:px-10">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
              <img className="object-cover object-center rounded" alt="hero" src="/images/photo.jpg" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
                A Multi-Talented Professional
                <br className="hidden lg:inline-block" /> 
              </h1>
              <p className="mb-8 leading-relaxed  mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500">
                As a software engineer, civil engineer, and graphic designer, I offer a unique blend of skills and experience that enables me to tackle complex challenges and deliver innovative solutions. With expertise in software development, UI/UX design, and software architecture, I provide comprehensive solutions that are tailored to your specific needs. Whether you need a robust software application, a stunning website, or an efficient infrastructure, I have the skills and experience to deliver results. In summary, Evelybenson is a driving force in the tech world, leaving an indelible mark through his coding prowess and design finesse. 🚀🎨💻
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/evelybensonchatelain/"
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>








        <div className=" bg-gray-100">
          <br />
          <br />
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold sm:text-6xl text-gray-900 md:text-3xl">
              What Services I'm Providing
            </h2>
            <span className="flex items-center">
              <span className="h-0.5 flex-1 bg-indigo-500"></span>
              <span className="shrink-0 px-6">Of Benson Data</span>
              <span className="h-0.5 flex-1 bg-indigo-500"></span>
            </span>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-70 lg:h-80 w-full object-cover object-center" src="/images/software.png" alt="blog" />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Web Application Development</h1>
                      <p class="leading-relaxed mb-3">
                        Enhance your business operations with a custom web application that meets your unique needs.</p>
                      <div class="flex items-center flex-wrap ">
                        <a href="https://medium.com/@chatelainevelybenson/web-application-development-918495062b74" className=" text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>123
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-70 lg:h-80 w-full object-cover object-center" src="/images/brand.png" alt="blog" />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Brand Identity Design</h1>
                      <p class="leading-relaxed mb-3">
                        Make your brand memorable with a custom brand identity design that captures your business's personality and values.
                      </p>
                      <div class="flex items-center flex-wrap">
                        <a href="https://medium.com/@chatelainevelybenson/brand-identity-design-d422e0df80af" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>59
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-70 lg:h-80 w-full object-cover object-center" src="/images/const.png" alt="blog" />
                    <div class="p-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Structural Design</h1>
                      <p class="leading-relaxed mb-3">
                        Ensure the stability, safety, and durability of your construction project with my expert structural design services.</p>
                      <div class="flex items-center flex-wrap ">
                        <a href="https://medium.com/@chatelainevelybenson/structural-design-b0e82a38920d" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>40
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>7
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>





        <section class="text-gray-600 body-font bg-gray-100">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 md:text-3xl">
              Work Experience
            </h2>
            <span className="flex items-center">
              <span className="h-0.5 flex-1 bg-green-500"></span>
              <span className="shrink-0 px-6">Of Benson Data</span>
              <span className="h-0.5 flex-1 bg-green-500"></span>
            </span>
          </div>
          <div class="container px-3 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-white bg-opacity-100 px-6 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Software Development</h1>
                  <p class="leading-relaxed mb-3">
                    With expertise in various programming languages and frameworks, I develop customized software solutions that streamline your workflows, enhance your productivity, and improve your bottom line. From web applications to mobile apps, I offer a range of software development services that are tailored to your unique requirements and designed to deliver tangible results.</p>
                  <div>
                    <h2 className="sr-only">Steps</h2>
                    <div>
                      <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                        <div className="h-3 w-2/3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>

                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">


                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-white bg-opacity-100 px-6 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Civil Engineering</h1>
                  <p class="leading-relaxed mb-3">
                    As a civil engineer, I bring a wealth of technical knowledge and practical experience to every project, ensuring that your designs are structurally sound, safe, and compliant with regulations. From concept to completion, I work closely with you to understand your needs and deliver solutions that meet your specifications and exceed your expectations.</p>
                  <div>
                    <h2 className="sr-only">Steps</h2>
                    <div>
                      <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                        <div className="h-3 w-2/3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">


                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-white bg-opacity-100 px-6 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Graphic Design</h1>
                  <p class="leading-relaxed mb-3">
                    With a keen eye for aesthetics and a mastery of design software, I create stunning visuals that capture the essence of your brand and communicate your message effectively. From logos to brochures, I offer a full range of graphic design services that help you stand out from the competition and make a lasting impression on your audience.</p>
                  <div>
                    <h2 className="sr-only">Steps</h2>
                    <div>
                      <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                        <div className="h-3 w-2/3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}



