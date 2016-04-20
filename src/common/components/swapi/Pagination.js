import React, { Component } from 'react';

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.bindEvents();
	}

	componentWillReceiveProps(nextProps) {
		props = nextProps;
	}

	bindEvents() {
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handlePrevious (e) {
		e.preventDefault();
		const prevPage = (this.props.currentPage - 1)
		this.props.fetchPeople(prevPage > 0? prevPage : 1);
	}

	handleNext (e) {
		e.preventDefault();
		this.props.fetchPeople(this.props.currentPage + 1);
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

export default Pagination;
