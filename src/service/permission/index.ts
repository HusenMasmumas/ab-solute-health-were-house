import {useMutation, useQuery, UseQueryResult} from '@tanstack/react-query'
import axios from 'axios_config';
import { IGlobal, ITotal } from 'service/IGlobal.interface';
import { IGetRole, IGetRoleByID, IPostRole, IRole, Permission } from './interface';

export const useGetRoleForm = (id:number): UseQueryResult<IGlobal<IRole[]>> => {
    return useQuery(["get-role-form"], async () => {
      const res = await axios.get(`/role/form`);      
      if (res.status >= 200 && res.status < 300)  {
        return res.data;
      } else {
        throw new Error(res.data.message) 
      }
    },{enabled: !id });
};

export const useGetRole = (): UseQueryResult<IGlobal<ITotal<IGetRole[]>[]>> => {
  return useQuery(["get-roles"], async () => {
    const res = await axios.get(`/role`);      
    if (res.status >= 200 && res.status < 300)  {
      return res.data;
    } else {
      throw new Error(res.data.message) 
    }
  });
};

export const useGetRoleBYID = (id:number): UseQueryResult<IGlobal<IGetRoleByID>> => {
  return useQuery(["get-role", id], async () => {
    const res = await axios.get(`/role/`+id);      
    if (res.status >= 200 && res.status < 300)  {
      return {...res.data, result: res.data.result[0]};
    } else {
      throw new Error(res.data.message) 
    }
  }, {enabled: !!id});
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

export const useDelete = () => {
  return useMutation(async ( id: {id: number}) => {
    const res = await axios.delete(`/role${id}`,);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
  throw new Error(res.data.message)  
  });
};

export const useUpdateRole = () => {
  return useMutation(async (body :IPostRole & { id:number }) => {
    const res = await axios.put(`/role/${body.id}`, body);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
  throw new Error(res.data.message)  
  });
};

export const useUpdateRoleActive = () => {
  return useMutation(async (body : { id:number, name:string, isActive:boolean }) => {
    const res = await axios.put(`/role/${body.id}`, body);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
  throw new Error(res.data.message)  
  });
};