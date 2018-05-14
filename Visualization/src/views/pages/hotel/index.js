import React from 'react';
import Summary from '../hotel/summary';
import ZomatoDetail from './zomatoDetail';
const Hotel = ({ match }) => (
	<div>
		<Summary hotelId={match.params.hotelId} />
		<div className="row">
			<div className="col-lg-12 col-xs-12 col-sm-12">
				<div className="portlet light portlet-fit full-height-content full-height-content-scrollable bordered">
					{/* <div className="portlet-title tabbable-line">
						<div className="caption">
							<i className="icon-bubbles font-dark hide" />
							<span className="caption-subject font-dark bold uppercase">Reviews</span>
						</div>
						<ul className="nav nav-tabs">
							<li>
								<a href="#portlet_comments_5" data-toggle="tab"> Zomato </a>
							</li>
						</ul>
					</div> */}
					<div className="portlet-body">
						<ZomatoDetail hotelId={match.params.hotelId} />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Hotel;

