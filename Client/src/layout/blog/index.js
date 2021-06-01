import { useState, useEffect } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Loading from '../loading/Loading'
import * as apiFunctions from '../../API/api'
import './index.css';

function Blog() {

    async function loadPosts() {
        const response = await apiFunctions.getAll('blog');
        return response.data;
    }

    const [loadingState, setLoadingState] = useState(true);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        loadPosts().then((data) => {
            setLoadingState(false);
            setPosts(data);
        })
    }, [])

    function mapBlog(array) {

        const allCards = array.map((cardBlog, index) => {
            return (
                <Col lg={4} key={index} style={{ marginBottom: "1rem" }}>
                    <Card>
                        <Card.Body>
                            <Card.Img className="Image" variant="top" src={`http://localhost:3006/images/${cardBlog.img}`}>

                            </Card.Img>
                            <Card.Title className="text">{cardBlog.title} ..</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{cardBlog.data}</Card.Subtitle>
                            <Card.Text className="text">
                                {cardBlog.article}...
                        </Card.Text>
                            <Card.Link target="_blank" href={cardBlog.link}>Go to full report.</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>);
        })
        return allCards;
    }

    return (
        <div>
            <Container style={{ display: loadingState ? 'block' : 'none' }}><Loading /></Container>
            <Container style={{ display: loadingState ? 'none' : 'block' }}>
                <Row className='justify-content-center' style={{ margin: "20px" }}>
                    <img src="blog.jpg" alt="blog" width="100%"></img>
                </Row>
                <h4 style={{ margin: "2rem" }}>Welcome to our blog, here you can find all kinds of articles.</h4>
                <Row>
                    {mapBlog(posts)}
                </Row>
            </Container>
        </div>
    )

}

export default Blog;





