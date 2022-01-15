import React from 'react';
import SectionTwo from './AbsoulteSection/SectionTwo';
import CarouselSection from "./CarouselSection/CarouselSection";
import SectionOne from "./AbsoulteSection/SectionOne";
import LearnCenter from './LearnCenter/LearnCenter';

const MainSection = () => {
    return (
        <div>
            <SectionOne />
            <CarouselSection />
            <SectionTwo />
            <LearnCenter />
        </div>
    );
};

export default MainSection;