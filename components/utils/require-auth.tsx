'use client';

import { redirect } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import CircularIndeterminate from '../common/circular-inditerminate';
interface Props {
	children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
	const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);
  console.log(isAuthenticated)
	if (isLoading) {
		return (
			<CircularIndeterminate />
		);
	}

	if (!isAuthenticated) {
		redirect('/auth/login');
	}

	return <>{children}</>;
}