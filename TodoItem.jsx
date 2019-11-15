import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      items: props.items
    };
  }
  render() {
    return (
      <div id="propsValue">
        <span>{this.props.value}</span>
        <button onClick={this.props.onClickMod}><strong>수정</strong></button>
        <button onClick={this.props.onClickDel}><strong>삭제</strong></button>
      </div>
    );
  }
}

export default TodoItem;
