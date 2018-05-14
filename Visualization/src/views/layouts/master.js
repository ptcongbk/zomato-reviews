import React from 'react';
import { Route } from 'react-router';
import Footer from '../shared/master/footer';
import Header from '../shared/master/header';
import Dashboard from '../pages/dashboard';
import Hotel from '../pages/hotel';
// import Menu from '../shared/master/menu';
// and the Home component

const MasterLayout = () => (
	<div>
		<Header />
		<div className="container-fluid">
			<div className="page-content">
				<div >
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/hotel/:hotelId" component={Hotel} />
				</div>
			</div>
			<Footer />
		</div>
	</div >
);

export default MasterLayout;
