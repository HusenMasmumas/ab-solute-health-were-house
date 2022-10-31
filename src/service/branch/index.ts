import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios_config";
import { IGlobal, ITotal } from "service/IGlobal.interface";
import { createQueryString } from "utils/utils";
import { IBranch } from "./interface";

export const useCreateBranch = () => {
    return useMutation(async (body :IBranch) => {
      const res = await axios.post(`/branch`, body);
  
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
    throw new Error(res.data.message)  
    });
};

export const useGetBranchs = ( qs?:any ): UseQueryResult<IGlobal<ITotal<IBranch[]>[]>> => {
  return useQuery(["get-branchs", qs], async () => {
    const queryStr = createQueryString(qs);
    const res = await axios.get(`/branch`+queryStr);      
    if (res.status >= 200 && res.status < 300)  {
      return res.data;
    } else {
      throw new Error(res.data.message) 
    }
  });
};

export const useGetBranchBYID = (id:number): UseQueryResult<IGlobal<IBranch>> => {
  return useQuery(["get-branch", id], async () => {
    const res = await axios.get(`/branch/`+id);      
    if (res.status >= 200 && res.status < 300)  {
      return {...res.data, result: res.data.result[0]};
    } else {
      throw new Error(res.data.message) 
    }
  }, {enabled: !!id});
};