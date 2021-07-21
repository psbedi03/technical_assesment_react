/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Detail = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.desc}>
                    {route.params.data.desc}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    desc: {
        fontSize: 17,
        lineHeight: 30,
        letterSpacing: 2,
    },
});
export default Detail;
