// ==================== Imports ====================//

// State
import { useSelector, useDispatch } from "react-redux";

//React

// State

// Components

// ==================== Imports ====================//

// ==================== Render ====================//

export default function MenuToggle() {
	const dispatch = useDispatch();
	const { menuState } = useSelector((state) => state.menu);
	return (
		<div className='menuIcon'>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}

// ==================== Render ====================//
