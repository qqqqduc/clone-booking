import React from "react";
import Carousel from "react-multi-carousel";
import HouseType from "../HouseType/HouseType";
import "react-multi-carousel/lib/styles.css";
import "./ResortListSlider.scss";

interface IProps {
    slideShow: number;
}

function ResortListSlider({ slideShow }: IProps) {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="custom-multi-carousel"
            focusOnSelect={false}
            infinite={false}
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024,
                    },
                    items: slideShow,
                    partialVisibilityGutter: 40,
                },
                // mobile: {
                //     breakpoint: {
                //         max: 464,
                //         min: 0,
                //     },
                //     items: 1,
                //     partialVisibilityGutter: 30,
                // },
                // tablet: {
                //     breakpoint: {
                //         max: 1024,
                //         min: 464,
                //     },
                //     items: 2,
                //     partialVisibilityGutter: 30,
                // },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            slidesToSlide={1}
            swipeable
        >
            <HouseType
                priceElement={
                    <div className="house-price flex justify-end mt-7">
                        <div>
                            <span className="house-price-text">
                                Bắt đầu từ{" "}
                            </span>
                            <div className="text-base font-semibold inline-block">
                                {" "}
                                VND 4.000.000
                            </div>
                        </div>
                    </div>
                }
            />
            <HouseType
                priceElement={
                    <div className="house-price flex justify-end mt-7">
                        <div>
                            <span className="house-price-text">
                                Bắt đầu từ{" "}
                            </span>
                            <div className="text-base font-semibold inline-block">
                                {" "}
                                VND 4.000.000
                            </div>
                        </div>
                    </div>
                }
            />
            <HouseType
                priceElement={
                    <div className="house-price flex justify-end mt-7">
                        <div>
                            <span className="house-price-text">
                                Bắt đầu từ{" "}
                            </span>
                            <div className="text-base font-semibold inline-block">
                                {" "}
                                VND 4.000.000
                            </div>
                        </div>
                    </div>
                }
            />
            <HouseType
                priceElement={
                    <div className="house-price flex justify-end mt-7">
                        <div>
                            <span className="house-price-text">
                                Bắt đầu từ{" "}
                            </span>
                            <div className="text-base font-semibold inline-block">
                                {" "}
                                VND 4.000.000
                            </div>
                        </div>
                    </div>
                }
            />
            <HouseType
                priceElement={
                    <div className="house-price flex justify-end mt-7">
                        <div>
                            <span className="house-price-text">
                                Bắt đầu từ{" "}
                            </span>
                            <div className="text-base font-semibold inline-block">
                                {" "}
                                VND 4.000.000
                            </div>
                        </div>
                    </div>
                }
            />
            <HouseType
                priceElement={
                    <div className="house-price flex justify-end mt-7">
                        <div>
                            <span className="house-price-text">
                                Bắt đầu từ{" "}
                            </span>
                            <div className="text-base font-semibold inline-block">
                                {" "}
                                VND 4.000.000
                            </div>
                        </div>
                    </div>
                }
            />
            <HouseType
                priceElement={
                    <div className="house-price flex justify-end mt-7">
                        <div>
                            <span className="house-price-text">
                                Bắt đầu từ{" "}
                            </span>
                            <div className="text-base font-semibold inline-block">
                                {" "}
                                VND 4.000.000
                            </div>
                        </div>
                    </div>
                }
            />
            <HouseType
                priceElement={
                    <div className="house-price flex justify-end mt-7">
                        <div>
                            <span className="house-price-text">
                                Bắt đầu từ{" "}
                            </span>
                            <div className="text-base font-semibold inline-block">
                                {" "}
                                VND 4.000.000
                            </div>
                        </div>
                    </div>
                }
            />
            
        </Carousel>
    );
}

export default ResortListSlider;
