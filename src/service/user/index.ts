import {useMutation, useQuery, UseQueryResult} from '@tanstack/react-query'
import axios from 'axios_config';
import { IGlobal, ITotal } from 'service/IGlobal.interface';
import { createQueryString } from 'utils/utils';
import { IPostUser, IGetUsers } from './interface';

export const useCreateUser = () => {
    return useMutation(async (data: IPostUser) => {
      const res = await axios.post(`/user`, data);
  
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
    throw new Error(res.data.message)  
    });
};

export const useGetUsers = ( qs?:any ): UseQueryResult<IGlobal<ITotal<IGetUsers[]>[]>> => {
  return useQuery(["get-users", qs], async () => {
    const queryStr = createQueryString(qs);
    console.log('queryStr',queryStr);
    const res = await axios.get(`/user/`+queryStr);      
    if (res.status >= 200 && res.status < 300)  {
      return res.data;
    } else {
      throw new Error(res.data.message) 
    }
  });
};

export const useGetUserBYID = (id:number): UseQueryResult<IGlobal<IGetUsers>> => {
  return useQuery(["get-user", id], async () => {
    const res = await axios.get(`/user/`+id);      
    if (res.status >= 200 && res.status < 300)  {
      return {...res.data, result: res.data.result[0]};
    } else {
      throw new Error(res.data.message) 
    }
  }, {enabled: !!id});
};

export const useUpdateUser = () => {
  return useMutation(async (body :IPostUser & { id:number }) => {
    const res = await axios.put(`/user/${body.id}`, body);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
  throw new Error(res.data.message)  
  });
};