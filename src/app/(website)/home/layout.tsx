// === === === === === === == Render == === === === === === ===//

export default async function Layout({
	children,
	landing,
	workspace,
}: {
	children: React.ReactNode;
	landing: React.ReactNode;
	workspace: React.ReactNode;
}) {
	return (
		<>
			{landing}
			{children}
			{workspace}
		</>
	);
}

// === === === === === === == Render == === === === === === ===//
