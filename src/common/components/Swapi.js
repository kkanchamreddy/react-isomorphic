import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import People from './swapi/People';

const defaultProps = {
  people: [],
  error: false,
  isFetching: false
}

const getOriginalState = function() {
  var defaultProps = Swapi.defaultProps;
  return Object.assign({}, defaultProps);
}

class Swapi extends Component {
  constructor(props) {
    super(props);
    this.initVars();
  }

  initVars(props) {
    this.state = Object.assign({}, Swapi.defaultProps);
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

        {isFetching &&
          <h3>Loading...</h3>
        }
        {!isFetching && error  &&
          <h3 className="post-error">There has been an Error</h3>
        }
        {!isFetching && !error && people.length === 0 &&
          <h3>Empty</h3>
        }
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
