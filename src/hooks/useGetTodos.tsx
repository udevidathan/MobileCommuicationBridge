import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { Dummy } from "../@types/apiTypes/todos";
import API from "../API";
import todos from "../API/todos";

const useGetTodo = (): UseQueryResult<AxiosResponse<Dummy[]>> => {
  const request = todos.getTodo();
  const response = API.performRequest(request);

  return useQuery<AxiosResponse<Dummy[]>>(["todoName"], response, {
    cacheTime: 1000 * 60 * 60,
    staleTime: Infinity,
    enabled: true,
  });
};

export default useGetTodo;
