import React from 'react';
import '../../styles/utilStyles/goback.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

const GoBack = () => {
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	}

    	return (
        	<div className="n-back">
			<IoMdArrowRoundBack className="go-back" onClick={
				() => goBack()
			} />
		</div>
    	);
}

export default GoBack;
