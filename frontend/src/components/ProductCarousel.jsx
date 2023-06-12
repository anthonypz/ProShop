import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    ""
  ) : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel
      pause="hover"
      className="bg-secondary my-4"
    >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              className="d-block mx-auto"
            />
            <Carousel.Caption className="carousel-caption">
              <h3 className="text-white text-right">
                {product.name} (${product.price})
              </h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
