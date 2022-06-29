import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Routes/Home.js';
import ErrorPage from './Routes/ErrorPage';
import Tax from './Routes/Tax.js';
import Data from './Routes/Data.js';
import DataDetail from './Routes/DataDetail.js';
// import Contact from './Routes/Contact';
import SignIn from './Routes/SignIn';
import SignUp from './Routes/SignUp';
import ForgetPassword from './Routes/ForgetPassword';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import MyPage from './Routes/MyPage';

function App() {
  useEffect(() => {
    console.log('use effect test');
  }, [])
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/tax_calculation" element = {<Tax />} />
        <Route path = "/tax_calculation/:price" element = {<Tax />} />
        <Route path = "/transaction_data" element = {<Data />} />
        <Route path = "/transaction_data/:idf_num/:year" element = {<DataDetail />} />
        {/* <Route path = "/contact_us" element = {<Contact />} /> */}
        <Route path = "/sign_in" element = {<SignIn />} />
        <Route path = "/sign_up" element = {<SignUp />} />
        <Route path = "/my_page" element = {<MyPage />} />
        <Route path = "/forget_password" element = {<ForgetPassword />} />
        <Route path = "*" element = {<ErrorPage />} /> 
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
