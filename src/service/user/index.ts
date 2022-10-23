import {useMutation} from '@tanstack/react-query'
import axios from 'axios_config';
import { IUser } from './interface';

export const useCreateUser = () => {
    return useMutation(async (data: IUser) => {
      const res = await axios.post(`/user`, data);
  
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
    throw new Error(res.data.message)  
    });
};