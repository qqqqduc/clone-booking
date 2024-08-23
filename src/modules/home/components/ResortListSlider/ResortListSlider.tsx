import React from "react";
import HouseType from "../HouseType/HouseType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ISliderListItems } from "@/types/type";
import "swiper/css";
import "swiper/css/navigation";
import "./ResortListSlider.scss";

interface IProps {
  slideShow: number;
  listSlider: ISliderListItems[];
}

function ResortListSlider({ slideShow, listSlider }: IProps) {
  return (
    <Swiper
      modules={[Navigation]} // Import module Pagination
      navigation={true}
      spaceBetween={20}
      slidesPerView={slideShow}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="custom-swiper"
    >
      {listSlider?.map((item: ISliderListItems, index: number) => (
        <SwiperSlide key={index}>
          <HouseType
            image={item.image}
            name={item.name}
            description={item.description}
            point={item.point}
            rank={item.rank}
            review={item.review}
            priceElement={
              <div className="house-price flex justify-end mt-7">
                <div>
                  <span className="house-price-text">Bắt đầu từ </span>
                  <div className="text-base font-semibold inline-block">
                    {" "}
                    VND {item.price}
                  </div>
                </div>
              </div>
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ResortListSlider;
