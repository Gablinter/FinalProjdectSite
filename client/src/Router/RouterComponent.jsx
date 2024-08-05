import { Routes, Route, useNavigate } from 'react-router-dom'
import About from '../AboptPage/AboutComponent';
import Products from '../ProductPage/ProductsComponent';
import HomePage from '../HomePage/App';
import Testemonials from '../TestemonialsPage/TestemonialsComponent';
import ContactPage from '../ContactUsPage/App'
import LoginPage from '../LoginPage/LoginPageComponent'
import ReadMore from '../../pages/readMorePage';
import Tickets from '../TicketPage/TicketCompontent';
import RegisterPage from '../RegisterPage/App'
import CartPage from '../CartPage/App';
import NotFound from '../404Page/App';
import AuthGuard from "../guards/AuthGuard";
import LoginGuard from "../guards/LoginGuard";

export default function App() {





    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testemonials />} />
            <Route path="/contactUs" element={<ContactPage />} />
            <Route path="/readMore" element={<ReadMore />} />
            <Route path="/tickets" element={<AuthGuard> <Tickets /></AuthGuard>} />
            <Route path="/users/login" element={<LoginGuard><LoginPage /> </LoginGuard>} />
            <Route path="/users/register" element={<LoginGuard><RegisterPage /> </LoginGuard>} />
            <Route path="/cartPage" element={<AuthGuard> <CartPage /></AuthGuard>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

