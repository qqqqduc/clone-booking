import React from "react";
import Carousel from "react-multi-carousel";
import RestAreaType from "./RestAreaType/RestAreaType";
import "react-multi-carousel/lib/styles.css";
import "./RestAreaSlider.scss";

interface IProps {
    slideShow: number;
}

function RestAreaSlider({ slideShow }: IProps) {
    return (
        <div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="custom-multi-carousel"
                containerClass="container"
                dotListClass=""
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
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
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <RestAreaType />
                <RestAreaType />
                <RestAreaType />
                <RestAreaType />
                <RestAreaType />
                <RestAreaType />
                <RestAreaType />
                <RestAreaType />
                <RestAreaType />
                <RestAreaType />
            </Carousel>
        </div>
    );
}

export default RestAreaSlider;
