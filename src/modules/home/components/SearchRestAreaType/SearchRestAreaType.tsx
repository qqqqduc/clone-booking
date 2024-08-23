import React from "react";
import ItemsHead from "../ItemsHead/ItemsHead";
import RestAreaSlider from "../RestAreaSlider/RestAreaSlider";
import { ISliderListItems } from "@/types/type";

function SearchRestAreaType() {
  const listRestArea: ISliderListItems[] = [
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
      name: "Khách sạn",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
      name: "Căn hộ",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
      name: "Các resort",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
      name: "Các biệt thự",
    },
    {
      image:
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
      name: "Cabin nghỉ dưỡng",
    },
    {
      image:
        "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
      name: "Cottage",
    },
  ];

  return (
    <div className="mt-6">
      <ItemsHead title="Tìm theo loại chỗ nghỉ" style="mb-3" />
      <RestAreaSlider slideShow={4} listSlider={listRestArea} />
    </div>
  );
}

export default SearchRestAreaType;
