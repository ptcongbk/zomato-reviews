import React from 'react';

const TopBar = () => (
	<div className="topbar-actions">
		<div className="btn-group-notification btn-group" id="header_notification_bar">
			<button type="button" className="btn btn-sm md-skip dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
				<i className="icon-bell" />
				<span className="badge">7</span>
			</button>
			<ul className="dropdown-menu-v2">
				<li className="external">
					<h3>
						<span className="bold">12 pending</span> notifications
     </h3>
					<a href="#">view all</a>
				</li>
				<li>
					<ul className="dropdown-menu-list scroller" style={{ height: '250px', padding: 0 }} data-handle-color="#637283">
						<li>
							<a>
								<span className="details">
									<span className="label label-sm label-icon label-success md-skip">
										<i className="fa fa-plus" />
									</span> New user registered.
        </span>
								<span className="time">just now</span>
							</a>
						</li>
						<li>
							<a >
								<span className="details">
									<span className="label label-sm label-icon label-danger md-skip">
										<i className="fa fa-bolt" />
									</span> Server #12 overloaded.
        </span>
								<span className="time">3 mins</span>
							</a>
						</li>
						<li>
							<a >
								<span className="details">
									<span className="label label-sm label-icon label-warning md-skip">
										<i className="fa fa-bell-o" />
									</span> Server #2 not responding.
        </span>
								<span className="time">10 mins</span>
							</a>
						</li>
						<li>
							<a >
								<span className="details">
									<span className="label label-sm label-icon label-info md-skip">
										<i className="fa fa-bullhorn" />
									</span> Application error.
        </span>
								<span className="time">14 hrs</span>
							</a>
						</li>
						<li>
							<a >
								<span className="details">
									<span className="label label-sm label-icon label-danger md-skip">
										<i className="fa fa-bolt" />
									</span> Database overloaded 68%.
        </span>
								<span className="time">2 days</span>
							</a>
						</li>
						<li>
							<a >
								<span className="details">
									<span className="label label-sm label-icon label-danger md-skip">
										<i className="fa fa-bolt" />
									</span> A user IP blocked.
        </span>
								<span className="time">3 days</span>
							</a>
						</li>
						<li>
							<a >
								<span className="details">
									<span className="label label-sm label-icon label-warning md-skip">
										<i className="fa fa-bell-o" />
									</span> Storage Server #4 not responding dfdfdfd.
        </span>
								<span className="time">4 days</span>
							</a>
						</li>
						<li>
							<a >
								<span className="details">
									<span className="label label-sm label-icon label-info md-skip">
										<i className="fa fa-bullhorn" />
									</span> System Error.
        </span>
								<span className="time">5 days</span>
							</a>
						</li>
						<li>
							<a >
								<span className="details">
									<span className="label label-sm label-icon label-danger md-skip">
										<i className="fa fa-bolt" />
									</span> Storage server failed.
        </span>
								<span className="time">9 days</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>

);

export default TopBar;
