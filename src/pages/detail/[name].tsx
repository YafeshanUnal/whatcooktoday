import { DetailPage } from ".";
import { RootLayout } from "../RootLayout";

interface DetailProps {
	name: string;
}

const Page = ({ name }: DetailProps) => {
	return (
		<RootLayout>
			<DetailPage name={name} />
		</RootLayout>
	);
};

export default Page;
