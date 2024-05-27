// === === === === === === == Imports == === === === === === ===//

// Store
import {useTheme} from '@/lib/components/state';

// === === === === === === == Imports == === === === === === ===//

export default function ThemeToggle() {
	const {theme, toggleTheme}: any = useTheme();
	return (
		<button
			aria-label='Toggle Theme'
			onClick={toggleTheme}>
			<p>{theme ? '🌑' : '☀️'}</p>
		</button>
	);
}
