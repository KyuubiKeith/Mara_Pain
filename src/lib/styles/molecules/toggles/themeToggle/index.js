// ==================== Imports ====================//

//React

// State
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../organisms/vendors/redux/slices/themeSlice";

// Components

// ==================== Imports ====================//

// ==================== Render ====================//

export default function ThemeToggle() {
	const dispatch = useDispatch();
	const { themeState } = useSelector((state) => state.theme);
	const { menuState } = useSelector((state) => state.menu);
	const themeIcon =	menuState ? "shape sun" : "shape sun moss"


	return (
		<button
			className='theme-toggle--button'
			aria-label='Toggle Theme'
			onClick={() => dispatch(toggleTheme())}>
			<span className={themeState ? themeIcon : "shape moon"}></span>
			<span className='rays--container'>
				<span className='ray'></span>
				<span className='ray'></span>
				<span className='ray'></span>
				<span className='ray'></span>
			</span>
		</button>
	);
}

// ==================== Render ====================//
