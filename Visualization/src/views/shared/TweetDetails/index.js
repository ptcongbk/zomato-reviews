import React, { Component } from 'react';
import Pager from 'react-pager';
import LoadingBackground from '../../shared/Loading/LoadingBackground';

class TweetDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageSize: 10,
			currentPage: 0,
			visiblePage: 3,
		};
		this.handlePageChanged = this.handlePageChanged.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.totalItems !== this.props.totalItems) {
			this.setState({ currentPage: 0 });
		}
	}

	handlePageChanged(newPage) {
		this.setState({ currentPage: newPage });
	}
	renderDetailGrid() {
		const displayData = this.props.data.slice(this.state.currentPage * this.state.pageSize, (this.state.currentPage + 1) * this.state.pageSize);
		return displayData.map(item => (
			<tr key={item.id} className="m-datatable__row" >
				<td className="m-datatable__cell"><span >{item.tweet}</span></td>
				<td style={{ width: '20%' }} className="m-datatable__cell text-align-right"><span>{item.retweet_count}</span></td>
				<td style={{ width: '20%' }} className="m-datatable__cell text-align-right"><span>{item.favorite_count}</span></td>
				<td style={{ width: '20%' }} className="m-datatable__cell text-align-right"><span>{item.sentiment_type}</span></td>
			</tr>

		));
	}
	render() {
		return (
			<div className="m-widget5__item detail-listing">
				{this.props.loading && <LoadingBackground className="transparent" />}
				<div className="m_datatable m-datatable m-datatable--default m-datatable--loaded m-datatable--scroll">
					<table className="m-datatable__table table-bordered" width="100%" style={{ display: 'block', minHeight: '300px', overflowX: 'auto' }}>
						<thead className="m-datatable__head">
							<tr className="m-datatable__row" style={{ left: '0' }}>
								<th title="User" className="m-datatable__cell m-datatable__cell--sort" data-field="Fullbane">
									<span>Tweets</span>
								</th>
								<th style={{ width: '20%' }} title="Last Tweet" className="m-datatable__cell m-datatable__cell--sort">
									<span>Retweets</span>
								</th>
								<th style={{ width: '20%' }} title="Total" className="m-datatable__cell m-datatable__cell--sort">
									<span>Like</span>
								</th>
								<th style={{ width: '20%' }} title="Sentiment" className="m-datatable__cell m-datatable__cell--sort">
									<span>Sentiment</span>
								</th>
							</tr>
						</thead>
						<tbody className="m-datatable__body" >
							{
								this.renderDetailGrid()
							}
						</tbody>
					</table>
					{(this.props.totalItems && this.props.totalItems > this.state.pageSize) ?
					<Pager
						total={this.props.totalItems / this.state.pageSize}
						current={this.state.currentPage}
						visiblePages={this.state.visiblePage}
						titles={{
							first: '«', prev: '‹', next: '›', last: '»',
						}}
						className="pagination-sm pull-right"
						onPageChanged={this.handlePageChanged}
					/>
					:
					''
					}
				</div>
			</div>
		);
	}
}

export default TweetDetails;
