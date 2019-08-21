import React from 'react';

import './style.scss';

const Background = ({children}) => (
	<div className="bg-container">
		<div className="background"></div>
		<div className="content">
				{children}
			</div>
	</div>
)

export default Background;