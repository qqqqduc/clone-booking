import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AutoComplete } from "antd";
import ReactMapGL, { Marker } from "@goongmaps/goong-map-react";
import {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";
import Image from "next/image";

import { queriesKey } from "@/api/react-query";
import { getSuggestAddress, getCoordinates } from "@/api/ApiMap";
import Heading from "../Heading";
import Input from "../Input";
import "../Component.scss";

interface ListingAddressProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

interface Location {
  lat: number;
  lng: number;
  name: string;
}

function ListingAddress({ register, errors, setValue }: ListingAddressProps) {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const [viewport, setViewport] = useState({
    latitude: 21.03072,
    longitude: 105.85239,
    zoom: 12,
  });

  const suggestAddress = useQuery({
    queryKey: [queriesKey.GET_SUGGEST_ADDRESS, searchText],
    queryFn: getSuggestAddress,
    enabled: searchText.length > 3,
  });

  const handleSelect = async (value: string) => {
    const place = suggestAddress.data.predictions.find(
      (p: any) => p.description === value
    );

    if (place) {
      const placeDetails = await getCoordinates(place.place_id);
      const location = placeDetails.result.geometry.location;

      setSelectedLocation({
        lat: location.lat,
        lng: location.lng,
        name: value,
      });

      setViewport({
        latitude: location.lat,
        longitude: location.lng,
        zoom: 14,
      });
      setValue("lat", location.lat);
      setValue("lng", location.lng);
    }
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const options =
    suggestAddress.data?.predictions?.map((item: any) => ({
      value: item.description,
    })) || [];

  return (
    <>
      <Heading
        title="Chỗ ở quý vị muốn đăng kí ở vị trí nào?"
        bottom={6}
        size="3xl"
      />
      <p className="text-gray-500 mb-6">
        Quý vị hãy đảm bảo cung cấp địa chỉ chính xác – thông tin này sẽ khó
        thay đổi sau đó.
      </p>

      <div className="mb-4">
        <label
          className="block text-gray-700 mb-1 font-medium"
          htmlFor="address"
        >
          Địa chỉ
        </label>
        <AutoComplete
          options={options}
          onSearch={handleSearch}
          style={{ width: "100%" }}
          onSelect={handleSelect}
        >
          <input
            id="address"
            type="text"
            placeholder=""
            {...register("address", {
              required: "Địa chỉ không được để trống",
            })}
            className={`
              w-full outline-none border border-gray-300 rounded-md p-2
             ${!errors["address"] ? "focus:ring-2 focus:ring-blue-500" : ""}
             ${errors["address"] ? "border-rose-500" : ""}
             `}
          />
      
        </AutoComplete>
      </div>

      {errors["address"]?.message && (
            <p className="text-rose-500 text-xs my-2">
              {String(errors["address"].message)}
            </p>
      )}

      <div className="mb-4">
        <Input
          title="Mã bưu chính"
          id="postalCode"
          register={register}
          errors={errors}
          config={{
            required: "Mã bưu chính không được để trống",
          }}
        />
      </div>

      {selectedLocation && (
        <ReactMapGL
          {...viewport}
          goongApiAccessToken={process.env.NEXT_PUBLIC_GOONG_MAPTILES_KEY}
          width="100%"
          height="400px"
          onViewportChange={(newViewport: any) => setViewport(newViewport)}
        >
          <Marker
            latitude={selectedLocation.lat}
            longitude={selectedLocation.lng}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Image
              width={35}
              height={35}
              alt="marker"
              src="/img/map_marker.png"
            />
          </Marker>
        </ReactMapGL>
      )}
    </>
  );
}

export default ListingAddress;
