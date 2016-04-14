import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import People from './swapi/People';

const defaultProps = {
  people: [],
  error: false,
  isFetching: false
}


class Swapi extends Component {
  constructor(props) {
	  super(props);
	  this.initVars(props);
  }

  initVars(props) {
	this.state = Object.assign({}, props);
  }

  componentDidMount() {
	  this.props.fetchPeopleIfNeeded();
  }

  componentWillReceiveProps(nextProps) {
  }


  render () {
		const { people, isFetching, error } = this.state;
		return (
			<div>


				{people.length > 0 &&
					<div style={{ opacity: isFetching ? 0.5 : 1 }}>
						<People people={people} />
					</div>
				}
			</div>
	);
  }
}

Swapi.defaultProps = {
  people: [],
  error: {},
  isFetching: false
}

Swapi.propTypes = {
  people: PropTypes.array.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number
};

export default Swapi;
