import React, {Component, propTypes} from 'react';

class Imgur extends Component {
  render() {
    const { selectedReddit, posts, isFetching, lastUpdated, error } = this.props;
    return (
      <div className="imgur-container">
        Hello I am still under Construction
      </div>
    );
  }
}


export default Imgur;
