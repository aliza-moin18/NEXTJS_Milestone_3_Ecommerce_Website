import { CartProvider } from '@/context/CartContext';
import { AppProps } from 'next/app';  // Import AppProps from Next.js

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;