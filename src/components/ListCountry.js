import React, { Component } from 'react';
import {
    List, ListItem, Body, Text
} from 'native-base';

class ListCountry extends Component {
    render() {
        const { name, rate } = this.props.country;

        return (
            <List>
                <ListItem avatar>
                    <Body>
                        <Text>{name}</Text>
                        <Text>Avaliação: {rate}</Text>
                    </Body>
                </ListItem>
            </List>
        );
    }
}

export default ListCountry;
