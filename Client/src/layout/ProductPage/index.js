import { Container, Row, Col, Image, Jumbotron, Form } from "react-bootstrap"
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs"
import { BiShekel } from "react-icons/bi";
import './index.css';
import { useParams } from "react-router-dom";
// import { allProducts } from '../allProductsService'
import * as apiFunctions from '../../API/api'
import { useState, useEffect } from 'react';



function ProductPage(props) {
    function putDetails() {
        console.log(product);
        return (<div>
            <Container>
                <Row lg={12} >
                    <Col md={3}><Image src={`http://localhost:3006/images/${product.image}`} className="image" /></Col>

                    <Col md={9}>
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <span style={{ fontSize: "30px" }} className="writerName">{product.bookName}  </span>
                            </li>
                            <li>
                             <span style={{ fontSize: "18px" }}> by {product.author}</span>
                            </li>
                            <li className={product.stock === "In Stock" ? 'stock' : 'outStock'}>{product.stock}</li>
                            <li><StarShow star={product.rating} /></li>
                            <li><span style={{ fontSize: "20px" }}>Price: {product.price}$</span></li>
                            <li> <div style={{ width: "55px" }}> Pick Amount:
                                <Form.Control type="number" placeholder="1" min="1" />
                            </div></li>
                        </ul>

                    </Col>
                    


                </Row>
                
                <Row className="underLine" style={{ display: "flex", justifyContent: "center" }}>
                <Col md={12}>
                        <h1>Introduction</h1>{product.introduction}
                    </Col>
                </Row>
            </Container>
        </div>
        )
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
        return <div>{stars}</div>;
    }

    const [loadingState, setLoadingState] = useState(true);


    let id = useParams().id;
    const [product, setProduct] = useState([]);
    useEffect(async () => {
        const apiArrayProducts = await apiFunctions.getById("books", id);
        setProduct(apiArrayProducts.data[0]);
        setLoadingState(false);
    }, []);

    console.log(product);
    return (
        <div>
            <Container style={{ display: loadingState ? 'block' : 'none' }}>Loading...</Container>
            <Container style={{ marginTop: "35px", display: loadingState ? 'none' : 'block' }}>
                {loadingState ? <></> : putDetails()}
            </Container>
        </div>
    );
}

export default ProductPage;


// <AiFillStar style={{ fontSize: "20px" }} />{props.product.rating}