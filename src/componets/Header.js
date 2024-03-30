import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import i18n from "../utils/i18n";
import Photo from "./../PHOTO.png";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import esData from './../assets/translations/es.json'
import Photo2 from "./../Foto2.jpg"


export default function Header() {
  const { contact_info } = esData;
  console.error(contact_info);
  return (

    <Row className='p-5'>
      <Col sm={12} md={7} >
        <Row>
          <Col md={4}>
            <Image src={Photo2} roundedCircle style={{ height: '150px', width: '125px' }} />
          </Col>
          <Col md={8}>

            <Card.Title style={{ color: 'White', fontSize: '40px', fontStyle: 'normal', textAlign: 'left', lineHeight: '34px', fontFamily: 'Poppins', fontWeight: '600' }}>{i18n.t("header[0].name")}</Card.Title>
            <Card.Text ></Card.Text>

            <Card.Title style={{ color: '#1C8EB5', fontSize: '30px', fontStyle: 'normal', textAlign: 'left', lineHeight: '24px', fontFamily: 'Poppins', fontWeight: '500' }}>{i18n.t("header[0].role")}</Card.Title>
            <Card.Text ></Card.Text>
          </Col>

          <Row className='mr-5'>
            <Card.Title style={{ color: 'White', fontSize: '15px', fontStyle: 'normal', textAlign: 'left', lineHeight: '25px', fontFamily: 'Poppins', fontWeight: '400' }}>{i18n.t("header[0].summary")}</Card.Title>
            <Card.Text ></Card.Text>
          </Row>
        </Row>
      </Col>
      <Col sm={12} md={4} className='ml-5'>
        <Row className='ml-5'>
          {contact_info.map((contact, index) => (
            <div key={index} className='m-1'>
              <Card.Title style={{ color: "#1C8EB5", textAlign: 'left' }}>{i18n.t("contact_info[" + index + "].title")}</Card.Title>
              <Card.Text style={{ color: "White", fontFamily: "Poppins", textAlign: 'left', fontWeight: 'bold', textDecoration: 'underline' }}><a className='nav-link' href={contact.prefix + contact.url} target='_blank'> {i18n.t("contact_info[" + index + "].data")} </a></Card.Text>
            </div>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

