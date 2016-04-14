import React, {Component, propTypes} from 'react';

class Imgur extends Component {
  render() {
    const { topics } = this.props;
    return (
      <div className="imgur-container">
        <TopicList/>
      </div>
    );
  }
}


export default Imgur;
