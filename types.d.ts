interface ErrorProps {
  error: Error;
  reset: () => void;
}
interface Product {
  id: string;
  title: string;
  images: { src: string }[];
}
