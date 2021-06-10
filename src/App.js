import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DesktopNav from './components/utilComponents/DesktopNav';
import MobileBackLayout from './components/utilComponents/MobileBackLayout';
import Home from './containers/Home';
import MediaQuery from 'react-responsive';
import { Routes } from './router/config';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import ScrollToTop from './components/logicComponents/ScrollToTop';

//? configures navigation options for mobile and desktop

function App() {

  	return (
    	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<MediaQuery minDeviceWidth={769}>
			<DesktopNav/>
			<ScrollToTop/>
			<Switch> 
				<Route exact path="/" component={Home} />

				{Routes.map((route, i) => 
					<RouteWithSubRoutes key={i} {...route}/>
				)}
			</Switch>
		</MediaQuery>

		<MediaQuery maxDeviceWidth={768}>
		<ScrollToTop/>
			<Switch>
				<Route exact path="/" component={Home} />
				<MobileBackLayout/>
			</Switch>
		</MediaQuery>
    	</BrowserRouter>
  	);
}

export default App;
