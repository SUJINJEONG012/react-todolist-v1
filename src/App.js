import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';

class App extends Component{
  render(){
    return (
      //렌더링 하기
     <TodoListTemplate form={<Form/>}>
      템플릿 완성
     </TodoListTemplate>
    );
  }
}

export default App;