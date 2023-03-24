import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProductCard = ({ product }) => {
    const [imageSrc, setImageSrc] = useState(product.low_image);

    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

    const handleImageLoad = () => {
        setTimeout(() => {
            setImageSrc(product.image);
        }, 3000);
    };

    return (
        <div className="flex flex-col justify-center items-start  bg-black bg-opacity-30 text-white rounded-lg drop-shadow-lg">
            <div className="relative select-none noSelect top-0 mx-auto h-full">
                <img
                    src={imageSrc}
                    alt="A Card"
                    className="w-full rounded-t-lg"
                    onLoad={handleImageLoad}
                    onClick={handleOpen}
                />
            </div>
            <Lightbox
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                open={isOpen}
                close={handleClose}
                slides={[
                    { src: product.image },
                ]}
                index={0}
                carousel={
                    {
                        finite: true,
                        preload: 0
                    }
                }
                render={
                    {
                        buttonNext:()=>null,
                        buttonPrev:()=>null
                    }
                }
                controller={
                    {
                        closeOnBackdropClick:true
                    }
                }
            />


            <div className="flex flex-col p-3 w-full h-full">
                <div className="flex  flex-col-reverse justify-center text-center items-center w-full text-[#e0c78f]">
                    <h2 className="text-base lg:text-2xl font-bold -mb-2">
                        <span className="m-2">{product.price}</span>
                        <span>دینار</span>
                    </h2>
                    <h4 className="text-base lg:text-2xl font-semibold whitespace-pre-line">{product.name}</h4>
                </div>
            </div>



        </div>

    );
};

export default ProductCard;
