import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Imgur from '../components/Imgur';
import * as ImgurActions from '../actions/imgur';

//Data that needs to be called before rendering the component
//This is used for server side rendering via the fetchComponentDataBeforeRending() method
Imgur.need = [
  ImgurActions.fetchTopics
]

function mapStateToProps(state) {
  console.log('State in imgur page: ', state);
  let { topics } = state;
  topics = topics.present;
  return { topics };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImgurActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Imgur);
