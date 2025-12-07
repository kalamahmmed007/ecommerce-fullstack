import React from "react";


const ProductImage = ({ src, alt }) => {
    return (
        <div className="mb-4 rounded border p-2">
            <img src={src} alt={alt} className="h-auto w-full rounded" />
        </div>
    );
};

export default ProductImage;
