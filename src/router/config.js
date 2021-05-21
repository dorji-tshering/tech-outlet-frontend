import Login from '../components/authComponents/Login';
import Signin from '../components/authComponents/Signin';
import Cart from '../components/cartComponents/Cart';
import Offer from '../containers/Offer';
import Product from '../components/productComponents/Product';
import NotFound from '../components/utilComponents/NotFound';
import Category from '../containers/Category';
import SubCategory from '../containers/SubCategory';
import Deal from '../containers/Deal';


export const Routes = [
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
		path: '/offers/:offerId',
		exact: true,
		component: Offer,
		private: false,
	}, 
	{
		path: '/offers/:offerId/:productId',
		exact: true,
		component: Product,
		private: false,
	},
	{
		path: '/category/:categoryId',
		exact: true,
		component: Category,
		private: false,
	},
	{
		path: '/category/:categoryId/:subCateId',
		exact: true,
		component: SubCategory,
		private: false,
	},
	{
		path: '/category/:categoryId/:subCateId/:productId',
		exact: true,
		component: Product,
		private: false,
	},
	{
		path: '/product/:productId',
		exact: true,
		component: Product,
		private: false,
	},
	{
		path: '/deals/:dealId',
		exact: true,
		component: Deal,
		private: false,
	},
	{
		component: NotFound,
	}
];