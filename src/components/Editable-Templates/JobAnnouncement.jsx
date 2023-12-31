import { useNavigate } from 'react-router-dom';

export const JobAnnouncement = () => {
    const navigate = useNavigate();

    function goToVacancy() {
        navigate('/Steps/Vacancy')
    }
    function goToRequirements() {
        navigate('/Steps/Requirements')
    }
    function goToSocial() {
        navigate('/Steps/Social-Media-Post')
    }

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400'>
                                <pattern
                                    id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Create</span>
                    </span>{' '}
                    custom job announcement
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="sm:text-center button" role='button' onClick={goToVacancy}>
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-blue-700 bg-indigo-50 sm:mx-auto">
                        1
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Job Vacancy</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Edit Job Vacancy and Salary etc..
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-700 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
                <div className="sm:text-center button" role='button' onClick={goToRequirements}>
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-blue-700 bg-indigo-50 sm:mx-auto">
                        2
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Requirements</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Edit requirements for the position
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-700 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
                <div className="sm:text-center button" role='button' onClick={goToSocial}>
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-blue-700 bg-indigo-50 sm:mx-auto">
                        3
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Social Media Post</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Create a Social Media post for the job Vacancy
                    </p>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-700 hover:text-deep-purple-800"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    );
};