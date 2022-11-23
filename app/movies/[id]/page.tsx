import Image from 'next/image';

async function getFakeDatas() {
	let res = await fetch('https://fakerapi.it/api/v1/books?_quantity=3');
	return res.json();
}

export default async function Page({ params }: any) {
	console.log(params.id);
	let datas = await getFakeDatas();
	return (
		<div className="space-y-2">
			<div className="text-3xl">{datas.data[params.id - 1].title}</div>
			<div>{datas.data[params.id - 1].published}</div>
			<div>{datas.data[params.id - 1].description}</div>
			<Image
				src={`${datas.data[params.id - 1].image}`}
				alt={'the image'}
				width={400}
				height={400}
			/>
		</div>
	);
}

// it's bloodu fast when you use this for static params
export async function generateStaticParams() {
	let res = await fetch('https://fakerapi.it/api/v1/books?_quantity=3');
	let books = await res.json();

	return books.data.map(({ id }: any) => ({ id: id.toString() }));
}
