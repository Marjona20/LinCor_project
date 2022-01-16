import React from 'react';
import "./LearnCenter.css"
import room from "./room.jpg"


const LearnCenter = () => {
    return (
        <div className='container-fluid mt-5' style={{
            position:"relative"
        }}>
            <div className="row">
            <span className='dotted-solid-dark-learn-center' style={{
                position:"absolute",
                color:"#fff",
                width:"100%",
                border:"1px dashed #333",
                zIndex: -999,
                top:"50%"
            }}></span>
                <div className="col-12">
                    <div className="mx-3 p-4 main-div">
                        <p className='main-div-title'>
                            <span className='learncenter-title-span'>O’</span> quv markazlari
                        </p>
                        <div className="row">
                            <div className="col-sm-6 com-md-6 col-xl-6">
                                <p className='main-div-desc mt-5'>
                                    Bizga tegishli bo’lgan o’quv markazlarimizga tashrif buyuring biz sizlarni Koreya atmasferasiga olib kiramiz. Kares tili jamoasi bilan birgalikda tez va osson o’rganing.
                                </p>
                                <a href="/" className='main-div-link mt-2'>Batafsil</a>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-6 mt-3">
                                <div className='position-relative-learn-center'>
                                    <div className='imag-back-red'></div>
                                    <img src={room} alt="" className='w-100 image-style-learn-center'/>
                                    <div className='imag-back-dark'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnCenter;