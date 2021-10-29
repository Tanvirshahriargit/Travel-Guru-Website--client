import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import BookingServices from './component/Home/BookingServices/BookingServices';
import About from './component/Home/About/About';
import ContactUs from './component/Home/ContactUs/ContactUs';
import Login from './component/LogIn/Login/Login';
import CustomerOrders from './component/LogIn/CustomerOrders/CustomerOrders';
import AddService from './component/LogIn/AddService/AddService';
import ManageAllOrders from './component/LogIn/ManageAllOrders/ManageAllOrders';
import Footer from './component/Shared/Footer/Footer';
import Headers from './component/Shared/Headers/Headers';
import BookingInformation from './component/Home/BookingInformation/BookingInformation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path ="/home">
          <Home></Home>
          </Route>
          <Route path ="/booking/:id">
          <BookingInformation></BookingInformation>
          </Route>
          <Route path ="/about">
          <About></About>
          </Route>
          <Route path ="/contact">
          <ContactUs></ContactUs>
          </Route>
          <Route path ="/login">
          <Login></Login>
          </Route>
          <Route path ="/myorders">
          <CustomerOrders></CustomerOrders>
          </Route>
          <Route path ="/addservice">
          <AddService></AddService>
          </Route>
          <Route path ="/manageorders">
          <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
