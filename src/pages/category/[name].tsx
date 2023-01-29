import { RootLayout } from "../RootLayout";
import { CategoryPage } from "../category";
interface CategoryProps {
	name: string;
}

const Page = ({ name }: CategoryProps) => {
	return (
		<RootLayout>
			<CategoryPage name={name} />
		</RootLayout>
	);
};

export default Page;
