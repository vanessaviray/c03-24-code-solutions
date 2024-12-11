import { Routes, Route } from 'react-router-dom';
import { Header } from './Header.tsx';
import { Catalog } from './Catalog.tsx';
import { ProductDetails } from './ProductDetails.tsx';
import { About } from './About.tsx';
import { NotFound } from './NotFound.tsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
