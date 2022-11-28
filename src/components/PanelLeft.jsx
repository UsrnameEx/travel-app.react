import React, {useState} from 'react';
import {List, ListItem, Page, Panel, Searchbar, View} from 'framework7-react';
import CityList from '@/components/city/CityList';

const PanelLeft = () => {
    const [cities, setCities] = useState([
        {id: 1, name: 'Ялта', code: 'yalta', isPinned: true},
        {id: 2, name: 'Севастополь', code: 'sevastopol',},
        {id: 3, name: 'Евпатория', code: 'evpatoria',},
        {id: 4, name: 'Симферополь', code: 'simferopol',}
    ]);

    return (
        <div>
            <Panel resizable left dark swipe={true} swipeOnlyClose={true}>
                <View>
                    <Page name='CitiesPage'>
                        <Searchbar
                            searchContainer=".search-list"
                            searchIn=".item-title"
                            disableButton={false}
                        ></Searchbar>
                        <List className='searchbar-not-found'>
                            <ListItem title='Ничего не найдено'></ListItem>
                        </List>
                        <CityList cities={cities}/>
                    </Page>
                </View>
            </Panel>
        </div>
    );
};

export default PanelLeft;