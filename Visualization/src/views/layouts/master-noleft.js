import React from 'react';
import { Route } from 'react-router';
import Footer from '../shared/master/footer';
import Header from '../shared/master/header';
import Dashboard from '../pages/dashboard';
// import RouteWithSubRoutes from '../../core/security/route-with-sub-routes';
// and the Home component

const MasterNoLeft = () => (
	<div>
		<Header />
		<div className="m-grid__item m-grid__item--fluid m-grid m-grid--hor-desktop m-grid--desktop m-body">
			<div className="m-grid__item m-grid__item--fluid  m-grid m-grid--ver m-container m-container--responsive m-container--xxl m-page__container">
			<Route exact path="/" component={Dashboard} />
			</div>
		</div>
		<Footer />
	</div>
);

export default MasterNoLeft;
