import React, { Component, PropTypes } from 'react';

export default class TopicList extends Component {
  render() {
    return (
      <div className="list-group">
        {this.renderTopics()}
      </div>
    );
  }
}
