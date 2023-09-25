import React from 'react'
import { Link } from 'react-router-dom';

function HomeComponents() {

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
                <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
                    <a href="/" aria-label="Item" className="mr-3">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                            <svg
                                className="w-12 h-12 text-indigo-800"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                        <span className="inline-block mb-2">Brand Asset Manager</span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                </div>
                <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
                    Explore your brand effortlessly. Logos, business cards, and more — all in one place. Welcome to Stone Hotel's Brand Asset Manager.
                </p>
            </div>
            <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8 ">
                <Link to='/logos'>
                    <div>
                        <img
                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 transition-transform transform hover:scale-105 cursor-pointer"
                            src="https://png.pngtree.com/template/20190611/ourmid/pngtree-feminine-floral-logo-editable-image_210612.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Logos
                        </p>
                    </div>

                </Link>

                <Link to='/media-collection/images'>
                    <div>
                        <img
                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 transition-transform transform hover:scale-105 cursor-pointer"
                            src="https://miro.medium.com/v2/resize:fit:1200/1*ztCQLzdFx7C0sMCB3EfZug.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Images 
                        </p>
                    </div>
                </Link>

                <Link to='/media-collection/videos'>
                    <div>
                        <img
                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 transition-transform transform hover:scale-105 cursor-pointer"
                            src="https://cdn.xxl.thumbs.canstockphoto.com/covering-an-event-with-a-video-camera-stock-photography_csp14736807.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Videos 
                        </p>
                    </div>
                </Link>

                <Link to='/editable-templates/job-announcements'>
                    <div>
                        <img
                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 transition-transform transform hover:scale-105 cursor-pointer"
                            src="https://thumbs.dreamstime.com/b/cv-resume-template-job-applications-75631171.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Job Announcements
                        </p>
                    </div>

                </Link>

                <Link to='editable-templates/business-cards'>
                    <div>
                        <img
                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 transition-transform transform hover:scale-105 cursor-pointer"
                            src="https://img.freepik.com/free-psd/modern-clean-professional-business-card-template_501970-93.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Business Cards
                        </p>
                    </div>

                </Link>

                <Link to='/editable-templates/email-signatures'>
                    <div>
                        <img
                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 transition-transform transform hover:scale-105 cursor-pointer"
                            src="https://images.squarespace-cdn.com/content/v1/59a6d145197aea7e662f1d63/1654707195137-YLEIYEGJPYV9WRZWE9AV/Bright_EmailSignatureTemplates_v03-Mockup01.jpg?format=2500w?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            alt=""
                        />
                        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Email Signatures
                        </p>
                    </div>

                </Link>

                <Link to='/editable-templates/letterheads'>
                    <div>
                        <img
                            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 transition-transform transform hover:scale-105 cursor-pointer"
                            src="https://graphicyard.com/wp-content/uploads/2018/09/High-Quality-Professional-Corporate-Letterhead-Template-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Letterheads
                        </p>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default HomeComponents