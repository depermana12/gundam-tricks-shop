// it's client side component, not dealing with next.js. So it useEffect hook
// latter on im gonna use redux to fetch and passing to component
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productApiSlice.js";

const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <div>{isError.data ? isError.data.message : isError.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
export default HomeScreen;
