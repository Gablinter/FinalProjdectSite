import { Routes, Route, useNavigate } from 'react-router-dom'
import About from '../AboptPage/AboutComponent';
import Products from '../ProductPage/ProductsComponent';
import HomePage from '../HomePage/App';
import Testemonials from '../TestemonialsPage/TestemonialsComponent';
import ContactPage from '../ContactUsPage/App'
import LoginPage from '../LoginPage/LoginPageComponent'
import ReadMore from '../../pages/readMorePage';
import RegisterPage from '../RegisterPage/App'
import CartPage from '../CartPage/App';
import NotFound from '../404Page/App';
//  import { useEffect, useState } from 'react';
// import { useCookies } from "react-cookie";
// import { useEffect, useState } from 'react';

export default function App() {


    


    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testemonials />} />
            <Route path="/contactUs" element={<ContactPage />} />
            <Route path="/readMore" element={<ReadMore />} />
            <Route path="/users/login" element={<LoginPage />} />
            <Route path="/users/register" element={<RegisterPage />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

