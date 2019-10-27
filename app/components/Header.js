import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => ( 
    <View style = {Styles.headerContainer}>
        <Text style = {Styles.headerText}>미루_지마</Text>
    </View>
);

const Styles = StyleSheet.create({
    headerContainer: {
        marginTop: 70,
        marginBottom:40,
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3f4e66',
    },
});

export default Header;