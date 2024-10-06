import { fetcher } from "./Fetcher";

function getSuggestAddress({ queryKey }: { queryKey: string[] }): Promise<any> {
  const searchText = queryKey[1];
  return fetcher({
    url: "https://rsapi.goong.io/Place/AutoComplete",
    method: "get",
    params: {
      api_key: process.env.NEXT_PUBLIC_GOONG_API_KEY,
      input: searchText,
    },
  })
}

function getCoordinates(placeId: string): Promise<any> {
  return fetcher({
    url: "https://rsapi.goong.io/Place/Detail",
    method: "get",
    params: {
      api_key: process.env.NEXT_PUBLIC_GOONG_API_KEY,
      place_id: placeId,
    },
  })
}




export { getSuggestAddress, getCoordinates};
