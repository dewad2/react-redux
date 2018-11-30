import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannel, postChannel } from '../store';

export function NewChannelEntry(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input
          className="form-control"
          type="text"
          name="channelName"
          placeholder="Enter channel name"
          value={props.channelNameInput}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">
          Create Channel
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => ({ channelNameInput: state.channelNameInput });

const mapDispatchToProps = dispatch => {
  return {
    handleChange(evt) {
      dispatch(writeChannel(evt.target.value));
    },
    handleSubmit(evt) {
      evt.preventDefault();
      const name = evt.target.channelName.value;
      console.log('name', name);
      dispatch(postChannel({ name }));
    }
  };
};

const NewChannelEntryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewChannelEntry);
export default NewChannelEntryContainer;
