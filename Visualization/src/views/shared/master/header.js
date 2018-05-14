import React from 'react';
import TopBar from './topBar';
import Menu from './menu';
const Header = () => (
	<header className="page-header">
		<nav className="navbar mega-menu" role="navigation">
			<div className="container-fluid">
				<div className="clearfix navbar-fixed-top">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="toggle-icon">
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</span>
					</button>
					<a className="page-logo" href="/">
						<img src="../assets/layouts/layout/img/logo.png" alt="logo" style={{ height: '32px' }} className="logo-default" />
					</a>
					{/* <form className="search" action="extra_search.html" method="GET">
						<input type="name" className="form-control" name="query" placeholder="Search..." />
						<a className="btn submit md-skip">
							<i className="fa fa-search" />
						</a>
					</form> */}
					<TopBar />
				</div>
				<Menu />
			</div>
		</nav>
	</header>
);

export default Header;
