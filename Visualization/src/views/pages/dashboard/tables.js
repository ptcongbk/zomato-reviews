import React, { Component } from 'react';
import Pager from 'react-pager';
import { get } from '../../../utils/request';
import LoadingBlock from '../../shared/Loading/LoadingBlock';

class HotelTables extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: [],
			pageSize: 15,
			totalPage: 0,
			currentPage: 0,
			visiblePage: 3,
		};
		this.bindData = this.bindData.bind(this);
		this.handlePageChanged = this.handlePageChanged.bind(this);
	}
	componentDidMount() {
		this.bindData();
	}
	bindData() {
		this.setState({ loading: true });
		// let query = {
		// 	keyword: this.keyword,
		// 	position: this.position,
		// 	sortBy: this.sortBy,
		// };
		get(`/getHotelsByPosition?position=${this.position.selectedIndex + 1}&keyword=${this.keyword.value}&sortBy=${this.sortBy.selectedIndex}`).then((response) => {
			this.setState({
				data: response.results,
				loading: false,
				currentPage: 0,
				totalPage: (response.results.length) / this.state.pageSize,
			});
		});
	}
	handlePageChanged(newPage) {
		this.setState({ currentPage: newPage });
	}
	renderDetailGrid() {
		const displayData = this.state.data.slice(this.state.currentPage * this.state.pageSize, (this.state.currentPage + 1) * this.state.pageSize);
		displayData.forEach((element) => {
			element.HotelUrl = `/hotel/${element.HotelId}`;
			if (element.Ratings >= 3.5) {
				element.ZomatoReviewClass = 'good';
			} else if (element.Ratings <= 2) {
				element.ZomatoReviewClass = 'bad';
			} else {
				element.ZomatoReviewClass = 'average';
			}
		});
		return displayData.map((item, index) => (
			<tr style={{ width: '100%' }} key={index} role="row" >
				<td style={{ width: '700px', textAlign: 'left', padding: '5px' }} ><a target="_blank" href={`${item.HotelUrl}`}>{item.HotelName}</a></td>
				<td style={{ width: '300px' }} className={`${item.ZomatoReviewClass}`}><a target="_blank" href={`${item.Url}`}>{item.Ratings} <span className="total-reviews">({item.Reviews} reviews)</span></a> </td>
				<td style={{ width: '300px' }}>{item.CostForTwo}</td>
				<td style={{ width: '300px' }}>{item.TypeOfRes}</td>
				<td style={{ width: '300px' }}>{item.Cuisines}</td>
			</tr >

		));
	}
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-3">
						<label>Search for</label>
						<input ref={(ref) => { this.keyword = ref; }} id="txtKeyword" type="text" className="form-control" placeholder="Search for..." />
					</div>
					<div className="col-xs-3">
						<label>Position</label>
						<select ref={(ref) => { this.position = ref; }} className="form-control">
							<option id="1">Brisbane</option>
							<option id="2">Sydney</option>
							<option id="3">Melbourne</option>
						</select>
					</div>
					<div className="col-xs-3">
						<label>Sort</label>
						<select ref={(ref) => { this.sortBy = ref; }} className="form-control">
							<option id="0">Name</option>
							<option id="1">Rating from low to high</option>
							<option id="2">Rating from high to low</option>
						</select>
					</div>
					<div className="col-xs-3 margin-top-23">
						<button onClick={this.bindData} className="btn green-soft uppercase bold" type="button">Search</button>
					</div>
				</div>
				<div className="table-scrollable">
					{this.state.loading && <LoadingBlock />}
					<table className="table table-striped table-checkable table-bordered table-hover dataTable no-footer" width="100%" style={{ display: 'block', minHeight: '300px', overflowX: 'auto' }}>
						<thead >
							<tr role="row">
								<th title="User" >
									&nbsp;
        </th>
								<th title="Google" className="text-align-center">
									Reviews
								</th>
								<th className="text-align-center">
									Cost for two
								</th>
								<th className="text-align-center">
									Type
								</th>
								<th className="text-align-center">
									Cuisines
								</th>
							</tr>
						</thead>
						<tbody >
							{this.renderDetailGrid()}
						</tbody>
					</table>
					<Pager
						total={this.state.totalPage}
						current={this.state.currentPage}
						visiblePages={this.state.visiblePage}
						titles={{
							first: '«', prev: '‹', next: '›', last: '»',
						}}
						className="pagination-sm pull-right"
						onPageChanged={this.handlePageChanged}
					/>
				</div>
			</div >
		);
	}
}
export default HotelTables;
