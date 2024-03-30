
import React from 'react'
import i18n from "../utils/i18n";
import esData from './../assets/translations/es.json'
import { FaStar } from "react-icons/fa6";

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


const StarsRating = ({ numberOfStars }) => {
  const starsArray = Array.from({ length: numberOfStars }, (_, index) => index + 1);
  return (
    <>
      {starsArray.map((starIndex) => (
        <span>
          <FaStar />
        </span>
      ))}
    </>
  );
};

export default function Skills() {
  const { skills_info } = esData;
  console.error(skills_info);
  return (
    <div style={{ textAlign: "left", alignItems: "star", }} >
      <p className='d-inline'>
        {skills_info.map((skills, index) => (
          <p>
            <ListGroup as="ol">
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start " >
                <div className="ms-2 me-auto" >
                  <div className="fw-bold" ><p className="d-inline" style={{ fontSize: "25px"}}>{i18n.t("skills_info[" + index + "].title")} </p></div>
                  
                </div>
                <Badge bg="white" pill >
                  <div style={{ fontSize: "28px", color:"black"  }}> <StarsRating numberOfStars={i18n.t("skills_info[" + index + "].level")} /> </div>
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </p>
        ))}
      </p>
    </div>
  );
}













