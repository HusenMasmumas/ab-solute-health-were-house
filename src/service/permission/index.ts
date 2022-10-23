import {useQuery, UseQueryResult} from '@tanstack/react-query'
import axios from 'axios_config';
import { IGlobal } from 'service/IGlobal.interface';
import { IRole } from './interface';


export const useGetRole = (): UseQueryResult<IGlobal<IRole[]>> => {
    return useQuery(["get-role"], async () => {
      const res = await axios.get(`/role/form`);
  
      if (res.status >= 200 && res.status < 300)  {
        return res.data;
      } else {
        throw new Error(res.data.message) 
      }
    });
  };