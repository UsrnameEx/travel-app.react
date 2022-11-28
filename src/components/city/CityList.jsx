import React from 'react';
import {Icon, List, ListItem} from "framework7-react";
import {UserService} from '@/api/UserService';

const CityList = ({cities}) => {
    const selectCity = async (code) => {
        await UserService.selectCity(code);
    }
    return (
        <div>
            <List className="search-list searchbar-found">
                {
                    cities.map(city =>
                        <ListItem
                            onClick={async () => {
                                await selectCity(city.code)
                            }}
                            key={city.id}
                            title={city.name}
                            link='#'
                        >
                            {
                                city.isPinned &&
                                <Icon slot="after" color='green' f7='placemark'/>
                            }
                        </ListItem>
                    )
                }
            </List>
        </div>
    );
};

export default CityList;