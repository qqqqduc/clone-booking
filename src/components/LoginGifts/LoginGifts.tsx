import React from "react";
import GiftsContent from "./GiftsContent/GiftsContent";
import ItemsHead from "../ItemsHead/ItemsHead";

function LoginGifts() {
  return (
    <div className="mt-6">
      <ItemsHead title="Đi nhiều hơn, chi ít hơn" />
      <GiftsContent />
    </div>
  );
}

export default LoginGifts;
