import React from "react";
import ViewedItem from "./components/ViewedItem/ViewedItem";
import Discount from "./components/Discount/Discount";
import SearchRestAreaType from "./components/SearchRestAreaType/SearchRestAreaType";
import TopDestination from "./components/TopDestination/TopDestination";
import Plan from "./components/Plan/Plan";
import GoodResortArea from "./components/GoodResortArea/GoodResortArea";
import Discovery from "./components/Discovery/Discovery";
import FavoriteDestination from "./components/FavoriteDestination/FavoriteDestination";
import TopRestArea from "./components/TopRestArea/TopRestArea";
import { useQuery } from "@tanstack/react-query";
import { queriesKey } from "@/api/react-query";
import { getListRestArea } from "@/api/ApiProduct";
import LoginGifts from "@/components/LoginGifts/LoginGifts";

export function Home() {
  const listRestArea = useQuery({
    queryKey: [queriesKey.GET_LIST_REST_AREA],
    queryFn: getListRestArea,
  });

  return (
    <div>
      <button onClick={() => console.log(listRestArea.data)} className="mt-20">
        log data
      </button>
      {/* <Banner /> */}
      {/* <SearchLatest /> */}
      <ViewedItem />
      <Discount />
      <SearchRestAreaType />
      <TopDestination />
      <Plan />
      {/* COMPONENT LỌC THEO ĐỊA ĐIỂM */}
      <Discovery />
      <GoodResortArea />
      <TopRestArea />
      <LoginGifts />
      <FavoriteDestination />
    </div>
  );
}
