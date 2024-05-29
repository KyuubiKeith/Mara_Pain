// === === === === === === == Imports == === === === === === ===//

// Zustand
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

//

// ==================== Theme =====================//
export const useTheme = create(
	persist(
		(set) => ({
			theme: false,
			toggleTheme: () => set((state: any) => ({theme: !state.theme})),
		}),
		{
			name: 'theme', // name of the item in the storage (must be unique)
		},
	),
);
// ==================== Theme =====================//

//

// ==================== Menu =====================//
export const useMenu = create((set) => ({
	menu: false,
	toggleMenu: () => set((state: any) => ({menu: !state.menu})),
}));

// ==================== Menu =====================//

//

// === === === === === === == Render == === === === === === ===//
