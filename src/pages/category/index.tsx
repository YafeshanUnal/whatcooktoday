import Image from "next/image";
import Link from "next/link";
interface NameProps {
	name: string;
}

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

export const CategoryPage = ({ name }: NameProps) => {
	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			{food.map((food) => (
				<Link href={`/category/${food.name}`} key={food.name} />
			))}
			<Link href="/" />
			<h1>I LoveYasinb</h1>
		</div>
	);
};
