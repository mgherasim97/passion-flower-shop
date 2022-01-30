
import { useParams } from 'react-router-dom';

const Product = () => {
    const params = useParams();

    const { productId } = params;

    return <>Product {productId} </>
}

export default Product;