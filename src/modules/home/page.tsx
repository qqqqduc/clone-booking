import React from "react";
import ViewedItem from "./components/ViewedItem/ViewedItem";
import Discount from "./components/Discount/Discount";
import SearchRestAreaType from "./components/SearchRestAreaType/SearchRestAreaType";
import TopDestination from "./components/TopDestination/TopDestination";
import Plan from "./components/Plan/Plan";
import GoodResortArea from "./components/GoodResortArea/GoodResortArea";
import Discovery from "./components/Discovery/Discovery";
import LoginGifts from "./components/LoginGifts/LoginGifts";
import FavoriteDestination from "./components/FavoriteDestination/FavoriteDestination";
import "./page.scss";

export function Home() {
    return (
        <div>
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
            <LoginGifts />
            {/* KHÁM PHÁ CHỖ NGHỈ */}
            <FavoriteDestination />
        </div>
    );
}
