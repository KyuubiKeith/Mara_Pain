// === === === === === === == Imports == === === === === === ===//

// NextJS

// Store
import {useMenu, useTheme} from '@/lib/state';

// React
import useMediaQuery from '@/lib/viewport';

// Components
import MenuToggle from '../menu/menuToggle';
import ThemeToggle from '@/lib/molecules/toggles/themeToggle';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == MetaData == === === === === === ===//

// === === === === === === == MetaData == === === === === === ===//

//

// === === === === === === == MetaData == === === === === === ===//

// ==================== Main Render =====================//

export default function Header() {
	return (
		<header id='🎩'>
			<ThemeToggle />
			<MenuToggle />
		</header>
	);
}

// ==================== Main Render =====================//

// === === === === === === == MetaData == === === === === === ===//

//

// ==================== References =====================//

// ==================== References =====================//
