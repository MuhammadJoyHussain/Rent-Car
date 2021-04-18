import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home/Home';
import About from './Components/About/About/About';
import Review from './Components/Dashboard/Review/Review';
import Book from './Components/Dashboard/Book/Book';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddService from './Components/Admin/AddService/AddService';
import OrderedList from './Components/Admin/OrderedList/OrderedList';
import ManageProducts from './Components/Admin/ManageProducts/ManageProducts';
import Admin from './Components/Dashboard/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/dashboard/book">
            <Book />
          </Route>

          <Route path="/bookings">
            <BookingList />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
          
          <PrivateRoute path="/order">
            <OrderedList />
          </PrivateRoute>

          <Route path="/product">
            <AddService />
          </Route>
          
          <Route path="/manage">
            <ManageProducts />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
