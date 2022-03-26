import { AxiosResponse } from "axios";

function handleAPIResponse(response: AxiosResponse) {
  if (response.status === 200) return response.data;
  throw Error(response.data.message);
}

export default handleAPIResponse;
