import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home/Home';
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

          <PrivateRoute path="/dashboard/book">
            <Book />
          </PrivateRoute>

          <PrivateRoute path="/bookings">
            <BookingList />
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          
          <PrivateRoute path="/order">
            <OrderedList />
          </PrivateRoute>

          <PrivateRoute path="/product">
            <AddService />
          </PrivateRoute>
          
          <PrivateRoute path="/manage">
            <ManageProducts />
          </PrivateRoute>

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
