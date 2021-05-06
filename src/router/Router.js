import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Router = ({ routes }) => {
    return (
      <Switch>
        {
            routes && routes.map((route, index) => 
            <RouteWithSubRoutes key={index} {...route}/>)
        }
      </Switch> 
    );
}

export default Router;
