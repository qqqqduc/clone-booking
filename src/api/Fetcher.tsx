import store from "@/redux/store";
import axios, { AxiosRequestConfig } from "axios";

// interface IFetcherOptions {
//   token?: string;
//   withToken?: boolean;
//   withMetadata?: boolean;
//   displayError?: boolean;
//   isLandingPage?: boolean;
//   isFormData?: boolean;
//   xCompanyId?: number;
// }

export async function fetcher<T>(
  config: AxiosRequestConfig
  // options?: IFetcherOptions
): Promise<T> {
  const token = store.getState();
  const timeout = process.env.NEXT_PUBLIC_TIMEOUT
    ? parseInt(process.env.NEXT_PUBLIC_TIMEOUT, 10)
    : undefined;
  const instance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
    timeout: timeout,
  });
  if (token) {
    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
  }
  return new Promise((resolve, reject) => {
    instance
      .request(config)
      .then((response) => {
        if (response) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
