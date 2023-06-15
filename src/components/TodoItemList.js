import React, { Component } from "react";

/*
보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성.
컴포넌트 성능 최적화를 할 수 있기 때문

todo : 객체들이 들어있는 배열
onToggle : 체크박스를 키고 끄는 함수
onRemove : 아이템을 삭제시키는 함수
*/ 
class TodoItemList extends Component{
    render(){
        const {todos, onToggle, onRemove} = this.props;
        return(
            <div>

            </div>
        );
    }    
}

export default TodoItemList;