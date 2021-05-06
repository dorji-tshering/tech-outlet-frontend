import React from 'react';
import { NavLink, Switch, useRouteMatch } from 'react-router-dom';
import RouteWithSubRoutes from '../../router/RouteWithSubRoutes';

const OfferTemplate = ({ routes }) => {
    const match = useRouteMatch();

    return (
        <div className="offer-template">
            <p>offertemplate</p>
            
            <ul>
                <li key={`${match.url}`}><NavLink to={`${match.url}/item1`}>item</NavLink></li>
            </ul>

            <Switch>
                {routes.map(
                    (route, index) => (<RouteWithSubRoutes 
                        key={index} 
                        {...route}
                        />
                ))}
            </Switch>
            
        </div>
    )
}

export default OfferTemplate;
