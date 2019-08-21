import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';
import Background from './Background';

import upperimg from '../images/upper.png';
import lowerimg from '../images/lower.png';



const Layout = ({ children }) => (
	<div dir="rtl">
		<Helmet />
		<Background>
		<div className="letter-box">
			<div className="letter-content has-text-centered">
				<img src={upperimg} alt="flowers header" /> 		
				{children}
				<img src={lowerimg} alt="flowers footer" /> 
				<Header/>
			</div>
		</div>
		</Background>
	</div>
);

export default Layout;
