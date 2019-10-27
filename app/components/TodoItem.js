import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {AntDesign, FontAwesome} from "@expo/vector-icons";

const TodoItem = ({ text, isComplete, changeComplete, deleteItem }) => (
    <View style = {Styles.todoContainer}>
        <View style = {Styles.lineContainer}>
            <View style = {Styles.makerow}>
                <TouchableOpacity onPress={changeComplete}>
                    <AntDesign name={isComplete?"checkcircleo":"checkcircle"} size={20} styles={Styles.checkbtn}/>
                </TouchableOpacity>
                <Text style={Styles.todoItem}>{text}</Text>
            </View>
            <TouchableOpacity onPress={deleteItem}>
                <AntDesign name="closecircle" size={20}/>
            </TouchableOpacity>
        </View>
    </View>
);

const {width,height} = Dimensions.get('window');

const Styles = StyleSheet.create({
    todoContainer: {
        padding: 5,
        marginTop:20,
        borderBottomWidth: 1,
        width: width-40,
    },
    todoItem: {
        fontSize: 20,
    },
    lineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    checkbtn: {
        marginRight : 20,
    },
    makerow: {
        flexDirection: 'row',
    }
});

export default TodoItem;