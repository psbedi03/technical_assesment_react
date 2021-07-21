/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, ScrollView, useColorScheme, StyleSheet, View, Button } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = ({ navigation, route }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    {
                        route.params &&
                        (
                            <View >
                                <Text> Welcome {route.params.first_name} {route.params.last_name}</Text>
                            </View>
                        )
                    }

                    <Button title={'List Species'} onPress={() => navigation.navigate('Spices')} />
                    {
                        !route.params &&
                        <Button title={'Log In'} onPress={() => navigation.navigate('Login')} />
                    }


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default HomeScreen;