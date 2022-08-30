import Image from 'next/image';
import Link from 'next/link';

export const DarkLogo = () => {
	return (
		<Link href="/"><Image src={'/logos/dark_logo.svg'} width="255px" height="50px" /></Link>);
};