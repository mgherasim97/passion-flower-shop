import { Carousel } from 'react-responsive-carousel';

import styles from './Onboarding.module.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../assets/CarouselImages/1.jpg';
import img2 from '../../assets/CarouselImages/2.jpg';
import img3 from '../../assets/CarouselImages/3.jpg';
import img4 from '../../assets/CarouselImages/4.jpg';
import img5 from '../../assets/CarouselImages/5.jpg';
import img6 from '../../assets/CarouselImages/6.jpg';
import Panel from './Panel';

const CarouselComponent = () => {
	const onCarouselChange = (event) => {
		// event.preventDefault();
	};

	const onClickItem = (event) => {
		// event.preventDefault();
	};

	const loading = <span>Loading...</span>;
	console.log(styles['carousel-container']);
	return (
		<Panel className={styles['carousel-container']}>
			<Carousel
				autoPlay={true}
				showArrows={true}
				onChange={onCarouselChange}
				onClickItem={onClickItem}
				infiniteLoop={true}
				showThumbs={false}
			>
				<div>
					<img src={img1} alt={loading} />
				</div>
				<div>
					<img src={img2} alt={loading} />
				</div>
				<div>
					<img src={img3} alt={loading} />
				</div>
				<div>
					<img src={img4} alt={loading} />
				</div>
				<div>
					<img src={img5} alt={loading} />
				</div>
				<div>
					<img src={img6} alt={loading} />
					{/* <p className="legend">Legend 6</p> */}
				</div>
			</Carousel>
		</Panel>
	);
};

export default CarouselComponent;
