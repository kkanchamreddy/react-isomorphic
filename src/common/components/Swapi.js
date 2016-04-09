import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class Swapi extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { selectedReddit } = this.props;
    this.props.fetchPostsIfNeeded(selectedReddit);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const { selectedReddit } = nextProps;
      this.props.fetchPostsIfNeeded(selectedReddit);
    }
  }

  handleChange(nextReddit) {
    this.props.selectReddit(nextReddit);
  }

  handleRefreshClick(e) {
    e.preventDefault();
    const { selectedReddit } = this.props;
    this.props.invalidateReddit(selectedReddit);
    this.props.fetchPostsIfNeeded(selectedReddit);
  }

  render () {
		const { selectedReddit, posts, isFetching, lastUpdated, error } = this.props;
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

export default Reddit;
