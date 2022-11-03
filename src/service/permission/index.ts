import {useMutation, useQuery, UseQueryResult} from '@tanstack/react-query'
import axios, { throwResponse } from 'axios_config';
import { IGlobal, ITotal } from 'service/IGlobal.interface';
import { createQueryString } from 'utils/utils';
import { IGetRole, IGetRoleByID, IPostRole, IRole, Permission } from './interface';

export const useGetRoleForm = (id:number): UseQueryResult<IGlobal<IRole[]>> => {
    return useQuery(["get-role-form"], async () => {
      const res = await axios.get(`/role/form`);      
      if (res.status >= 200 && res.status < 300)  {
        return res.data;
      }
      throwResponse(res)
    },{enabled: !id });
};

export const useGetRole = ( qs?:any ): UseQueryResult<IGlobal<ITotal<IGetRole[]>[]>> => {
  return useQuery(["get-roles", qs], async () => {
    const queryStr = createQueryString(qs);
    const res = await axios.get(`/role`+queryStr);      
    if (res.status >= 200 && res.status < 300)  {
      return res.data;
    }
    throwResponse(res)
  });
};

export const useGetRoleBYID = (id:number): UseQueryResult<IGlobal<IGetRoleByID>> => {
  return useQuery(["get-role", id], async () => {
    const res = await axios.get(`/role/`+id);      
    if (res.status >= 200 && res.status < 300)  {
      return {...res.data, result: res.data.result[0]};
    }
    throwResponse(res)
  }, {enabled: !!id});
};

export const useCreateRole = () => {
  return useMutation(async (body :IPostRole) => {
    const res = await axios.post(`/role`, body);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
    throwResponse(res)
  });
};

export const useDelete = () => {
  return useMutation(async ( id: {id: number}) => {
    const res = await axios.delete(`/role${id}`,);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
    throwResponse(res)
  });
};

export const useUpdateRole = () => {
  return useMutation(async (body :IPostRole & { id:number }) => {
    const res = await axios.put(`/role/${body.id}`, body);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
    throwResponse(res)
  });
};

export const useUpdateRoleActive = () => {
  return useMutation(async (body : { id:number, name:string, isActive:boolean }) => {
    const res = await axios.put(`/role/${body.id}`, body);

    if (res.status >= 200 && res.status < 300) {
      return res.data.result?.[0];
    }
    throwResponse(res)
  });
};