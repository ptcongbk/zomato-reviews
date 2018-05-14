import React from 'react';

const Menu = () => (
	<div className="nav-collapse collapse navbar-collapse navbar-responsive-collapse">
		<ul className="nav navbar-nav">
			<li className="dropdown dropdown-fw dropdown-fw-disabled  active open selected">
				<a className="text-uppercase" href="/">
					<i className="icon-home" /> Statistic
    </a>
			</li>
			<li className="dropdown dropdown-fw dropdown-fw-disabled  ">
				<a className="text-uppercase">
					<i className="icon-puzzle" /> Analysis
    </a>
			</li>
		</ul>
	</div>
);

export default Menu;
