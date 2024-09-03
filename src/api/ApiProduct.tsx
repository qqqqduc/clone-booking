import { fetcher } from "./Fetcher";

function getListRestArea(): Promise<any> {
  return fetcher({
    url: "api/users?page=2",
    method: "get",
  });
}

export { getListRestArea };
