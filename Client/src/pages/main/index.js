import Header from "../../layout/header";
import Footer from "../../layout/footer/index";
import ProductPage from "../../layout/ProductPage";
import MainPage from "../../layout/MainPage";
import AboutUs from "../../layout/AboutUs";
import SeeMoreProducts from "../../layout/SeeMoreProducts";
import LogIn from "../../layout/login";
import Register from "../../layout/register";
import ShoppingCart from "../../layout/cart";
import Blog from "../../layout/blog";
import Admin from "../../layout/admin";
import Search from "../../layout/Search/index";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ContactUs from "../../layout/ContactUs/contactUs";
import ScrollToTop from '../../layout/ScrollToTop/scroll'

// import YourComponent from '../../layout/cart/PayPal/paypal'

// import SideBar from "../../layout/Sidebar/sidebar";


function Main() {
    // nahar explenation- useContext
    const onAddProd = (prod) => {

    }
    //counting cart items
    // function onNumberOfProducts(){
    //     console.log('main page')
    //     setNumberOfProducts(prev => prev+1)
    // }
    // const [numberOfProducts, setNumberOfProducts] = useState(0)
    return (
        <div className="Main" style={{ backgroundImage: "paper.gif" }}>

            {/* <SideBar /> */}
            <BrowserRouter>
                <ScrollToTop>
                    {/* numberOfProducts={numberOfProducts} */}
                    <Header />
                    <Switch>
                        <Route path="/home" exact component={() => <MainPage />} />
                        <Route path="/seeMoreProducts/:category" exact component={SeeMoreProducts} />
                        <Route path="/FormPage" exact component={LogIn} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/aboutUs" exact component={AboutUs} />
                        <Route path="/product/:id" exact component={ProductPage} />
                        <Route path="/cart" exact component={ShoppingCart} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/admin" exact component={Admin} />
                        <Route path="/search/:searchedWord" exact component={Search} />
                        <Route path="/contactUs" exact component={ContactUs} />
                        {/* <Route path="/YourComponent" exact component={YourComponent} /> */}
                        <Route path="/" component={() => <MainPage />} />
                        {/* <Route path="/buttonBases" exact component={ButtonBases} /> */}
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>

        </div>
    );
}

export default Main;