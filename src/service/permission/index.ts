import {useMutation, useQuery, UseQueryResult} from '@tanstack/react-query'
import axios from 'axios_config';
import { IGlobal, ITotal } from 'service/IGlobal.interface';
import { IGetRole, IPostRole, IRole, Permission } from './interface';

export const useGetRoleForm = (): UseQueryResult<IGlobal<IRole[]>> => {
    return useQuery(["get-role-form"], async () => {
      const res = await axios.get(`/role/form`);      
      if (res.status >= 200 && res.status < 300)  {
        return res.data;
      } else {
        throw new Error(res.data.message) 
      }
    });
};

export const useGetRole = (): UseQueryResult<IGlobal<ITotal<IGetRole[]>[]>> => {
  return useQuery(["get-role"], async () => {
    const res = await axios.get(`/role`);      
    if (res.status >= 200 && res.status < 300)  {
      return res.data;
    } else {
      throw new Error(res.data.message) 
    }
  });
};

export const useCreateRole = () => {
  return useMutation(async (body :IPostRole) => {
    const res = await axios.post(`/role`, body);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
  throw new Error(res.data.message)  
  });
};