import React from 'react';
import { Card, Button, Nav, Container, Row, Col, CardGroup, CardColumns } from "react-bootstrap";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs"
import { Link } from "react-router-dom"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function CardComp({product, index, onAddToCart}){
    
    return (
    <Card onMouseEnter={() => onMouse(this)} key={index} style={{ width: '189px', textAlign: "center", margin: "5px" }}>
                <Card.Img style={{ maxWidth: "170px", height: "180px", margin: "auto" }} variant="top" src={`http://localhost:3006/images/${product.image}`}>
                
                </Card.Img>
                <Button onClick={() => onAddToCart(product)} className="test1">Add to cart</Button>
                
                <Card.Body>
                    <h4 className="bookTitle">{product.bookName}</h4>
                    <Card.Text className="authorName" variant="primary">
                        {product.author}
                    </Card.Text>
                    <Card.Text className="starsDesign">
                        <StarShow star={product.rating} />
                    </Card.Text>
                    <AddShoppingCartIcon onClick={() => onAddToCart(product)} style={{fontSize: "20px"}} />
                    {/* <Nav.Link><Link className="hrefTag" to="/blog">Blog</Link></Nav.Link> */}
                    <Nav.Link><Link to={`product/${product.id}`}><Button style={{border: "0px solid transparent"}} variant="primary">More details</Button></Link></Nav.Link>
                </Card.Body>
            </Card>
);}


function onMouse(that) {
    <Button type="button" className="button-actions btn-addtocart" tabIndex="-1"></Button>
    
    // console.log('answer');
}

function StarShow(props) {
    const stars = [];
    const halfStar = props.star % 1;
    let i = 0;
    for (; i < Math.floor(props.star); i++) {
        stars.push(<BsStarFill key={i} style={{ display: "inline-block" }} />)
    }
    if (halfStar) {
        stars.push(<BsStarHalf key={i} style={{ display: "inline-block" }} />)
        i++;
    }
    for (; i < 5; i++) {
        stars.push(<BsStar key={i} style={{ display: "inline-block" }} />);
    }
    return stars;
}


export default CardComp;