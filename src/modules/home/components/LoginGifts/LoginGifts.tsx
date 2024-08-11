import React from "react";
import ItemsHead from "../ItemsHead/ItemsHead";
import GiftsContent from "./GiftsContent/GiftsContent";

function LoginGifts() {
  return (
    <div className="mt-6">
      <ItemsHead title="Đi nhiều hơn, chi ít hơn" />
      <GiftsContent />
    </div>
  );
}

export default LoginGifts;
