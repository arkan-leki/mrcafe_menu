import React, { useState } from "react";



const ProductCard = ({ product }) => {
    const [imageSrc, setImageSrc] = useState(product.low_image);

    const handleImageLoad = () => {
        setImageSrc(product.image);
    };

    return (
        <div className="flex flex-col justify-center items-start  bg-black bg-opacity-30 text-white rounded-lg drop-shadow-lg">
            <div className="relative select-none noSelect ">
                {/* <a href={`/bid/products/product_details/${product.id}`}> */}
                <img
                    src={imageSrc}
                    alt="image url not found"
                    className="w-full rounded-t-lg"
                    onLoad={handleImageLoad}
                />
                {/* </a> */}
            </div>
            <div className="flex flex-col p-3 w-full">
                <div className="flex  flex-col-reverse justify-center text-center items-center w-full text-[#e0c78f]">
                    <h2 className="text-base lg:text-2xl font-bold -mb-2">
                        <span className="m-2">{product.price}</span>
                        <span>دینار</span>
                    </h2>
                    <h4 className="text-base lg:text-2xl font-semibold whitespace-nowrap">{product.name}</h4>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;
