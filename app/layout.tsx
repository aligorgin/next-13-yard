import NavLink from './nav-link';
import '../styles/globals.css';

// this is root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
	// it's nessecery to have html and body
	return (
		<html>
			<head>
				<title>Nested layout beta by next js</title>
			</head>
			<body>
				<header className="p-4 space-x-4 border-b-2">
					<NavLink href={'/'}>home</NavLink>
					<NavLink href={'/movies'}>movies</NavLink>
					<NavLink href={'/test'}>test</NavLink>
				</header>
				<div className="p-4">{children}</div>
			</body>
		</html>
	);
}
