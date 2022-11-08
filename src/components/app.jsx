import React from 'react';

import {
    App,
    View, Panel, Page, BlockTitle, List, ListItem, f7ready, f7,
} from 'framework7-react';

import routes from '../js/routes';
//import store from '../js/store';
import PanelRight from '@/components/PanelRight';
import PanelLeft from "@/components/PanelLeft";

const MyApp = () => {
    const f7params = {
        name: 'Travel App',
        theme: 'auto',
        view: {
            browserHistory: true,
            browserHistorySeparator: ''
        },
        autoDarkMode: true,
        //store: store,
        routes: routes,
        serviceWorker: process.env.NODE_ENV === 'production' ? {
            path: '/service-worker.js',
        } : {},
    };

    return (
        <App {...f7params} >
            <PanelLeft/>
            <PanelRight/>
            <View main url="/"/>
        </App>
    );
}
export default MyApp;