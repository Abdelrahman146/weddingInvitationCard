import React from 'react';

import {Link} from 'gatsby';

import './style.scss';


const Header = (props) => (
	<div className="tabs is-small is-centered">
		<ul>
			<li><Link to="/">بطاقة الدعوة</Link></li>
			<li><Link to="/location">تاريخ الحفل والمكان</Link></li>
			<li><Link to="/guests">قائمة المدعوين</Link></li>
		</ul>
	</div>
);

export default Header;
