import React from 'react';
import "./CarouselSection.css"


const CarouselSection = () => {
    return (
        <div className='container-fluid mt-3'>
            <p className='carousel-head-text px-5'>
            Imkoniyatdan unumli foydalaning
            </p>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner px-5">
                    <div className="carousel-item active w-100 p-5">
                        <div className="row" style={{
                            position: "relative"
                        }}>
                            <div className="col-md-8 col-sm-12">
                                <p  className='fst-italic carouseel-title-item'>
                                    Siz imkoniyatlaringizdan to’liq <br /> foydalanig
                                </p>
                                <h2 className='fst-italic carouseel-title-one'>Topik I darslar</h2>
                                <p className='mt-3 carouseel-body-one'>
                                    Siz uchun tayyorlangan Topik darsliklari <br /> sizning yuqori daraja olishingizga <br /> yordam beradi. Darsliklar malakali <br /> mutahasislar tomonidan tayyorlangan.
                                </p>
                                <button className='btn btn-danger'>
                                    시작 <i className="far fa-arrow-alt-circle-down"></i>
                                </button>
                                <p className='mt-2'>
                                    <span>1 급</span>
                                    <span className='px-2'>2 급</span>
                                </p>

                            </div>
                            <div className="col-md-4 disp-no">
                                <div style={{
                                    position: "absolute",
                                    right: "8px",
                                }} className='carousel-item-circle'>
                                    <p className='carousel-item-circle-text'>
                                        TOPIK <br />
                                        I
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item w-100 p-5">
                    <div className="row" style={{
                            position: "relative"
                        }}>
                            <div className="col-md-6 col-sm-12">
                                <p  className='fst-italic carouseel-title-item'>
                                    Siz imkoniyatlaringizdan to’liq <br /> foydalanig
                                </p>
                                <h2 className='fst-italic carouseel-title-one'>Topik II darslar</h2>
                                <p className='mt-3 carouseel-body-one'>
                                    Siz uchun tayyorlangan Topik darsliklari <br /> sizning yuqori daraja olishingizga <br /> yordam beradi. Darsliklar malakali <br /> mutahasislar tomonidan tayyorlangan.
                                </p>
                                <button className='btn btn-danger'>
                                    시작 <i className="far fa-arrow-alt-circle-down"></i>
                                </button>
                                <p className='mt-2'>
                                    <span>1 급</span>
                                    <span className='px-2'>2 급</span>
                                </p>

                            </div>
                            <div className="col-md-6 disp-no">
                                <div style={{
                                    position: "absolute",
                                    right: "8px",
                                }} className='carousel-item-circle'>
                                    <p className='carousel-item-circle-text'>
                                        TOPIK <br />
                                        II
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev bg-white-sm carusel-preva" style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    marginTop: "15%",
                    backgroundColor: "rgba(41, 45, 55, 1)",
                    marginRight: "10px"
                }} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" style={{
                        width: "15px"
                    }} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next bg-white-sm" style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    marginTop: "15%",
                    backgroundColor: "rgba(41, 45, 55, 1)"
                }} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" style={{
                        width: "15px",
                    }} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default CarouselSection;