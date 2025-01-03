import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-bold mt-2">${product.price}</p>
        <div className="mt-4 flex justify-between">
          <Link href={`/product/${product.id}`} passHref>
            <a className="text-blue-500">View Details</a>
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;