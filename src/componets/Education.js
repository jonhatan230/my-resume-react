import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import i18n from "../utils/i18n";
import esData from './../assets/translations/es.json'

export default function Education() {
  const { education_info } = esData;
  console.error(education_info);
  return (
    <div>
          {education_info.map((education, index) => (
            <div key={index} className='m-1'>
              <Card style={{ textAlign: "left", border: 0 }}>
                <Card.Body>
                  <Card.Title style={{ color: "#222" }}>{i18n.t("education_info["+index+"].title")}</Card.Title>
                  <Card.Text style={{ color: "#797979", fontFamily: "Prata" }}>
                    -{i18n.t("education_info["+index+"].school")}, {i18n.t("education_info["+index+"].start_date")} - {i18n.t("education_info["+index+"].end_date")}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
    </div>
  );
}
export { Education }