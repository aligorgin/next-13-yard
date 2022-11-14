import Link from 'next/link';

async function getFakeData() {
	let res = await fetch('https://fakerapi.it/api/v1/books?_quantity=3');
	return res.json();
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	let fakeData = await getFakeData();

	return (
		<div className="flex space-x-8">
			<ul className="flex flex-col pr-10 text-sm">
				{fakeData.data.map(({ title, id }: any) => {
					return (
						<Link href={`/movies/${title}`} key={id}>
							{title}
						</Link>
					);
				})}
			</ul>
			{children}
		</div>
	);
}
