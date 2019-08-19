import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connectAlert } from '../components/Alert';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'


import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {

    static propTypes = {
        navigation: propTypes.object,
        alertWithType: propTypes.func,
    }

    handleThemePress = () => {
        this.props.navigation.navigate('Themes');
    };

    handleSitePress = () => {
       Linking.openURL('httpaaas://dev.hellenferrari.com').catch(() => this.props.alertWithType('error', 'Sorry!', `This site can't be opened right now` )); 
    }
    render() {
        return (
            <ScrollView>
                <StatusBar barStyle='default' translucent={false} />
                <ListItem 
                    text='Themes' 
                    onPress={this.handleThemePress}
                    customIcon={
                        <FontAwesomeIcon icon={ faArrowRight}  />
                        // <Ionicons name="ios-arrow-forward" color={ICON_COLOR} size={ICON_SIZE}/>
                    }
                />
                <Separator />
                <ListItem 
                    text='Fixer.io'
                    onPress={this.handleSitePress}
                    customIcon={
                        <FontAwesomeIcon icon={ faLink }  />
                        // <Ionicons name="ios-link" color={ICON_COLOR} size={ICON_SIZE}/>
                    }   
                />
            </ScrollView>
        )
    }
}

export default connectAlert(Options);