import React from 'react';

const Resume = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <h1 className='resume'>Resume</h1>
                <h3>Click on below button to download as PDF</h3>
                <button onClick={onButtonClick}>
                    Download 
                </button>
            </center>
        </>
    );

}
export default Resume;