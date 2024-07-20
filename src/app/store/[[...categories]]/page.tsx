interface CategoriesProps {
  params: {
    categories: string[];
  };
  searchParams?: {
    id: string;
  };
}

export default function Categories({ params, searchParams }: CategoriesProps) {
  const { categories } = params;
  const searchId = searchParams?.id;
  return (
    <main>
      <h1>Categories</h1>
      <p>{categories?.toString()}</p>
      <p>{searchId}</p>
    </main>
  );
}
