import Login from '../components/authComponents/Login';
import Signin from '../components/authComponents/Signin';
import Cart from '../components/cartComponents/Cart';
import Home from '../components/Home';
import Product from '../components/productComponents/Product';
import OfferTemplate from '../components/templateComponents/OfferTemplate';
import NotFound from '../components/utilComponents/NotFound';


export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        private: false,
    },
    {
        path: '/signin',
        exact: true,
        component: Signin,
        private: false,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
        private: false,
    },
    {
        path: '/cart',
        exact: true,
        component: Cart,
        private: false,
    }, 
    {
        path: '/templates',
        exact: true,
        component: OfferTemplate,
        private: false,
        routes: [
            {
                path: '/templates/:productId',
                exact: true,
                component: Product,
                private: false,
            },
        ],
    }, 
    {
        component: NotFound,
    }
];