import React, { useEffect } from 'react';
import './Header.css';
import img from './bb-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../../redux/actions/color';

const Header = () => {
	const colorHeader = useSelector(state => state.colorData.colorHeader);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setColor('#075e08'));
	}, [dispatch]);



	return (
		<div className='Header' style={{ 
			background: `linear-gradient(
				90deg,
				rgba(2, 0, 36, 1) 0%,
				${colorHeader} 0%,
				rgba(1, 13, 1, 1) 100%,
				rgba(0, 0, 0, 1) 100%
			)`,	
		}}>
			<h1>Breaking Bad App</h1>
			<img src={img} alt='Breaking Bad Logo' width='150px' />
		</div>
	);
};

export default Header;
