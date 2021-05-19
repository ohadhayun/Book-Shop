// import { Card, Button, CardDeck, Container, Row, Col, CardGroup, CardColumns } from "react-bootstrap";
// import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs"
// import './index.css';
// import ButtonBases from './fadeimage.js';


// const allProducts = [{
//     image: "https://images-na.ssl-images-amazon.com/images/I/512D7InYi7L._AC_SX184_.jpg",
//     bookName: "The Four Winds",
//     author: "Kristin Hannah",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "A Novel",
//     id:1
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:2
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:3
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:4
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:5
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:6
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:7
// },{
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:8
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/2/1603414128-022770113.jpg",
//     bookName: "SPIRIT ANIMALS FIRE & ICE",
//     author: "Someones",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more wordsss",
//     price: 35,
//     category: "Kids",
//     id:9
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/2/1603414128-022770113.jpg",
//     bookName: "SPIRIT ANIMALS FIRE & ICE",
//     author: "Someones",
//     rating: 2,
//     into: "This is the book inroduction, words words and more wordsss",
//     price: 35,
//     category: "Kids",
//     id:10
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:11
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:12
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:13
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:14
// }];
// const topSelling = [{
//     image: "https://images-na.ssl-images-amazon.com/images/I/512D7InYi7L._AC_SX184_.jpg",
//     bookName: "The Four Winds",
//     author: "Kristin Hannah",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "A Novel",
//     id:1
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:2
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:3
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:4
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:5
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:6
// },
// {
//     image: "https://images-na.ssl-images-amazon.com/images/I/51iM9HjvT3L._AC_SX184_.jpg",
//     bookName: "Keep Sharp: Build a Better Brain at Any Age",
//     author: "Sanjay Gupta M.D",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 20,
//     category: "A Novel",
//     id:7
// },
// ];

// const productsArr = [{
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:8
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/2/1603414128-022770113.jpg",
//     bookName: "SPIRIT ANIMALS FIRE & ICE",
//     author: "Someones",
//     rating: 4.5,
//     into: "This is the book inroduction, words words and more wordsss",
//     price: 35,
//     category: "Kids",
//     id:9
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/2/1603414128-022770113.jpg",
//     bookName: "SPIRIT ANIMALS FIRE & ICE",
//     author: "Someones",
//     rating: 2,
//     into: "This is the book inroduction, words words and more wordsss",
//     price: 35,
//     category: "Kids",
//     id:10
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:11
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:12
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:13
// },
// {
//     image: "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1607042909-010073925.jpg",
//     bookName: "Thinking well",
//     author: "Yehudit Kats",
//     rating: 3.5,
//     into: "This is the book inroduction, words words and more words",
//     price: 40,
//     category: "Power",
//     id:14
// }];

// function onMouse(that) {
//     <Button type="button" className="button-actions btn-addtocart" tabIndex="-1"></Button>
// }

// function cardMap(array) {
//     const produtsMap = array.map((product, index) => {
//         return index < 6 ? (
//             <Card  key={index} style={{ width: '189px', textAlign: "center", margin: "5px" }}>
//                 <Card.Img onMouseEnter={() =>  onMouse(this)} style={{ maxWidth: "170px", height: "180px", margin: "auto" }} variant="top" src={product.image}> 
//                 </Card.Img>
                
//                 <Card.Body>
//                     <h4 className="bookTitle">{product.bookName}</h4>
//                     <Card.Text variant="primary">
//                         {product.author}
//                     </Card.Text>
//                     <Card.Text className="starsDesign">
//                         <StarShow star={product.rating} />
//                     </Card.Text>
//                     <Button href={`product/${product.id}`} variant="primary">Add to cart</Button>
//                 </Card.Body>
//             </Card>
//         ) : (<></>)
//     });
//     return produtsMap;
// }

// function MainPage(props) {

//     const topSellingArr = cardMap(topSelling)
//     const produtsMap = cardMap(productsArr);
//     function printRow(array, unMappedArray) {
//         return <div>
//             <Row className="underLine" style={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
//                 <h1 className="TitleClass">
//                     <span className="TitleOfCards">{unMappedArray[1].category}</span>
//                 </h1>
//                 <div className="see-more-container">
//                     <a aria-label="See more Top-Selling Books" className="seeMore" href="">
//                         See more
//                     </a>
//                 </div>

//             </Row>
//             <Row style={{ display: "flex", justifyContent: "center" }}>
//                 <CardGroup >
//                     {array}
//                 </CardGroup>

//             </Row>
//         </div>
//     }
//     return (
//         <div>

//             <Row>
//                 <img src="risehandbook.jpg" alt="Education, kid raise his hand" width="100%"></img>
//                 {/* <video className='VideoTag' autoPlay loop muted>
//                     <source src="/cover.mp4" type='video/mp4' />
//                 </video> */}
//             </Row>
//             <Row>
//                 <ButtonBases style={{border: "2px solid grey", borderColor: "rgb(187, 187, 187)"}} />
//             </Row>
//             <div className="Container">
//                 {printRow(topSellingArr, topSelling)}
//                 {printRow(produtsMap, productsArr)}
//             </div>
//         </div>
//     )
// }


// function StarShow(props) {
//     const stars = [];
//     const halfStar = props.star % 1;
//     let i = 0;
//     for (; i < Math.floor(props.star); i++) {
//         stars.push(<BsStarFill key={i} style={{ display: "inline-block" }} />)
//     }
//     if (halfStar) {
//         stars.push(<BsStarHalf key={i} style={{ display: "inline-block" }} />)
//         i++;
//     }
//     for (; i < 5; i++) {
//         stars.push(<BsStar key={i} style={{ display: "inline-block" }} />);
//     }
//     return stars;
// }

// export default MainPage;

