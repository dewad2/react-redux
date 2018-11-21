import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';

export function ChannelList(props) {
  console.log('channels', props.channels)
  return (
    <ul>

    </ul>
  );
}

const mapStateToProps = state => {
  return {
    channels: state.channels,
    messages: state.messages
  };
};

const map

const channelListContainer = connect(mapStateToProps)(ChannelList);
export default channelListContainer;
