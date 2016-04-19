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
				<ul className="pager">
 					<li>
						<a href="#">Previous</a>
 					</li>
 					<li>
						<a href="#">Next</a>
 					</li>
				</ul>
			</div>
		);
	}

}

export default Pagination;
