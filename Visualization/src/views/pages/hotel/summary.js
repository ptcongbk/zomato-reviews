import React from 'react';
import { get } from '../../../utils/request';

class Summary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			summaryInfo: {},
			hotelId: this.props.hotelId,
		};
	}
	componentDidMount() {
		this.fetchData(this.state.hotelId);
	}
	fetchData(hotel) {
		get(`/getSummaryInfo?hotelId=${hotel}`).then((response) => {
			this.setState({
				summaryInfo: response.Data,
			});
		});
	}

	render() {
		const { summaryInfo } = this.state;
		return (
			<div>
				<h3 className="page-title">
					{summaryInfo.Name}
					<br />
					<small> {summaryInfo.Address}</small>
				</h3>
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="dashboard-stat2 bordered">
							<div className="display">
								<div className="number">
									<h3 className="font-red-haze">
										<span data-counter="counterup" data-value={summaryInfo.Reviews}>{summaryInfo.Reviews}</span>
									</h3>
								</div>
								<div className="icon">
									<i className="icon-bubbles font-red-haze" />
								</div>
							</div>
							<div className="progress-info">
								<div className="status">
									<div className="status-title"> REVIEWS </div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="dashboard-stat2 bordered">
							<div className="display">
								<div className="number">
									<h3 className="font-blue-sharp">
										<span data-counter="counterup" data-value={summaryInfo.Ratings}>{summaryInfo.Ratings}</span>
									</h3>
								</div>
								<div className="icon">
									<i className="icon-badge tooltips font-blue-sharp" />
								</div>
							</div>
							<div className="progress-info">
								<div className="status">
									<div className="status-title"> RATINGS </div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="dashboard-stat2 bordered">
							<div className="display">
								<div className="number">
									<h3 className="font-purple-soft">
										<span data-counter="counterup" data-value={summaryInfo.TypeOfRes}>{summaryInfo.TypeOfRes}</span>
									</h3>
								</div>
								<div className="icon">
									<i className="icon-layers tooltips font-purple-soft" />
								</div>
							</div>
							<div className="progress-info">
								<div className="status">
									<div className="status-title"> Type </div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
						<div className="dashboard-stat2 bordered">
							<div className="display">
								<div className="number">
									<h3 className="font-green-sharp">
										<span data-counter="counterup" data-value={summaryInfo.CostForTwo}>{summaryInfo.CostForTwo}</span>
										{/* <span className="total-reviews">reviews</span> */}
									</h3>
								</div>
								<div className="icon">
									<i className="icon-tag font-green-sharp" />
								</div>
							</div>
							<div className="progress-info">
								<div className="status">
									<div className="status-title"> COST FOR TWO </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		);
	}
}

export default Summary;

