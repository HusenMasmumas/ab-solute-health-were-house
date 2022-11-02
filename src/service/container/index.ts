import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios_config";
import { IGlobal, ITotal } from "service/IGlobal.interface";
import { IContainer } from "./interface";

export const useCreateContainer = () => {
    return useMutation(async (body :IContainer) => {
      const res = await axios.post(`/container`, body);
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
      throw new Error(res.data.message)  
    });
};

export const useGetContainers = ( qs?:any ): UseQueryResult<IGlobal<ITotal<IContainer[]>[]>> => {
    return useQuery(["get-containers", qs], async () => {
    //   const queryStr = createQueryString(qs);
      const res = await axios.get(`/container`,{params:qs});      
      if (res.status >= 200 && res.status < 300)  {
        return res.data;
      } else {
        throw new Error(res.data.message) 
      }
    });
};