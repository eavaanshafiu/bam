import React, { useState } from 'react'
import { Form, FormGroup, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
//icons
import { TbGridDots } from 'react-icons/tb'
import { AiFillCloseCircle } from "react-icons/ai";
import { ImMobile } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'

export const CardGenerator = React.forwardRef((props, ref) => {
    const [firstName, setFirstName] = useState('Jane');
    const [middleName, setMiddleName] = useState('Mary');
    const [lastName, setLastName] = useState('Doe');
    const [jobTitle, setJobTitle] = useState('Chef');
    const [companyName, setCompanyName] = useState('Stone Hotels Maldives');
    const [number, setNumber] = useState('+960 1122 334');
    const [email, setEmail] = useState('jane.doe@stonehotels.mv');
    const [companyLogo, setCompanyLogo] = useState();
    const [cardBackground, setCardBackground] = useState();
    const [cardBack, setCardBack] = useState();
    const [cardBackLogo, setCardBackLogo] = useState();
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [isLocked, setIsLocked] = useState(true);
    const [toggleButton, setToggleButton] = useState(true)
    const [cardView, setCardView] = useState('Edit Card Back');
    const numberOfCards = 10;
    const navigate = useNavigate();

    function handleFirstName(e) {
        const fName = e.target.value;
        setFirstName(fName);
    }
    function handleMiddleName(e) {
        const mName = e.target.value;
        setMiddleName(mName);
    }
    function handleLastName(e) {
        const lName = e.target.value;
        setLastName(lName);
    }
    function handleTitle(e) {
        const title = e.target.value;
        setJobTitle(title);
    }
    function handleCompanyName(e) {
        const cName = e.target.value;
        setJobTitle(cName);
    }
    function handleNumber(e) {
        const num = e.target.value;
        setNumber(num);
    }
    function handleEmail(e) {
        const mail = e.target.value;
        setEmail(mail);
    }
    function handleLogo(e) {
        setCompanyLogo(URL.createObjectURL(e.target.files[0]));
    }
    function handleCardBackground(e) {
        setCardBackground(URL.createObjectURL(e.target.files[0]));
    }
    function handleCardBack(e) {
        setCardBack(URL.createObjectURL(e.target.files[0]));
    }
    function handleCardBackLogo(e) {
        setCardBackLogo(URL.createObjectURL(e.target.files[0]));
    }
    function removeLogo() {
        setCompanyLogo()
    }
    function removeBackLogo() {
        setCardBackLogo()
    }
    function removeBackgroundFront() {
        setCardBackground();
    }
    function removeBackgroundBack() {
        setCardBack();
    }
    const showForm = () => {
        setIsFormVisible(true);
    }
    const hideForm = () => {
        setIsFormVisible(false);
    }
    function toggleLock() {
        setIsLocked(!isLocked);
    }
    function toggleCardView() {
        setToggleButton(!toggleButton)

        if (toggleButton === true) {
            setCardView('Card Back View')
        }
        else if (toggleButton === false) {
            setCardView('Card Front View')
        }
    }
    function handleExport() {

        navigate('/export', {
            state: {
                firstName,
                firstName,
                middleName,
                lastName,
                jobTitle,
                companyName,
                number,
                email,
                companyLogo,
                cardBackground,
                cardBack,
                cardBackLogo,
            },
        })
    }

    return (
        <div className='Container text-stone h-full grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2' >

            <section className='preview px-5 flex items-center justify-center h-full sm:flex-col gap-10 sm:relative sm:overflow-hidden'>
                <div className={`${cardView} template-background  sm:w-80 sm:h-44 bg-white bg-no-repeat bg-cover box-border shadow-2xl h-2/3 w-3/4 p-8 flex flex-col justify-center  front-view `} style={{ backgroundImage: `url(${cardBackground})` }}>
                    <div className="name-title-div">
                        <p className='name m-0 font-bold uppercase text-xl tracking-widest sm:text-sm'>{firstName} {middleName} {lastName}</p>
                        <hr className='my-4  bg-stone-bold opacity-50 border-none h-0.5 sm:my-2' />
                        <p className="title m-0 text-base sm:text-sm">{jobTitle}</p>
                        <hr className='mb-3 bg-stone-bold opacity-50 border-none h-0.5 sm:my-2 sm:mb-1' />
                    </div>
                    <div className="info-div grid grid-cols-[2fr,1fr]">
                        <div className="contact-div">
                            <p className="number sm:text-xs m-0 text-sm flex"><ImMobile className='icon translate-y-0.5 mr-0.5' />{number}</p>
                            <p className="email sm:text-xs sm:mb-1 m-0 text-sm mb-1.5 flex"><AiOutlineMail className='icon translate-y-0.5 mr-0.5' /> {email}</p>
                            <p className="website sm:text-xs m-0 text-sm flex"><TbWorld className='icon translate-y-0.5 mr-0.5' /> {companyName}</p>
                            <div className="company">
                                <img src={companyLogo} alt="Company Logo" className='sm:w-15 sm:mt-1.5 w-20 h-auto text-xs mt-2.5 ' />
                            </div>
                        </div>
                        <div className="address-div">
                            <p className='address sm:text-xs m-0 text-sm'>6th Floor, M. Stella, Feerozu Magu, 20255 Male', Maldives</p>
                        </div>
                    </div>
                </div>

                <div className={`${cardView} template-background sm:w-80 sm:h-44 bg-white bg-no-repeat bg-cover box-border shadow-2xl h-2/3 w-3/4 p-8 flex flex-col justify-center back-view`} style={{ backgroundImage: `url(${cardBack})` }}>
                    <img src={cardBackLogo} alt="" className="back-logo max-h-10" />
                    <p className="company-name m-0 tracking-wider font-semibold text-center">{companyName}</p>
                </div>

                <div className="button-div absolute top-8 right-8">
                    <button onClick={handleExport} className='font-semibold '>Export PDF</button>
                </div>
            </section>

            <section className="formSection md: h-full p-0 grid place-items-center sm:h-3/5">
                {/* when form is visible the classname is just form. when its hidden it is 'form form-hidden' */}
                <div className={`${cardView} form ${isFormVisible ? 'sm:px-5 sm:flex sm:flex-col sm:justify-center sm:h-full ' 
                :
                    'form-hidden hidden'}`}>
                    <div className="form-title ">
                        <h1 className='md:m-0 md:text-3xl font-bold sm:text-3xl'>
                            Enter Your Card Details
                        </h1>
                    </div>

                    <h2>Card Front</h2>
                    <Form className='grid grid-cols-2  md:pt-8 sm:relative md:w-full sm:place-items-center sm:gap-y-3 sm:gap-x-6'>
                        <FormGroup className='f-name'>
                            <p className='sm:m-1'>First Name</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110 ' 
                                type="text"
                                name="first-name"
                                placeholder="Jane"
                                value={firstName}
                                onChange={handleFirstName}
                            />
                        </FormGroup>

                        <FormGroup id='form-group' className='m-name'>
                            <p className='sm:m-1'>Middle Name</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="text"
                                name="middle-name"
                                placeholder="Mary"
                                value={middleName}
                                onChange={handleMiddleName}
                            />
                        </FormGroup>

                        <FormGroup id='form-group' className='l-name'>
                            <p className='sm:m-1'>Last Name</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="text"
                                name="last-name"
                                placeholder="Jane"
                                value={lastName}
                                onChange={handleLastName}
                            />
                        </FormGroup>

                        <FormGroup id='form-group' className='title'>
                            <p className='sm:m-1'>Job Title</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="text"
                                name="title"
                                placeholder="Chef"
                                value={jobTitle}
                                onChange={handleTitle}
                            />
                        </FormGroup>

                        <FormGroup id='form-group' className='c-name'>
                            <p className='sm:m-1'>Company Name</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="text"
                                name="company-name"
                                placeholder="Stone Hotels Maldives"
                                value={companyName}
                                onChange={handleCompanyName}
                                disabled={isLocked}
                            />
                        </FormGroup>

                        <FormGroup id='form-group' className='contact'>
                            <p className='sm:m-1'>Phone Number</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="text"
                                name="number"
                                placeholder="+960 1122333"
                                value={number}
                                onChange={handleNumber}
                            />
                        </FormGroup>

                        <FormGroup  className='email'>
                            <p className='sm:m-1'>Email</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="text"
                                name="email"
                                placeholder="jane.doe@stonehotels.mv"
                                value={email}
                                onChange={handleEmail}
                            />
                        </FormGroup>

                        <FormGroup className='logo'>
                            <p className='sm:m-1'>Company Logo</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="file"
                                onChange={handleLogo}
                            />
                            <button className='remove-button' onClick={removeLogo} type='button'>Remove</button>
                        </FormGroup>

                        <FormGroup  className='card-background'>
                            <p className='sm:m-1'>Card Background Image</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="file"
                                onChange={handleCardBackground}
                            />
                            <button className='remove-button' onClick={removeBackgroundFront} type='button'>Remove</button>
                        </FormGroup>
                    </Form>

                    {/* SECOND FORM */}

                    <h2>Card Back</h2>
                    <Form className='grid grid-cols-2  md:pt-8 sm:relative md:w-full sm:place-items-center sm:gap-y-3 sm:gap-x-6'>
                        <FormGroup id='form-group' className='card-back-logo'>
                            <p className='sm:m-1'>Company Logo</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="file"
                                onChange={handleCardBackLogo}
                            />
                            <button className='remove-button' onClick={removeBackLogo} type='button'>Remove</button>
                        </FormGroup>

                        <FormGroup id='form-group' className='card-back'>
                            <p className='sm:m-1'>Card Background</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="file"
                                onChange={handleCardBack}
                            />
                            <button className='remove-button' onClick={removeBackgroundBack} type='button'>Remove</button>
                        </FormGroup>

                        <FormGroup id='form-group' className='c-name'>
                            <p className='sm:m-1'>Company Name</p>
                            <FormControl className='w-10/12 p-3 border-none rounded-md transition-shadow shadow-lg font-semibold tracking-widest border-stone-bold outline-none hover:scale-110'
                                type="text"
                                name="company-name"
                                placeholder="Stone Hotels Maldives"
                                value={companyName}
                                onChange={handleCompanyName}
                                disabled={isLocked}
                            />
                        </FormGroup>
                    </Form>
                </div>

                {/* when form is visible this icon's classname is 'showForm hidden '*/}
                <div className={`showForm ${isFormVisible ? 'hidden' : ''}`} onClick={showForm} >
                    <TbGridDots className='icon' />
                </div>

                {/* when form is not visible this icon's classname is 'hideForm hidden' */}
                <div className={`hideForm hidden ${isFormVisible ? '' : 'hidden'}`} onClick={hideForm}>
                    <AiFillCloseCircle className='icon' />
                </div>

            </section>


        </div>
    )
});
export default CardGenerator;