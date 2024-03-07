import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-4 px-5 py-24">
                    <div className="lg:flex-grow md:w-1/2 w-full mb-10 md:mb-0">
                        <img
                            className="object-cover object-center rounded h-64 w-full mr-12 md:w-64"
                            alt=""
                            src="/images/profil.jpg"
                        />
                    </div>


                    <div className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:text-left">
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
                            <span class="flex items-center">
                                <span class="h-1 flex-1 bg-yellow-500"></span>
                                <span class="shrink-0 px-6">About Me</span>
                                <span class="h-0.5 flex-1 bg-yellow-500"></span>
                            </span>
                        </h1>
                        <p class="mb-8 mt-4 text-xl leading-relaxed">I am Evelybenson Chatelain, a multifaceted professional with expertise in graphic design, civil engineering, and software development. I’m passionate about creating innovative solutions that bridge the gap between creativity and functionality.
                            My diverse skill-set enables me to deliver unique and integrated design solutions for a multitude of projects.

                        </p>
                        <p className='items-center text-left'>
                            chatelainbusiness@gmail.com

                        </p>


                        <div class="mt-6 flex justify-center items-center gap-2 ">
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75 "
                                href="https://www.facebook.com/chatelain.benson?mibextid=ZbWKwL"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> Facebook </span>

                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="https://www.instagram.com/benson_optimiste?igsh=Ynl3ZHgxMDFicWQy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> Instagram </span>

                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="https://x.com/Ing_Evelybenson?t=nzFPsXM5wr4OmdgnZcyxGA&s=09"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> Twitter </span>

                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                    />
                                </svg>
                            </a>

                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="https://github.com/benson-optimiste1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> GitHub </span>

                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                className="text-gray-700 transition hover:text-gray-700/75"
                                href="https://www.linkedin.com/in/evelybensonchatelain/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">linkedin</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M3 2h18a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm2 2a1 1 0 0 0-1 1v10h2V5a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v10h2V5a1 1 0 0 0-1-1zm11 10h2V8h-2v6zm-4-6h2v10h-2v-5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5h-2V8h2v1a4 4 0 0 1 4-4 4 4 0 0 1 4 4v6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>


                        </div>
                    </div>
                </div>

            </section>







            <div className="relative overflow-hidden bg-white">
                <div className="pb-80 pt-16 sm:pb-40 bg-gray-200 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                        <div className="sm:max-w-lg pr-8">
                            <h1 className="text-3xl font-medium  text-gray-900 sm:text-6xl">
                                My Services
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                My areas of expertise extend to graphic design, civil engineering, and software development. I possess a deep understanding of the latest design trends and engineering concepts, enabling me to provide a holistic approach to creating unique, visually appealing, and functional solutions.
                            </p>
                        </div>
                        <div className=" p-8 m-auto ">
                            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                                <div className="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full">
                                    Branding and Identity Design
                                </div>
                            </div>


                            <div className="w-full h-4 bg-gray-400 rounded-full mt-7">
                                <div className="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full">
                                    Structural Analysis and Design.
                                </div>
                            </div>


                            <div className="w-72  h-4 bg-gray-400 rounded-full mt-7">
                                <div className="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full">
                                    Web Application Development.
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="mt-4 md:mt-8 px-18">
                        <div className="mt-3 md:mt-8 px-28">
                            <a
                                href="https://drive.google.com/file/d/1JTNFowgqtrlcaX5ooNfTp88CdVBEMxGI/view?usp=drivesdk"
                                download="Evelybenson_Chatelain_Resume_2024.pdf"
                                className="inline-block rounded bg-green-600 px-6 md:px-10 py-3 text-sm md:text-base font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Download resume
                            </a>
                        </div>
                    </div>

                </div>






                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center ltr:l:text-left p-16 rtl:l:text-right ">
                            <h2 className="text-3xl font-medium fong-medium   text-gray-900 sm:text-6xl">
                                My Skills
                            </h2>

                        </div>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-5 justify-center items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">

                            <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noreferrer"> <img src="https://docs.amplify.aws/assets/logo-dark.svg" alt="amplify" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' width="40" height="40" /> </a>
                            <a href="https://azure.microsoft.com/en-in/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' />  </a>
                            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://cloud.google.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                            <a href="https://unity.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="40" height="40" className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' /> </a>
                        </div>
                    </div>
                </div>




                <div className="mx-auto max-w-4xl text-center ltr:l:text-left p-16 rtl:l:text-right">
                    <h2 className="text-3xl font-medium fong-medium text-gray-900 sm:text-6xl">
                        What My Clients Say
                    </h2>
                    <span className="flex items-center">
                        <span className="h-0.5 flex-1 bg-yellow-500"></span>
                    </span>
                </div>



                <div class="container px-3 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-100 px-6 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                {/* <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Software Development</h1> */}
                                <div className="flex flex-shrink-0 items-center justify-center">
                                    <img

                                        className="h-16 w-16 rounded-full"
                                        src="/images/client3.png"
                                        alt=""
                                    />
                                </div>
                                <br />


                                <span className="flex items-center">
                                    <span className="h-0.5 flex-1 bg-yellow-500"></span>
                                    <span className="shrink-0 px-6">Johnsley Simeon</span>
                                    <span className="h-0.5 flex-1 bg-yellow-500"></span>
                                </span>
                                <br />
                                <p class="leading-relaxed mb-3">
                                    Evelybenson's graphic design skills are outstanding. They created a logo and branding materials for our business that perfectly captured our vision and values. We couldn't be happier with the results.
                                </p>
                                <h1>⭐️⭐️⭐️⭐️⭐️</h1>
                                <div>


                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-100 px-6 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                <div className="flex flex-shrink-0 items-center justify-center">
                                    <img

                                        className="h-16 w-16 rounded-full"
                                        src="/images/client1.jpg"
                                        alt=""
                                    />

                                </div>
                                <br />

                                <span className="flex items-center">
                                    <span className="h-0.5 flex-1 bg-yellow-500"></span>
                                    <span className="shrink-0 px-6">Esther Stéphania C.</span>
                                    <span className="h-0.5 flex-1 bg-yellow-500"></span>
                                </span>
                                <br />
                                <p class="leading-relaxed mb-3">
                                    Evelybenson's civil engineering expertise was invaluable for our construction project. They provided structural designs that were safe, efficient, and cost-effective, and helped us navigate the complex regulatory landscape with ease.
                                </p>
                                <h1>⭐️⭐️⭐️⭐️⭐️</h1>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-100 px-6 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">

                                <div className="flex flex-shrink-0 items-center justify-center">
                                    <img

                                        className="h-16 w-16 rounded-full"
                                        src="/images/client2.jpg"
                                        alt=""
                                    />

                                </div>
                                <br />

                                <span className="flex items-center">
                                    <span className="h-0.5 flex-1 bg-yellow-500"></span>
                                    <span className="shrink-0 px-6">Glissie Fleurimon</span>
                                    <span className="h-0.5 flex-1 bg-yellow-500"></span>
                                </span>
                                <br />
                                <p class="leading-relaxed mb-3">
                                    Evelybenson's software development skills are top-notch. They created a custom web application for our business that has transformed our operations and made our workflows much more efficient.
                                    We highly recommend their
                                    services
                                </p>
                                <h1>⭐️⭐️⭐️⭐️⭐️</h1>
                                <div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AboutMe;
