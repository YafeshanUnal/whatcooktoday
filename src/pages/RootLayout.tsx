import React from "react";
import Home from "./index";

interface RootLayoutProps {
	children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
	return <>{children}</>;
};
