import { Row, Col } from 'react-bootstrap';
import { skillsList_1 } from '../../components/helpers/skillsList';
import { skillsList_2 } from '../../components/helpers/skillsList';
import './Skills.css'





const Skills = () => {
    return (
        <div className="skills pb-5 pt-5">
            <Row className="skills__title">
                <Col lg={12}>
                    <h2>My Tech Stack</h2>
                    <p>Technologies I`ve been working with recently</p>
                </Col>
            </Row>
            <Row>
                {skillsList_1.map((s) => {
                    return (
                        <Col className="skills__icon text-center mb-5" sm={6} md={4} lg={2} key={s.id}>
                            <img src={s.img} alt={s.alt} />
                        </Col>
                    )
                })}
            </Row>
            <Row>
                {skillsList_2.map((s) => {
                    return (
                        <Col className="skills__icon text-center mb-5" sm={6} md={4} lg={2} key={s.id}>
                            <img src={s.img} alt={s.alt} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
}

export default Skills;