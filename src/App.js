import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List/index.jsx";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <List posts={this.props.allPosts} />
      </div>
    );
  }
}

// get state of redux store as props
const mapStateToProps = state => {
  return {
    allPosts: state.post
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
