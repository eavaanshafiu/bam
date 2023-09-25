import React, { useRef } from 'react';
import CardFrontDoc from './CardFrontDoc';
import CardBackDoc from './CardBackDoc';
import './ComponentToPrint.scss'
import { useReactToPrint } from 'react-to-print'
import { useNavigate } from 'react-router';
function PdfGenerator() {
    const componentRef = useRef();
    const navigate = useNavigate();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'businesscard.pdf',
        onAfterPrint: () => alert('Print Success')
    })

    function goBack() {
        navigate('/')
    }

    // Calculate the number of rows and columns for the layout
    const rows = 5; // Adjust this based on the number of rows you want
    const columns = 2;

    return (
        <>
            <div className="pdf-page" ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
                <div className="front-view">
                    {[...Array(rows)].map((_, rowIndex) => (
                        <div className="pdf-row" key={rowIndex}>
                            {[...Array(columns)].map((_, colIndex) => (
                                <div className="pdf-column" key={colIndex}>
                                    <CardFrontDoc />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="back-view">
                    {[...Array(rows)].map((_, rowIndex) => (
                        <div className="pdf-row" key={rowIndex}>
                            {[...Array(columns)].map((_, colIndex) => (
                                <div className="pdf-column" key={colIndex}>
                                    <CardBackDoc />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="button-div">
                <button onClick={handlePrint} className='print-page-button'>Print PDF</button>
                <button onClick={goBack} className='print-page-button'>Back</button>
            </div>
        </>
    );
};

export default PdfGenerator;
