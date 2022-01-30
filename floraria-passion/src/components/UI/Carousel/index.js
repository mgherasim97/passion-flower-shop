
import { Carousel } from 'react-responsive-carousel';

import styles from './Carousel.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import img1 from "../../../assets/CarouselImages/1.jpg";
import img2 from "../../../assets/CarouselImages/2.jpg";
import img3 from "../../../assets/CarouselImages/3.jpg";
import img4 from "../../../assets/CarouselImages/4.jpg";
import img5 from "../../../assets/CarouselImages/5.jpg";
import img6 from "../../../assets/CarouselImages/6.jpg";

const CarouselComponent = () => {

    const onCarouselChange = (event) => {
        // event.preventDefault();

    }

    const onClickItem = (event) => {
        // event.preventDefault();

    }

    const onClickThumb = (event) => {
        // event.preventDefault();

    }

    const loading = <span>Loading...</span>

    return (
        <Carousel autoPlay={true} showArrows={true} onChange={onCarouselChange} onClickItem={onClickItem} showThumbs={false}>
            <div>
                <img src={img1} alt={loading} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img2} alt={loading}/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img3} alt={loading}/>
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={img4} alt={loading}/>
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src={img5} alt={loading}/>
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src={img6} alt={loading}/>
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    );
}


export default CarouselComponent;
