import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from './Assets/stone-logo.svg'
import './styles/tailwind.css'

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className='h-full w-60 fixed bg-stone-pastel p-6'>
            <div className='flex items-center mb-8'>
                <Link to='/'>
                    <img src={logo} alt="" className='w-12' />
                </Link>
            </div>

            <ul className='flex flex-col gap-10'>
                <li className='font-semibold text-stone-dark'>
                    <span className='rounded py-1 px-2'>Media Collections</span>
                    <ul className='ml-4'>
                        <Link to='/logos' ><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Logos</li></Link>
                        <Link to='/images'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Images</li></Link>
                        <Link to='/videos'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Videos</li></Link>
                    </ul>
                </li>

                <li className='font-semibold text-stone-dark'>
                    <Link to='/editable-templates' className='hover:bg-stone-bold hover:text-stone-highlight rounded cursor-pointer py-1 px-2'>Editable Templates</Link>
                    <ul className='ml-4'>
                        <Link to='/editable-templates/business-cards'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Business Cards</li></Link>
                        <Link to='/editable-templates/email-signatures'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Email Signatures</li></Link>
                        <Link to='/editable-templates/letterheads'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Letterheads</li></Link>
                        <Link to='/editable-templates/job-announcements'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Job Announcements</li></Link>
                    </ul>
                </li>

                <li className='font-semibold text-stone-dark'>
                    <Link to='social-media' className='hover:bg-stone-bold hover:text-stone-highlight  rounded cursor-pointer py-1 px-2'>Social Media</Link>
                    <ul className='ml-4'>
                        <Link to='/social-media/instagram'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Instagram</li></Link>
                        <Link to='/social-media/facebook'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Facebook</li></Link>
                        <Link to='/social-media/twitter'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Twitter</li></Link>
                        <Link to='/social-media/tiktok'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>TikTok</li></Link>
                        <Link to='/social-media/viber'><li className='cursor-pointer py-1 pl-3 rounded text-stone hover:bg-stone-bold hover:text-stone-highlight'>Viber</li></Link>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
