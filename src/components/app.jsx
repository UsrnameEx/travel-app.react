import React, {useState, useEffect} from 'react';

import {
    f7,
    f7ready,
    App,
    View, Page, Block, Panel, ListItem, BlockTitle, List,
} from 'framework7-react';

import routes from '../js/routes';
import store from '../js/store';
import PanelLeft from '@/components/PanelLeft';

const MyApp = () => {
    const f7params = {
        name: 'Travel App',
        theme: 'auto',
        view: {
            browserHistory: true,
            browserHistorySeparator: ''
        },
        autoDarkMode: true,
        store: store,
        routes: routes,
        // Register service worker (only on production build)
        serviceWorker: process.env.NODE_ENV === 'production' ? {
            path: '/service-worker.js',
        } : {},
    };

    f7ready(() => {

    });

    return (
        <App {...f7params} >
            <Panel resizable right dark swipe={true}>
                <View>
                    <PanelLeft/>
                </View>
            </Panel>
            <View main  url="/" />
        </App>
    );
}
export default MyApp;