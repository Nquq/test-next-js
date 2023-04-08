import ListImages from '@/components/ListImages';
import { useWindowSize } from '@/hooks/useWindowSize';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

type Props = {};

const DynamicImages = dynamic(() => import('../components/ListImagesLightBox'), { loading: () => <ListImages />, ssr: false });

const Home = (props: Props) => {
	const size = useWindowSize();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			console.log(window);
		}
	});

	return (
		<>
			<h1>Home</h1>
			{size.width <= 768 ? <ListImages /> : <DynamicImages />}
		</>
	);
};

export default Home;
