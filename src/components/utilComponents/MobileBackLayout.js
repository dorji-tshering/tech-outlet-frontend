import React from 'react';
import { Switch } from 'react-router';
import GoBack from './GoBack';
import { Routes } from '../../router/config';
import RouteWithSubRoutes from '../../router/RouteWithSubRoutes';

const MobileBackLayout = () => {

        return (
                <div className="mb-layout">
                        <GoBack/>
                        <Switch>
                                {Routes.map((route, i) => 
                                        <RouteWithSubRoutes key={i} {...route}/>
                                )}
                        </Switch>
                </div>
        );
}

export default MobileBackLayout;
