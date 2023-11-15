import { Routes, Route } from 'react-router-dom'
import About from '../AboptPage/AboutComponent';
import Products from '../ProductPage/ProductsComponent';
import HomePage from '../HomePage/App';
import Testemonials from '../TestemonialsPage/TestemonialsComponent';
import ContactPage from '../ContactUsPage/App'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testemonials />} />
            <Route path="/contactUs" element={<ContactPage />} />
        </Routes>
    )
}