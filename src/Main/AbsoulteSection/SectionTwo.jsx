import React from 'react';
import "./SectionAbsolute.css"

const SectionTwo = () => {
    return (
        <div className='w-100' style={{
            position:"relative",
        }}>
            <span className='dotted-solid-dark' style={{
                position:"absolute",
                color:"#fff",
                width:"100%",
                border:"1px dashed #333",
                top:"70px",
                zIndex: -999,
            }}></span>
            <div className='absolute-sectiontwo-div'>
                <p className='absolute-sectiontwo-div-titleone'>
                    학습 센터 
                </p>
                <p className='absolute-sectiontwo-div-titletwo'> 
                    O’quv markazlari
                </p>
            </div>
        </div>
    );
};

export default SectionTwo;