import React, { Component } from 'react';

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: props.people
		}
	}

	render() {
		return (
			<div>
				Pagination goes Here
			</div>
		);
	}

}

export default Pagination;
