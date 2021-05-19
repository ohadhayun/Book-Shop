// import { Card, Button } from "react-bootstrap";
// import { RiCopyrightLine } from "react-icons/ri"
// function Footer() {
//     return (
//         <Card className="text-center">
//             <Card.Header>Featured</Card.Header>
//             <Card.Body>
//                 <Card.Title>Special title treatment</Card.Title>
//                 <Card.Text>
//                     With supporting text below as a natural lead-in to additional content.
//          </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//                 <br></br>
//                 <RiCopyrightLine/>All rights recived.
//             </Card.Body>
//             <Card.Footer className="text-muted">2 days ago</Card.Footer>

//         </Card>
//     );
// }
// export default Footer;


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom"
import "./index.css";

function Footer() {
    const goToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div>
            <div onClick={goToTop}>
                {/* <a onClick={goToTop}> */}
                <span className="backTop">Back to top</span>
                {/* </a> */}
            </div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>BooK<span>ing</span></h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>
                        <Link className="link-1" to="/home"><a href="#">Home</a></Link>
                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact us</a>
                        <Link className="link-1" to="/contactUs"><a href="#">Contact us</a></Link>
                    </p>

                    <p className="footer-company-name">BooKing © 2020</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>444 S. Cedros Ave</span> Dimona, Isreal</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+972.333.989.88</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">ohadh6@gmail.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </div>
    )
}
export default Footer;