import Footer from '../../components/HomePageComponents/Footer'
import FeatureWatches from '../../components/ProductsPageComponents/Feature WatchesSection'
import Header from '../../components/ProductsPageComponents/Header'
import InfoSection from '../../components/ProductsPageComponents/InfoSection'
import NewArrivals from '../../components/ProductsPageComponents/NewArrivalsSection'
import Product from '../../components/ProductsPageComponents/ProductsSection'


export default function Products() {
    return (
        <div>
            <Header />
            <Product />
            <FeatureWatches />
            <NewArrivals />
            <InfoSection />
            <Footer />
        </div>
    )
}