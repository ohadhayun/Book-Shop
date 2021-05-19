import { useState } from "react";
import { Image, Button, ButtonGroup, Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs"
import TextField from '@material-ui/core/textfield';
import './index.css';
import { useContext } from 'react';
import { StoreContext } from '../../Context/Store'

import PayPalBtn from './PayPal/paypal'

const topSelling = [{
    image: "https://images-na.ssl-images-amazon.com/images/I/512D7InYi7L._AC_SX184_.jpg",
    bookName: "The Four Winds",
    author: "Kristin Hannah",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 40,
    category: "A Novel",
    stock: "In Stock",
    id: 1
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 20,
    category: "A Novel",
    stock: "In Stock",
    id: 2
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 20,
    category: "A Novel",
    stock: "In Stock",
    id: 3
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 20,
    category: "A Novel",
    stock: "Out Of Stock",
    id: 4
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 20,
    category: "A Novel",
    stock: "Out Of Stock",
    id: 5
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 20,
    category: "A Novel",
    stock: "Out Of Stock",
    id: 6
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 20,
    category: "A Novel",
    stock: "Out Of Stock",
    id: 7
},
];


function SeeMoreProducts(props) {


    const paypalSubscribe = (data, actions) => {
        return actions.subscription.create({
            'plan_id': "P-6FY35801HV6536513MBUX4LQ",
        });
    };
    const paypalOnError = (err) => {
        console.log("Error")
    }
    const paypalOnApprove = (data, detail) => {
        // call the backend api to store transaction details
        console.log("Payapl approved")
        console.log(data.subscriptionID)
    };

    // dinamic cart
    const [store, updateStore] = useContext(StoreContext);
    console.log(store.cart);

    const [cartArray, setTopSelling] = useState(store.cart.productsArr)
    function removeItemFromArray(product, index) {
        // let newTopSelling = cartArray.filter((book) => book.id !== product.id);
        // setTopSelling(newTopSelling);

        store.cart.productsArr.splice(index, 1);
        console.log(index);
        // let cartProducts = store.cart.productsArr.filter((book) => book.id !== product.id)
        console.log(store.cart.productsArr);
        updateStore({
            ...store,
            cart: {
                ...store.cart,
                howManyProducts: store.cart.howManyProducts - 1,
                totalPrice: Number((store.cart.totalPrice - product.price).toFixed(2)),
                productsArr: [
                    ...store.cart.productsArr
                ]
            }
        });
    }

    function cardMap(array) {
        const produtsMap = array.map((product, index) => {

            return (
                <Row key={index} className="underLine" style={{ display: "flex", justifyContent: "center" }}>
                    <Col md={2}>
                        <Image style={{ maxWidth: "9rem", marginBottom: "20px" }} src={`http://localhost:3006/images/${product.image}`} rounded />
                    </Col>
                    <Col size={1}>
                        <ul>
                            <li>
                                <span className="writerName">{product.bookName}</span><span> by {product.author}</span>
                            </li>
                            <li className={product.stock === "In Stock" ? 'stock' : 'outStock'}>{product.stock}</li>
                            <li><StarShow star={product.rating} /></li>
                            <li><span style={{ fontSize: "20px" }}>Price: {product.price}$</span></li>
                            {/* <li> <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={}
                                InputProps={{ inputProps: { min: 1, max: 10 } }}
                                variant="outlined"
                            /></li> */}
                            <li> <Button onClick={() => removeItemFromArray(product, index)} variant="outline-danger">Remove</Button>{' '}</li>
                        </ul>

                    </Col>
                </Row>
            );
        });
        return produtsMap;
    }


    const topSellingArr = cardMap(store.cart.productsArr);
    function printRow(array) {
        return <div>
            <Row className="underLine" style={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
                <h1 className="TitleClass">
                    <span className="TitleOfCards">Your Shopping Cart</span>
                </h1>
                <div className="see-more-container">
                    <DropdownButton size="sm" id="dropdown-basic-button" title="Sort-by">
                        <Dropdown.Item href="#/action-1">Rating</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Price</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Alphabetic</Dropdown.Item>
                    </DropdownButton>
                </div>

            </Row>

            {array}

        </div>
    }


    return (
        <div>
            {store.cart.howManyProducts == 0 ? <img src="cartEmpty.jpg" alt="The cart is empty" width="100%"></img> :
                <>
                    <Row>
                        <img src="risehandbook.jpg" alt="Education, kid raise his hand" width="100%"></img>
                    </Row>
                    <Container>

                        <Row className="sticky">
                            <Col md={{ span: 4, offset: 8 }} className="orderSummer">
                                <h2 style={{ justifyContent: "center" }}>Order summar</h2><br></br>
                                <h4>Total left to pay: {store.cart.totalPrice}</h4>
                                <PayPalBtn
                                    amount="50"
                                    currency="ILS"
                                    createSubscription={paypalSubscribe}
                                    onApprove={paypalOnApprove}
                                    catchError={paypalOnError}
                                    onError={paypalOnError}
                                    onCancel={paypalOnError} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                {printRow(topSellingArr)}
                            </Col>

                        </Row>
                    </Container>
                </>
            }



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
    return stars;
}

export default SeeMoreProducts;