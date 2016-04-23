import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.bindEvents();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.location.key !== nextProps.location.key) {
			this.props.fetchPeople(nextProps.location.query);
		}
	}



	bindEvents() {
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handlePrevious (e) {
		e.preventDefault();
		let prevPage = (this.props.currentPage - 1);
		prevPage = prevPage > 0? prevPage : 1;
		this.context.router.push('/swapi?page=' + prevPage);
		
	}

	handleNext (e) {
		e.preventDefault();
		const nextPage = this.props.currentPage + 1;
		this.context.router.push('/swapi?page=' + nextPage);
	}

	render() {
		return (
			<div>
				<ul className="pager">
 					<li>
						<a href="#" onClick = {this.handlePrevious}>Previous</a>
 					</li>
 					<li>
						<a href="#" onClick = {this.handleNext}>Next</a>
 					</li>
				</ul>
			</div>
		);
	}

}

Pagination.contextTypes = {
	router: React.PropTypes.func.isRequired
};
export default Pagination;
