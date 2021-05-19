import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom"
import { GiBookshelf } from "react-icons/gi";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useForm } from "react-hook-form";

// import SideBar from "../../layout/Sidebar/sidebar.js";
// import {Navigation} from 'react-minimal-side-navigation';
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
// import { allProducts } from '../allProductsService'
import * as apiFunctions from '../../API/api'


import './index.css'
import { StoreContext } from "../../Context/Store";


function Header({ numberOfProducts }) {
    const [cartNumItems, setCartNumItems] = useState(numberOfProducts); //shoppingcart number of items
    const [store, updateStore] = useContext(StoreContext)
    // shopping cart icon
    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }))(Badge); // untill here

    const [allProducts, setAllProducts] = useState([]);
    useEffect(async () => {
        const apiArrayProducts = await apiFunctions.getAll('books');
        setAllProducts(apiArrayProducts.data);
    }, []);

    let groupProducts = allProducts.reduce((r, a) => {
        r[a.category] = [...r[a.category] || [], a];
        return r;
    }, {});

    // searching section
    const { register, handleSubmit } = useForm();
    const [dataSearch, setDataSearch] = useState("");
    const onSubmit = async (data) => {
        // console.log(data.search);
        setDataSearch(data.search);
        // try {
        //     const sendToServer = await apiFunctions.searchingByKey(data.search)
        //     console.log(sendToServer);

        // }
        // catch (error) {
        //     console.log(error);
        // };
    }

    return (
        <Navbar sticky="top" className="Header" bg="primary" expand="lg" >
            <Navbar.Brand href="/home"> <GiBookshelf style={{ fontSize: "40px" }} /></Navbar.Brand>
            <Navbar.Brand href="/home">Book-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <Nav.Link><Link className="hrefTag" to="/home">Home</Link></Nav.Link>
                    <Nav.Link ><Link className="hrefTag" to="/aboutUs">About Us</Link></Nav.Link>
                    
                    <Nav.Link><Link className="hrefTag" to="/blog">Blog</Link></Nav.Link>

                    <NavDropdown className="hrefTag" title="All Categorys" id="basic-nav-dropdown">
                        {Object.keys(groupProducts).map((subject, index) => {
                            return <NavDropdown.Item key={index}><Link className="hrefTag" to={`/seeMoreProducts/${subject}`}>{subject}</Link></NavDropdown.Item>
                        })}
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={store.cart.howManyProducts} color="secondary">
                            <Nav.Link color="secondary"><Link className="hrefTag" to="/cart"><ShoppingCartIcon style={{ fontSize: "32px" }} /></Link></Nav.Link>
                        </StyledBadge>
                    </IconButton>
                    {/* <Nav.Link color="secondary" href="cart"><AiOutlineShoppingCart style={{ fontSize: "32px" }} /></Nav.Link> */}
                </Nav>

                <Nav.Link><Link className="hrefTag" to="/FormPage">Login</Link></Nav.Link>/
                <Nav.Link><Link className="hrefTag" to="/register">Register</Link></Nav.Link>
                <Form inline onChange={handleSubmit(onSubmit)}>
                    <FormControl name="search" ref={register} type="text" placeholder="Search" className="mr-sm-2" />
                    <Link to={`/search/${dataSearch}`}>
                        <Button type="submit" variant="outline-light">Search</Button>
                    </Link>
                </Form>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

// function ReactForm() {
//   const { register, handleSubmit, watch, errors } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("exampleRequired")); // watch input value by passing the name of it

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="example" defaultValue="test"  ref={register} />
//       <input name="exampleRequired" ref={register({ required: true })} />
//       {errors.exampleRequired && <span>This field is required</span>}
//       <input type="submit" />
//     </form>
//   );
// }
// export default ReactForm;