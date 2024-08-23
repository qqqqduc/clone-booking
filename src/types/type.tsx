export enum EInputType {
  SEARCH_REST_AREA = 0,
  DISCOVERY = 2,
}

export interface ISliderListItems {
  image: string;
  name: string;
  description?: string;
  point?: number;
  rank?: string;
  review?: string;
  price?: string;
}
