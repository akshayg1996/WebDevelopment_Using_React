import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //console.log("Cons", this);
    //this.handleIncrement = this.handleIncrement.bind(this);
  }

  state = {
    //value: this.props.counter.value, - deleted as single source of truth needs to be present
    //imageUrl: 'https://picsum.photos/200'
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}{" "}
      </ul>
    );
  }

  // Cannot handle single source of truth here. Hence deleted
  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //     //console.log("Increment clicked", this.state.value);
  //   };

  render() {
    console.log("props", this.props);

    return (
      <div>
        {this.props.children}
        <span style={this.styles} className="m-2">
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!!"}
        {this.renderTags()} */}
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
