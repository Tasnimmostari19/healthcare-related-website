
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import PatientsInfo from './Components/PatientsInfo/PatientsInfo';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/servicedetails/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/shop'>
              <Shop></Shop>
            </PrivateRoute>

            <PrivateRoute path='/patientsinfo'>
              <PatientsInfo></PatientsInfo>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
