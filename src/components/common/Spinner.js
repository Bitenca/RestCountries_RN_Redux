import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.SpinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
            <Text>Carregando..</Text>
        </View>
    );
};

const styles = {
    SpinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50%'
    }
};

export { Spinner };
