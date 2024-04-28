import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const Header = React.lazy(() => import('../components/Header'));
const Footer = React.lazy(() => import('../components/Footer'));
const Home = React.lazy(() => import('../components/Home'));
const Shop = React.lazy(() => import('../components/Shop'));
const Cart = React.lazy(() => import('../components/Cart'));
const CustomerOrder = React.lazy(() => import('../components/CustomerOrders'));
const Checkout = React.lazy(() => import('../components/Checkout'));

const AppRouter = () => {


  return (

    <BrowserRouter basename="/react-app-e-commerce-unbranded-club">

      <div className="application-container">

        <div className="app-header-container">
          
            <Header />
          
        </div>

        <div className="application-pages-containers">

          <Suspense fallback={<Loading />}>

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/latestorder" element={<CustomerOrder />} />

            </Routes>
            
          </Suspense>

        </div>

        <div className="app-footer-container">

          
            <Footer />
          

        </div>

      </div>

    </BrowserRouter>
  );
};

export default AppRouter;
