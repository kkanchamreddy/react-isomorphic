import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class Swapi extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPeopleIfNeeded();
  }

  componentWillReceiveProps(nextProps) {

  }


  render () {
		const { people, isFetching, lastUpdated, error } = this.props;
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
						<Peopl people={people} />
					</div>
				}
			</div>
    );
  }
}

Swapi.propTypes = {
  people: PropTypes.array.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number
};

export default Swapi;
