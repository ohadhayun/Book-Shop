import { Card, Button, CardDeck, Container, Row, Col, CardGroup, CardColumns } from "react-bootstrap";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs"
import ButtonBases from './fadeimage.js';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as apiFunctions from '../../API/api'
import './index.css';
import CardComp from "./cardComponent"
// for rolling 1-10
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { StoreContext } from '../../Context/Store';
// untill here

// for rolling 1-10
const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));// untill here


function MainPage() {

    // for rolling 1-10
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [store, updateStore] = useContext(StoreContext);
    const handleChange = (event, value) => {
        setPage(value);
    };
    // untill here

    const onAddProd = (prod) => {
        updateStore(
            {
                ...store,
                cart: {
                    ...store.cart,
                    productsArr: [
                        ...store.cart.productsArr,
                        prod,
                        // {product: prod, time:Date.now()}
                    ],
                    totalPrice: Number((store.cart.totalPrice + prod.price).toFixed(2)),
                    howManyProducts: store.cart.howManyProducts + 1
                }
            }
        )
    }

    {/* <CrdItem onAddToCart = () => updateBadge() */ }
    function cardMap(array, isLimit) {
        const produtsMap = array.map((product, index) => {
            return index < 6 ? (
                <CardComp product={product} index={index} onAddToCart={onAddProd} />
            ) : (<></>)
        });
        return produtsMap;
    }

    const [allProducts, setAllProducts] = useState([]);
    useEffect(async () => {
        const apiArrayProducts = await apiFunctions.getAll('books');
        let groupProducts = apiArrayProducts.data.reduce((r, a) => {
            r[a.category] = [...r[a.category] || [], a];
            return r;
        }, {});
        setAllProducts(groupProducts);
    }, []);

    const cardsCount = Math.ceil(Object.keys(allProducts).length / 3);
    const [categoryState, setCategoryState] = useState(false);
    const [activeCategoryArray, setActiveCategoryArray] = useState([]);

    function printRow(array, isLimit) {
        return <div>
            <Row className="underLine" style={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
                <h1 className="TitleClass">
                    <span className="TitleOfCards">{array[0].category}</span>
                </h1>
                <div className="see-more-container">
                    <Link to={`/seeMoreProducts/${array[0].category}`} style={{ color: "#1a02ee" }} aria-label="See more Top-Selling Books" className="seeMore">
                        See more
                    </Link>
                </div>
            </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
                <CardGroup >
                    {cardMap(array, isLimit)}
                </CardGroup>
            </Row>
        </div>
    }

    return (
        <div>
            <Row>
                <a href="#section1" style={{ width: "100%" }}>
                    <img src="risehandbook.jpg" alt="Education, kid raise his hand" width="100%"></img>
                </a>
                {/* <a href="#section1" style={{ width: "100%" }}>
                    <video className='VideoTag' autoPlay loop muted>
                        <source src="/cover.mp4" type='video/mp4' />
                    </video>
                </a> */}
            </Row>
            <Row id="section1">
                <ButtonBases style={{ border: "2px solid grey", borderColor: "rgb(187, 187, 187)" }} />
            </Row>
            <div className="Container">
                {categoryState ?
                    printRow(activeCategoryArray, false) :
                    Object.values(allProducts).slice(page * 3 - 3, page * 3).map(category => {
                        return printRow(category, true);
                    })
                }
            </div>
            <Container className={classes.root}>
                <Row className="justify-content-md-center">
                    {/* <Col></Col>
                    <Col> */}
                    <Typography>Page: {page}</Typography>
                    <Pagination count={cardsCount} page={page} onChange={handleChange} />
                    {/* </Col>
                    <Col></Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default MainPage;