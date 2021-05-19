import React, { useState, useEffect, useContext } from "react";
import { Card, Button, CardDeck, Container, Row, Col, CardGroup, CardColumns, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs"
import { useParams } from "react-router-dom";
// import { allProducts } from '../allProductsService'
import * as apiFunctions from "../../API/api"
import imgsrc from "./risehandbook.jpg"
import './index.css';
import {StoreContext} from '../../Context/Store';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


// import CardComp from "./cardComponent"


// let groupProducts = allProducts.reduce((r, a) => {
//     r[a.category] = [...r[a.category] || [], a];
//     return r;
// }, {});
// console.log(allProducts);
// console.log(groupProducts);

const topSelling = [{
    image: "https://images-na.ssl-images-amazon.com/images/I/512D7InYi7L._AC_SX184_.jpg",
    bookName: "The Four Winds",
    author: "Kristin Hannah",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 40,
    category: "A Novel"
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 3.5,
    into: "This is the book inroduction, words words and more words",
    price: 30,
    category: "A Novel"
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 1.5,
    into: "This is the book inroduction, words words and more words",
    price: 35,
    category: "A Novel"
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D 100",
    rating: 5,
    into: "This is the book inroduction, words words and more words",
    price: 100,
    category: "A Novel"
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D 2",
    rating: 2,
    into: "This is the book inroduction, words words and more words",
    price: 2,
    category: "A Novel"
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 20,
    category: "A Novel"
},
{
    image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
    bookName: "Keep Sharp: Build a Better Brain at Any Age",
    author: "Sanjay Gupta M.D",
    rating: 4.5,
    into: "This is the book inroduction, words words and more words",
    price: 20,
    category: "A Novel"
},
{
    image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/2/1603414128-022770113.jpg",
    bookName: "SPIRIT ANIMALS FIRE & ICE",
    author: "Someones",
    rating: 4.5,
    into: "This is the book inroduction, words words and more wordsss",
    price: 35,
    category: "Kids"
},
{
    image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/2/1603414128-022770113.jpg",
    bookName: "SPIRIT ANIMALS FIRE & ICE",
    author: "Someones",
    rating: 2,
    into: "This is the book inroduction, words words and more wordsss",
    price: 35,
    category: "Kids"
},
{
    image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
    bookName: "Thinking well",
    author: "Yehudit Kats",
    rating: 3.5,
    into: "This is the book inroduction, words words and more words",
    price: 40,
    category: "Power"
}
];


function SeeMoreProducts(props) {
    let { category } = useParams();
    const [loadingState, setLoadingState] = useState(true);

    const [allProducts, setAllProducts] = useState([]);
    useEffect(async () => {
        const apiArrayProducts = await apiFunctions.getAll('books');
        // console.log(apiArrayProducts.data);
        setAllProducts(apiArrayProducts.data);
        setLoadingState(false);
        let booksArray = apiArrayProducts.data.filter((book) => {
            return category === book.category;
        });
        setCards(booksArray);
        console.log(booksArray);
    }, []);

    // rerendering the products with no need to go to the server and get the products each reander
    useEffect(() => {
        let booksArray1 = allProducts.filter((book) => {
            return category === book.category;
        });
        setCards(booksArray1);
    }, [category])

    // console.log(allProducts);

    

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

    // const topSellingArr = cardMap(topSellingSorted)

    // adding to cart
    const [store, updateStore] = useContext(StoreContext);

    const onAddProd = (prod) =>{
        updateStore(
            {
          ...store,
          cart:{
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
                        <AddShoppingCartIcon onClick={() => onAddProd(product)} style={{fontSize: "20px"}} />
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