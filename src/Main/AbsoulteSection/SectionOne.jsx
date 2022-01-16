import React from 'react';

const SectionOne = () => {
    return (
        <div className='w-100 d-block'>
            <div className="container-fluid">
                <div className="row">
                <span className='section-one-dasheds-solid' style={{
                position:"absolute",
                color:"#fff",
                width:"100%",
                border:"1px dashed #333",
                top:"13%",
                zIndex:"-999"
            }}></span>
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-4">

                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-4">

                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className='absolute-sectionone-div'>
                            <p className='absolute-sectionone-div-titleone'>
                                학습 센터
                            </p>
                            <p className='absolute-sectionone-div-titletwo'>
                                Topik
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SectionOne;