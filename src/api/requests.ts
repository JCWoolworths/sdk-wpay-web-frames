import { compose } from "./../utils/fp";
import axios, { Method, AxiosResponse, AxiosInstance } from "axios";

const createAxiosClient = (baseURL: string) => {
  const api = axios.create({
    baseURL,
    validateStatus: (status) => {
      return status < 500;
    },
  });
  return api;
};

const createRequestFn =
  (api: AxiosInstance) =>
  <T>(
    method: Method,
    url: string,
    params: any,
    headers: any,
    data: any
  ): Promise<AxiosResponse<T>> => {
    return api.request<T>({
      method,
      url,
      params,
      headers,
      data,
    });
  };

// Define a default query function that will receive the query key
export const createQueryFn =
  (request) =>
  async ({ queryKey }): Promise<unknown> => {
    try {
      const { data } = await request(...queryKey);

      return data;
    } catch (err) {
      throw new Error("Query request error", { cause: err });
    }
  };

export const defaultQueryFn = compose(
  createQueryFn,
  createRequestFn,
  createAxiosClient
);

const createMutationFn =
  (request) =>
  async ({ method, url, params, headers, body }): Promise<unknown> => {
    try {
      const { data, status } = await request(
        method,
        url,
        params,
        headers,
        body
      );

      return { ...data, status };
    } catch (err) {
      throw new Error("Mutation request error", { cause: err });
    }
  };

export const defaultMutationFn = compose(
  createMutationFn,
  createRequestFn,
  createAxiosClient
);
