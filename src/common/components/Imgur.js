import React, {Component, propTypes} from 'react';

class Imgur extends Component {
  render() {
    const { topics } = this.props;
    console.log('----this.props---', this.props);
    return (
      <div className="imgur-container">
        <TopicList/>
      </div>
    );
  }
}


export default Imgur;
