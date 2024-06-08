'use client';

import {useTheme} from '@/lib/atoms/global/state';

export default function Template({children}: {children: React.ReactNode}) {
	const {theme}: any = useTheme();
	return <main className={theme ? '☀️' : '🌑'}>{children}</main>;
}
