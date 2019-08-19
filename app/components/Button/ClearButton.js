import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import propTypes from 'prop-types';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <ImageBackground resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.propTypes = {
    text: propTypes.string,
    onPress: propTypes.func,
};

export default ClearButton;