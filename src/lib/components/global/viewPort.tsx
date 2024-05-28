// ==================== Imports ====================//

//React
import {useState, useEffect} from 'react';

// State

// Components

// ==================== Imports ====================//

// ==================== Render ====================//

const useMediaQuery = (query: any) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches) {
			setMatches(true);
		}

		const listener = (event: {
			matches: boolean | ((prevState: boolean) => boolean);
		}) => setMatches(event.matches);
		media.addEventListener('change', listener);

		return () => media.removeEventListener('change', listener);
	}, [query]);

	return matches;
};

export default useMediaQuery;

// ==================== Render ====================//
