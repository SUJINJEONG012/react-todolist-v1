import React, {Component} from "react";
import './TodoItem.css';
/*
text : 내용
checked : 체크박스 상태
id : 고유의 아이디
onToggle : 체크박스를 켜고끄는 함수
onRemove : 아이템을 삭제시키는 함수
*/
class TodoItem extends Component{
    render(){
        const {text, checked, id, onToggle, onRemove} = this.props;
        return(
            <div className="todo-item" onClick={()=> onToggle(id)}>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation(); //onToggle이 실행되지않도록 
                    onRemove(id)
                }}>&items;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
export default TodoItem;