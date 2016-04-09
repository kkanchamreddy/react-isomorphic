import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import Swapi from '../components/Reddit';
import * as SwapiActions from '../actions/swapi';

//Data that needs to be called before rendering the component
//This is used for server side rending via the fetchComponentDataBeforeRending() method
Swapi.need = [
  SwapiActions.fetch
]

function mapStateToProps(state) {
  let { people } = state;

  return {
    people,
    isFetching : false
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SwapiActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Swapi);
