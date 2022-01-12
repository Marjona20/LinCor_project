import { useState } from "react";
import CarouselPart from "./CarouselPart";
import TopDivs from "./TopDivs";

const Solution = (props) => {
  const [selectedDiv, setSelectedDiv] = useState(0);

  const onDivClickHandler = (id) => {
    setSelectedDiv(id);
  };
  return (
    <div>
      <TopDivs selectedId={selectedDiv} onDivClickHandler={onDivClickHandler} />
      <CarouselPart activeIndex={selectedDiv} />
    </div>
  );
};

export default Solution;
