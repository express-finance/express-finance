import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
	ChevronDownIcon,
	HomeIcon,
	LogoutIcon,
	PlusIcon,
	SparklesIcon,
	UserIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import toast from "react-hot-toast";

export const Layout = ({ children }: { children: React.ReactNode; }) => {
	const router = useRouter();

	const menuItems = [
		{
			label: "Create a new expense",
			icon: PlusIcon,
			href: "/create",
		},
		{
			label: "My Expenses",
			icon: HomeIcon,
			href: "/homes",
		},
		{
			label: "Logout",
			icon: LogoutIcon,
			href: "/"
		},
	];

	return (
		<>
			<Head>
				<title>Express Finance</title>
				<meta name="title" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="min-h-screen flex flex-col">
				<header className="h-16 w-full shadow-md">
					<div className="h-full container mx-auto">
						<div className="h-full px-4 flex justify-between items-center space-x-4">
							<Link href="/">
								<a className="flex items-center space-x-1">
									<SparklesIcon className="shrink-0 w-8 h-8 text-rose-500" />
									<span className="text-xl font-semibold tracking-wide">
										Express<span className="text-rose-600">Finance</span>
									</span>
								</a>
							</Link>
							<div className="flex items-center space-x-4">
								filler
							</div>
						</div>
					</div>
				</header>
			</div>

			<main className="flex-grow container mx-auto">
				<div className="px-4 py-12">
					{children}
				</div>
			</main>
		</>
	);
};
