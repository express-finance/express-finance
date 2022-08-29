import React from 'react';
import NextLink from 'next/link';
import { Image, Box, Flex, Spacer, Button, MenuButton, Menu, MenuList, MenuItem, MenuDivider, Icon } from '@chakra-ui/react';
import { UserProfile } from '@auth0/nextjs-auth0';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';

import { loggedInNavButtons } from '@ui/layout/navButtons';
import type { NavButton } from '@ui/layout/navButtons';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

interface PrimaryNavProps {
	user: UserProfile;
}

export const PrimaryNav = ({ user }: PrimaryNavProps) => {
	const router = useRouter();

	const handleLogout = () => {
		router.push('/logout');
	};

	return (
		<Flex direction="row" p="2" shadow="base">
			{/* <DarkLogo /> */}
			<Box>
				{loggedInNavButtons.map(({ name, pathname }: NavButton) => (
					<NextLink href={pathname}>
						<Button variant={"ghost"}>{name}</Button>
					</NextLink>
				))}
			</Box>

			<Spacer />

			{user && (
				<Menu>
					<MenuButton
					>
						<Image
							boxSize='2rem'
							borderRadius='full'
							src={user.picture || ""}
							alt='Profile Image'
							mr='12px'
						/>
					</MenuButton>
					<MenuList>
						<MenuItem isDisabled>
							<Image
								boxSize='2rem'
								borderRadius='full'
								src={user.picture || ""}
								alt='Profile Image'
								mr='12px'
							/>
							{user.name}
						</MenuItem>
						<MenuItem>Account</MenuItem>
						<MenuItem>Settings</MenuItem>
						<MenuDivider />
						<MenuItem icon={<Icon as={ArrowLeftOnRectangleIcon} h={6} w={6} />} onClick={handleLogout}>Logout</MenuItem>
					</MenuList>
				</Menu>
			)}

		</Flex>
	);
};