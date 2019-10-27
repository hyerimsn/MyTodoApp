import React from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/InputBox';
import TodoItem from './app/components/TodoItem';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue: "",
      todos: [
        {
          title : "하기싫어",
        },
        {
          title : "와아악",
        },
      ]
    };
  };

componentWillMount(){
  this.getData()
};

  storeData = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state));
  };

  getData = () => {
    AsyncStorage.getItem('@todo:state').then((state)=> {
      if (state !== null) {
        this.setState(JSON.parse(state));
      }
    })
  };

  _makeTodoItem = ({ item, index }) => {
    return (
      <TodoItem text={item.title}
      isComplete={item.isComplete}
      changeComplete={() => {
        const newTodo = [...this.state.todos];
        newTodo[index].isComplete = !newTodo[index].isComplete;
        this.setState({todos:newTodo}, this.storeData);
      }}
      deleteItem={() => {
        const newTodo = [...this.state.todos];
        newTodo.splice(index,1);
        this.setState({todos:newTodo}, this.storeData);
      }} />
    );
  };

  _changeText = (value) => {
    this.setState({inputValue: value});
  };

  _addTodoItem = () => {
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos;

      const newTodo = {title: this.state.inputValue, isComplete:false};

      this.setState({
        inputValue: '',
        todos: prevTodo.concat(newTodo)
      }, this.storeData);
    }
  };

  render() {
  return (
    <ImageBackground source={require('./app/components/pengpeng.jpg')} style={{width: '100%', height: '100%' }}>
      <View style={Styles.headercentered}>
        <Header/>
      </View>

      <View style={Styles.subContainer}>
        <SubTitle title="할 일을 입력해주세요"/>
        <Input
          value = {this.state.inputValue}
          changeText = {this._changeText}
          addTodo = {this._addTodoItem}/>
      </View>

      <View style={Styles.subContainer}>
        <SubTitle title="해야할 일 목록"/>
        <FlatList
        data={this.state.todos}
        renderItem={this._makeTodoItem}
        keyExtractor={(item, index) => {return '${index}'}}/>
      </View>
    </ImageBackground>
  )
  };
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headercentered: {
    alignItems : 'center',
  },
  
  subContainer: {
    marginLeft:20,
  },
});
