import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProducts = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    description: "this is description of first book",
  },
  {
    id: "p2",
    price: 62,
    title: "my second book",
    description: "this is description of second book",
  },
  {
    id: "p3",
    price: 26,
    title: "my third book",
    description: "this is description of third book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>

      <ul>
        {dummyProducts.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
