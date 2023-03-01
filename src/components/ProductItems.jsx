import React from "react";



const ProductCard = ({ product }) => {
    return (
        <div className="flex flex-col justify-center items-start  bg-[#2ab098] rounded-lg shadow-lg">
            <div className="relative select-none noSelect ">
                {/* <a href={`/bid/products/product_details/${product.id}`}> */}
                    <img
                        src={`${product.image}`}
                        alt="product"
                        className="w-full rounded-t-lg"
                    />
                {/* </a> */}
            </div>
            <div className="flex flex-col p-3 w-full">
                <div className="flex  flex-col-reverse justify-center text-center items-center w-full">
                    <h2 className="text-base lg:text-2xl font-bold -mb-2">
                        <span className="m-2">{product.price}</span>
                        <span>دینار</span>
                    </h2>
                    <h4 className="text-base lg:text-2xl font-semibold whitespace-nowrap">{product.name}</h4>
                </div>
                {/* <div className="flex flex-row-reverse justify-around items-center">
                    <div className="flex items-center">
                        <span
                            className="inline-block rounded-full text-sm font-semibold text-gray-700 mr-2 p-1"
                            style={{ backgroundColor: product.timerColor }}
                        >
                            {product.timerValue}
                        </span>
                        <span className="text-gray-600 text-xs uppercase">{product.timerLabel}</span>
                    </div>
                    <a href={`/bid/products/product_details/${product.id}`} className=" font-semibold text-sm">
                        کات
                    </a>
                </div> */}
            </div>
        </div>

    );
};

export default ProductCard;
