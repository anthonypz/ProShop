import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className='my-3 rounded'>
			<Link to={`/product/${product._id}`}>
				<Card.Img
					src={product.image}
					variant='top'
					className='p-2'
				/>
			</Link>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title
						as='div'
						className='product-title mb-0'
					>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>

				<Card.Text
					as='h3'
					className='mt-1'
				>
					${product.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default Product;
