import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles  from './styles';
import propTypes from 'prop-types';

const Header = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image resizeMode='contain' style={styles.icon} source={require('./images/gear.png')} />
        </TouchableOpacity>
    </View>
);

Header.propTypes = ({
    onPress: propTypes.func
});

export default Header;