import Link from "next/link";
interface DetailProps {
	name: string;
}

export const DetailPage = ({ name }: DetailProps) => {
	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			<h1>Detail Page</h1>
			Lobe Yasinb
			<h1 className="text-4xl font-bold">{name}</h1>
			<Link href="/" children="Go HOMe" />
		</div>
	);
};
