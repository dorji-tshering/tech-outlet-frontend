import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import { routes } from './router/config';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';

function App() {
  return (
    <BrowserRouter>
    <Switch>
        {routes.map((route, index) => 
            <RouteWithSubRoutes key={index} {...route} />)
        }
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
