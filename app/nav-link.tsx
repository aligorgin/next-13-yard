//we need use client to use client work like getting the segment
'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

interface Props {
	href: string;
	children: React.ReactNode;
}

export default function NavLink({ href, children }: Props) {
	let segment = useSelectedLayoutSegments();
	let active = href === `/${segment}`;

	return (	
		<Link className={active ? ' underline' : ''} href={href}>
			{children}		
		</Link>
	);
}
