import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({value,changeText,addTodo}) => (
    <TextInput 
        value={value}
        style={Styles.input}
        placeholder={"오늘의 할 일"}
        maxLength={30}
        onChangeText={changeText}
        onEndEditing={addTodo}
        returnKeyType="done"/>
);

const Styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop: 15,
        paddingBottom: 15,
    },
});

export default Input;