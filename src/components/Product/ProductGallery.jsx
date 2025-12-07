const ProductGallery = ({ images }) => {
    return (
        <div className="grid grid-cols-3 gap-2">
            {images.map((img, i) => (
                <img key={i} src={img} alt={`gallery-${i}`} className="h-32 w-full rounded object-cover" />
            ))}
        </div>
    );
};

export default ProductGallery;
