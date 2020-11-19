import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./index.css";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  // input handleChange to state when input text
  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state });
  };

  // when submit, run props.addPost
  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.search);
  };

  render() {
    return (
      <Grid item xs={12} className="form">
        <form onSubmit={this.handleSubmit}>
          <TextField
            onChange={this.handleChange}
            value={this.state.search}
            type="text"
            placeholder="Search"
            name="search"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            NEW PROJECT
          </Button>
        </form>
      </Grid>
    );
  }
}

// get dispatch function of redux as props
const mapDispatchToProps = dispatch => {
  return {
    addPost: (search) => {
      dispatch(actions.addPost(search));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Input);
