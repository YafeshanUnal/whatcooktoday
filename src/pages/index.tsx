import Head from "next/head";
import Link from "next/link";

const food = [
	{
		category: "Burger",
		name: "Wopper",
	},
	{
		category: "Pizza",
		name: "Pepperoni",
	},
	{
		category: "Burger",
		name: "Cheese Burger",
	},
];
export default function Home() {
	return (
		<>
			<Head>
				<title>Next.js + Tailwind CSS</title>
			</Head>
			<main className="flex flex-col gap-4 items-center justify-center p-10">
				<h1 className="text-4xl font-bold">Hello World</h1>
				<h3 className="text-2xl font-bold">
					This is What Cook Today Project Demo
				</h3>
				<div className="flex flex-col gap-4 items-center justify-center">
					{/* CategoryPage'i açan Link koy */}
					<Link children="CategoryPage" href="/category/name" />
					<Link children="DetailPage" href="/detail/name" />
				</div>
			</main>
		</>
	);
}
