import 'photoswipe/style.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

const ListImagesLightBox = () => {
	return (
		<Gallery>
			<Item original='https://placekitten.com/1024/768?image=1' thumbnail='https://placekitten.com/80/60?image=1' width='1024' height='768'>
				{({ ref, open }) => (
					<img
						style={{ cursor: 'pointer' }}
						ref={ref as React.MutableRefObject<HTMLImageElement>}
						onClick={open}
						src='https://placekitten.com/80/60?image=1'
					/>
				)}
			</Item>
			<Item original='https://placekitten.com/1024/768?image=2' thumbnail='https://placekitten.com/80/60?image=2' width='1024' height='768'>
				{({ ref, open }) => (
					<img
						style={{ cursor: 'pointer' }}
						ref={ref as React.MutableRefObject<HTMLImageElement>}
						onClick={open}
						src='https://placekitten.com/80/60?image=2'
					/>
				)}
			</Item>
		</Gallery>
	);
};

export default ListImagesLightBox;
