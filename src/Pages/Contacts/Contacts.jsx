import { Container, Row, Col } from 'react-bootstrap';
import Whatsapp from '../../images/contacts_page/Icon_whatsapp.svg'
import Viber from '../../images/contacts_page/Icon_viber.svg'
import Telegram from '../../images/contacts_page/Icon_telegram.svg'
import Gmail from '../../images/contacts_page/Icon_gmail.svg'
import Telephone from '../../images/contacts_page/Icon_telephone.svg'
import './Contacts.css'



const Contacts = () => {
    return (
        <Container className="contacts pt-lg-5 pb-lg-5">
            <Row className="text-center mb-5">
                <Col lg={12}>
                    <p className="title mb-0">For any questions please mail us:</p>
                    <div className="contacts__line mx-auto"></div>
                </Col>
            </Row>

            <Row className="mb-5 align-items-center">
                <Col lg={12} className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-sm-4">
                    <img src={Gmail} alt="Gmail" />
                    <p className="text-center contacts__text mb-0 flex-wrap">aleksandr.kulagin.work.email @gmail.com</p>
                </Col>
            </Row>

            <Row className="mb-5 align-items-center">
                <Col lg={12} className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-sm-4">
                    <div className="d-flex flex-nowrap gap-2">
                        <div><img src={Whatsapp} alt="WhatsApp" /> / </div>
                        <div><img src={Viber} alt="Viber" /> / </div>
                        <img src={Telegram} alt="Telegram" />
                    </div>
                    <p className="contacts__text mb-0">+7 (926) 450-98-40</p>
                </Col>
            </Row>

            <Row className=" align-items-center">
                <Col lg={12} className="d-flex justify-content-center align-items-center flex-wrap gap-3 gap-sm-4">
                    <img src={Telephone} alt="Telephone" />
                    <p className="contacts__text mb-0">+ 373 (699) 471-99</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;

