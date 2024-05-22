// import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { products, readCatalog, Product } from './lib';
import { useEffect, useState } from 'react';

console.log(products);

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <div
            key={product.productId}
            className="w-full md:w-1/2 lg:w-1/3 px-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Link
      to={`details/${product.productId}`}
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4 shadow-sm hover:text-inherit">
      <img
        src={product.imageUrl}
        className="object-contain h-72 w-full"
        alt={product.name}
      />
      <div className="flex-auto p-6">
        <h5 className="font-bold mb-3">{product.name}</h5>
        <p className="mb-0 text-gray-600">{product.price}</p>
        <p className="h-20 mb-0 overflow-hidden">{product.shortDescription}</p>
      </div>
    </Link>
  );
}
