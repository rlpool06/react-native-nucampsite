import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS,
        }
    }
    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
            <ScrollView>
                
            </ScrollView>
        );
    }
}

export default About;