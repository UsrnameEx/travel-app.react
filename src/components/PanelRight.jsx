import React from 'react';
import {BlockTitle, List, ListItem, Page, Panel, View} from 'framework7-react';

const PanelLeft = () => {
    return (
        <Panel resizable right dark swipe={true} swipeOnlyClose={true}>
            <View>
                <Page>
                    <BlockTitle>Навигация</BlockTitle>
                    <List>
                        <ListItem link='/' title="Статьи" view='.view-main' panelClose/>
                        <ListItem link='/' title="Выбор города" panelOpen='left'/>
                        <ListItem link="/tours" title="Туры" view='.view-main' panelClose/>
                    </List>
                </Page>
            </View>
        </Panel>
    );
};

export default PanelLeft;