export interface NavButton {
	name: string;
	pathname: string;
}

export const loggedInNavButtons: NavButton[] = [
	{
		name: "Home",
		pathname: "/dashboard",
	},
	{
		name: "Expenses",
		pathname: "/expenses",
	},
	{
		name: "Activity",
		pathname: "/activity",
	},
];

export const loggedOutNavButtons: NavButton[] = [
	{
		name: "Home",
		pathname: "/",
	},
	{
		name: "About",
		pathname: "/about",
	}
];