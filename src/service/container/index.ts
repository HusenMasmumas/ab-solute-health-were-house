import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import axios, { throwResponse } from "axios_config";
import { IGlobal, ITotal } from "service/IGlobal.interface";
import { IContainer } from "./interface";

export const useCreateContainer = () => {
    return useMutation(async (body :Omit<IContainer, "id">) => {
      const res = await axios.post(`/container`, body);
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
      throwResponse(res)
    });
};

export const useGetContainers = ( qs?:any ): UseQueryResult<IGlobal<ITotal<IContainer[]>[]>> => {
    return useQuery(["get-containers", qs], async () => {
      const res = await axios.get(`/container`,{params:qs});      
      if (res.status >= 200 && res.status < 300)  {
        return res.data;
      }   
      throwResponse(res)
    });
};

export const useGetContainerBYID = (id:number): UseQueryResult<IGlobal<IContainer>> => {
  return useQuery(["get-container", id], async () => {
    const res = await axios.get(`/container/`+id);      
    if (res.status >= 200 && res.status < 300)  {
      return {...res.data, result: res.data.result[0]};
    } 
    throwResponse(res)
  }, {enabled: !!id});
};

export const useUpdateContainer = () => {
  return useMutation(async (body : IContainer) => {
    const res = await axios.put(`/container/${body.id}`, body);
    if (res.status >= 200 && res.status < 300) {
      return {...res.data, result: res.data.result[0]};
    }
    throwResponse(res)
  });
};
