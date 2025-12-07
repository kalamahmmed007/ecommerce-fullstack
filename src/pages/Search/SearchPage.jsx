import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '@/components/UI/Input';
import ProductGrid from '@/components/Product/ProductGrid';
import { useFetch } from '@/hooks/useFetch';
import { productApi } from '@/api/productApi';

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [searchTerm, setSearchTerm] = useState(query);

    const { data: products, isLoading } = useFetch(() =>
        productApi.searchProducts(searchTerm)
    );

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({ q: searchTerm });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Search Products</h1>

            <form onSubmit={handleSearch} className="mb-8">
                <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for products..."
                />
            </form>

            {isLoading ? (
                <p>Loading...</p>
            ) : products?.length > 0 ? (
                <ProductGrid products={products} />
            ) : (
                <p className="text-gray-600">No products found for "{searchTerm}"</p>
            )}
        </div>
    );
};

export default SearchPage;
