import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import i18n from "../utils/i18n";
import esData from './../assets/translations/es.json'

export default function WorkExperience() {
  const { workExperience_info } = esData;
  console.error(workExperience_info);
  return (
    <Row>
      <Col>
      {workExperience_info.map((workExperience,index) => (
        <div key={index} className='m-1'>
          <Card style={{ textAlign:"left",border:0 }}>
            <Card.Body>
              <Card.Title style={{color:"#222"}}>{i18n.t("workExperience_info["+index+"].title")}</Card.Title>
              <Card.Text style={{color:"#797979",fontFamily:"Prata"}}>
                {i18n.t("workExperience_info["+index+"].experience")},  {i18n.t("workExperience_info["+index+"].start_date")} - {i18n.t("workExperience_info["+index+"].end_date")}
                <br/>
                {i18n.t("workExperience_info["+index+"].summary")}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          ))}
        </Col>
    </Row>
  );
}


