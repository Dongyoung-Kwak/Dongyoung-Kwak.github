import { useRef, useState } from "react";
// import Link from "react-router-dom";
// import styles from "styles/components/DropDown.module.scss";
// import classNames from "classNames";
import { A, P, Td, Tr, Th, Span, Button, Img, CarouselBtn, CarouselItem, Table, Option, Div, Form, Input } from './Tag'
import useDetectClose from './useDetectClose'


const DropDown = () => {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  return (
    <Div className="dropdown-center">
      <Button onClick={() => setIsOpen(!isOpen)} >입지분석</Button>
      <ul ref={dropDownRef} className="dropdown-menu">
        <li><A className="dropdown-item"
          to="/locationAnalysis/population.do">인구분석</A></li>
        <li><A className="dropdown-item"
          to="/locationAnalysis/hospital.do">치과현황</A></li>
        <li><A className="dropdown-item"
          to="/locationAnalysis/map.do">지도</A></li>
      </ul>
    </Div>
  );
};

export default DropDown;