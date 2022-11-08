import React from 'react';
import {BlockTitle, f7, f7ready, Link, List, ListItem, Page, Panel, View} from 'framework7-react';

const PanelLeft = () => {
    return (
    <Panel resizable right dark swipe={true} swipeOnlyClose={true}>
            <View>
                <Page>
                    <BlockTitle>Навигация</BlockTitle>
                    <List>

                        <ListItem link='/' title="Статьи" view='.view-main' panelClose/>
                        <ListItem link='/' title="Выбор города" panelOpen='left'/>
                        <ListItem link="/favorites/" title="Избранное" view='.view-main' panelClose/>
                    </List>
                </Page>
            </View>
    </Panel>
    );
};

export default PanelLeft;