import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Topdivs.css'

const divs = [
  {
    id: 0,
    numb: '01',
    kars: "초급 ",
    daraja: "Boshlang’ich daraja",
    text: "Boshlang’ich darajadagilar uchun darslar to’plami. Umumiy darslar 25 tani tashkil qiladi.",
  },
  {
    id: 1,
    numb: '02',
    kars: "중급 ",
    daraja: "O’rta daraja",
    text: "O’rta Boshlang’ich darajadagilar uchun darslar to’plami. Umumiy darslar 25 tani tashkil qiladi.",
  },
  {
    id: 2,
    numb: '03',
    kars: "고급 ",
    daraja: "Yuqori daraja",
    text: "Yuqori darajadagilar uchun darslar to’plami. Umumiy darslar 25 tani tashkil qiladi.",
  },
];

const TopDivs = ({ selectedId, onDivClickHandler }) => {
  return (
    <div className="section1 container pt-5">
          <div className="texts mb-5">
          <h2>비디오 수업 </h2>
          <h3>Video darsliklar to’plami</h3>
          </div>
    <div className="d-flex justify-content-between">
      {divs.map((oneDiv) => {
        return (
          <div classname="div-hover" onClick={() => onDivClickHandler(oneDiv.id)}>
          <h5><span className="me-4">{oneDiv.numb}</span> {oneDiv.kars} {oneDiv.daraja} </h5>
          <p className="p">{oneDiv.text}</p>
            {selectedId === oneDiv.id && " "}
          </div>
        );
      })}
    </div></div>
  );
};

export default TopDivs;
