import React, { useState, useEffect, useContext } from "react";
import { Card, Button, CardDeck, Container, Row, Col, CardGroup, CardColumns, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs"
import { useParams } from "react-router-dom";
import * as apiFunctions from "../../API/api"
import imgsrc from "./risehandbook.jpg"
import './index.css';
import { StoreContext } from '../../Context/Store';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function SeeMoreProducts(props) {
    let { category } = useParams();
    const [loadingState, setLoadingState] = useState(true);

    const [allProducts, setAllProducts] = useState([]);
    useEffect(async () => {
        const apiArrayProducts = await apiFunctions.getAll('books');
        setAllProducts(apiArrayProducts.data);
        setLoadingState(false);
        let booksArray = apiArrayProducts.data.filter((book) => {
            return category === book.category;
        });
        setCards(booksArray);
    }, []);

    // rerendering the products with no need to go to the server and get the products each reander
    useEffect(() => {
        let booksArray1 = allProducts.filter((book) => {
            return category === book.category;
        });
        setCards(booksArray1);
    }, [category])

    let [topSellingSorted, setCards] = useState([]);
    function ratingSort() {
        const sortingBy = topSellingSorted.sort((a, b) => {
            return b.rating - a.rating;
        })
        setCards([...sortingBy]);
    }
    function ratingLtH() {
        const sortingBy = topSellingSorted.sort((a, b) => {
            return b.price - a.price;
        })
        setCards([...sortingBy]);
    }
    function ratingHtL() {
        const sortingBy = topSellingSorted.sort((a, b) => {
            return a.price - b.price;
        })
        setCards([...sortingBy]);
    }

    // adding to cart
    const [store, updateStore] = useContext(StoreContext);

    const onAddProd = (prod) => {
        updateStore(
            {
                ...store,
                cart: {
                    ...store.cart,
                    productsArr: [
                        ...store.cart.productsArr,
                        prod
                    ],
                    totalPrice: Number((store.cart.totalPrice + prod.price).toFixed(2)),
                    howManyProducts: store.cart.howManyProducts + 1
                }
            }
        )
    }


    function cardMap(array) {
        const produtsMap = array.map((product, index) => {
            return (
                <Col key={index} xs={2} style={{ marginTop: "15px" }}>
                    <Card key={index} style={{ width: '12rem', textAlign: "center", margin: "5px" }}>
                        <Card.Img style={{ maxWidth: "170px", height: "180px", margin: "auto" }} variant="top" src={`http://localhost:3006/images/${product.image}`} />
                        <Card.Body>
                            <h4 className="bookTitle">{product.bookName}</h4>
                            <Card.Text classname="authorName" variant="primary">
                                {product.author.slice(0, 13)}
                            </Card.Text>
                            <Card.Text className="starsDesign">
                                <StarShow star={product.rating} />
                            </Card.Text>
                            <AddShoppingCartIcon onClick={() => onAddProd(product)} style={{ fontSize: "20px" }} />
                            <Button href={`/product/${product.id}`} variant="primary">More details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        });
        return produtsMap;
    }

    function printRow(array) {
        return <div>
            {/*className="underLine"*/}
            <Row style={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
                <h1 className="TitleClass">
                    <span className="TitleOfCards">{category}</span>
                </h1>
                <div className="see-more-container">
                    <DropdownButton as={ButtonGroup} size="sm" id="dropdown-basic-button" title="Sort-by">
                        <Dropdown.Item onClick={ratingSort}>Rating</Dropdown.Item>
                        <Dropdown.Item onClick={ratingLtH}>Price: High to Low</Dropdown.Item>
                        <Dropdown.Item onClick={ratingHtL}>Price: Low to High</Dropdown.Item>
                    </DropdownButton>
                </div>
            </Row>
            <Row >
                <Col xs={12}>
                    <CardGroup >
                        {array}
                    </CardGroup>
                </Col>
            </Row>
        </div>
    }
    return (
        <div>
            <Row>
                <img src={imgsrc} alt="Education, kid raise his hand" width="100%"></img>
                {/* <video className='VideoTag' autoPlay loop muted>
                    <source src="/cover.mp4" type='video/mp4' />
                </video> */}
            </Row>
            <Container style={{ display: loadingState ? 'block' : 'none' }}>Loading...</Container>
            <div className="Container" style={{ marginTop: "35px", display: loadingState ? 'none' : 'block' }}>
                {printRow(cardMap(topSellingSorted))}
                {/* {categoryState ?
                    printRow(activeCategoryArray) :
                    Object.values(groupProducts).map(category => {
                        return printRow(category);
                    })
                } */}
                {/* {printRow(topSellingArr)} */}
            </div>
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