import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SubTitle = ({title}) => (
    <View>
        <Text style = {Styles.subTitleText}>{title}</Text>
    </View>
);

const Styles = StyleSheet.create({
    subTitleText : {
        color: "#ffdd4f",
        fontSize: 18,
        fontWeight : 'bold',
    }
});

export default SubTitle;