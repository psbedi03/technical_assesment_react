/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export const Input = ({
    label,
    inputStyle,
    containerStyle,
    touched,
    error,
    children,
    ...props
}) => {
    return (
        <View style={containerStyle}>
            <View style={styles.labelWarp}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.errorInput}>{touched && error}</Text>
                
            </View>
           
            <TextInput
                style={[inputStyle, touched && error && styles.redBroder]}
                {...props}
            />
        
        </View>
    );
};


const styles = StyleSheet.create({
    redBroder: { borderBottomColor: 'red' },
    errorInput: {
        color: 'red',
        fontSize: 10,
    },
    errorBottomInput: {
        color: 'red',
        fontSize: 20,
        paddingLeft: 0,
    },
    labelWarp: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        color: 'blue',
    },

});
