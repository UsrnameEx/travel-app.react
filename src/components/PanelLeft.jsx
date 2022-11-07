import React from 'react';
import {BlockTitle, List, ListItem, Page} from 'framework7-react';

const PanelLeft = () => {
    return (
        <Page>
            <BlockTitle>Навигация</BlockTitle>
            <List>
                <ListItem link="/posts/" title="Статьи" panelClose />
                <ListItem link="/postsByCities" title="Статьи по городам" panelClose />
                <ListItem link="/favorites/" title="Избранное" panelClose />
            </List>
        </Page>
    );
};

export default PanelLeft;