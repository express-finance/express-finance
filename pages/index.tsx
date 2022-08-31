import React from 'react';
import { Layout } from '@ui/layout';
import { NextPageProps } from './_app';

export default function Dashboard({ user }: NextPageProps) {
	return <Layout user={user} title="Homepage">Hello {user?.name}</Layout>;
};