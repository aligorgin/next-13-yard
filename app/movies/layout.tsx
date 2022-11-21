import Link from 'next/link';

async function getFakeDatas() {
	let res = await fetch('https://fakerapi.it/api/v1/books?_quantity=3');
	return res.json();
}

export default async function Layout({ children }: { children: React.ReactNode }) {
	let fakeData = await getFakeDatas();

	return (
		<div className="flex space-x-8">
			<ul className="flex flex-col text-sm flex-none">
				{fakeData.data.map(({ title, id }: any) => {
					return (
						<Link href={`/movies/${id}`} key={id}>
							{title}
						</Link>
					);
				})}
			</ul>
			{children}
		</div>
	);
}
