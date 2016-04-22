import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.bindEvents();
	}

	componentWillReceiveProps(nextProps) {
		this.props = nextProps;
		console.log('------Got the next Props----- in Pagination');
	}

	bindEvents() {
		this.handlePrevious = this.handlePrevious.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handlePrevious (e) {
		e.preventDefault();
		let prevPage = (this.props.currentPage - 1);
		prevPage = prevPage > 0? prevPage : 1;
		this.props.fetchPeople(prevPage);
		browserHistory.push('/swapi?page' + prevPage);
		//this.transitionTo('swapi', {}, {page: prevPage});
	}

	handleNext (e) {
		e.preventDefault();
		const nextPage = this.props.currentPage + 1;
		this.props.fetchPeople(nextPage);
		browserHistory.push('/swapi?page' + nextPage);
		//this.transitionTo('/swapi', {}, {page: nextPage});
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
