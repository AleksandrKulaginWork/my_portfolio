import { Row, Col } from 'react-bootstrap';
// import { Container} from 'react-bootstrap';
import Hand from '../../images/home_page/emoji/hand.svg'
import UserPhoto from '../../images/home_page/user_photo/user_4.png'
import './Home.css'




const Home = () => {
    return (
        <div className="home pb-5 pt-5">
            <Row className="align-items-center">
                <Col lg={6} className="home-text mb-4">
                    <p>Hi <img className="home-emodji" src={Hand} alt="Emodji 'Hi!'" />, <br /> My name is <br />
                        <span>Aleksandr Kulagin</span> <br /> I build things for web</p>
                </Col>
                <Col lg={6} className="text-center text-lg-end">
                    <img className="home-user" src={UserPhoto} alt="User_photo" />
                </Col>
            </Row>
        </div>
    );
}

export default Home;



// const Home = () => {
//     return (
//         <Container className="home">

//             <div className="d-flex justify-content-between align-items-center flex-wrap">

//                 <div lg={6} className="">
//                     <p>Hi <img className="" src={Hand} alt="Emodji 'Hi!'" />,<br />
//                         My name is <br />
//                         <span>Aleksandr Kulagin</span> <br />
//                         I build things for web</p>
//                 </div>

//                 <div lg={6} className="user-border">
//                     <img className="user" src={UserPhoto} alt="User_photo" />
//                 </div>
//             </div>
//         </Container>
//     );
// }

// export default Home;