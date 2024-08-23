import React from "react";
import RestAreaType from "./RestAreaType/RestAreaType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import _ from "lodash";
import { ISliderListItems } from "@/types/type";
import "swiper/css";
import "swiper/css/navigation";
import "./RestAreaType.scss";

interface IProps {
  slideShow: number;
  listSlider: ISliderListItems[];
}

function RestAreaSlider({ slideShow, listSlider }: IProps) {

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
      {listSlider.map((item: ISliderListItems, index: number) => (
        <SwiperSlide key={index}>
          <RestAreaType image={item.image} name={item.name} description={item.description} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RestAreaSlider;
