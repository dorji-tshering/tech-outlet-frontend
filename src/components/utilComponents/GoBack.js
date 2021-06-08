import React from 'react';
import styles from '../../styles/utilStyles/Goback.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

const GoBack = () => {
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	}

    	return (
        	<div className={styles.nav_back}>
			<IoMdArrowRoundBack className={styles.go_back} onClick={
				() => goBack()
			} />
		</div>
    	);
}

export default GoBack;
