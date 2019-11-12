import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="propsValue">
        <span>{this.props.value}</span>
        <button><strong>수정</strong></button>
        <button><strong>삭제</strong></button>
      </div>
    );
  }
}

export default TodoItem;
