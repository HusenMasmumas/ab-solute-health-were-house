import {useMutation} from '@tanstack/react-query'
import axios from 'axios_config';
import { IUserLogin } from './interface';

export const useLogin = () => {
    return useMutation(async (data: IUserLogin) => {
      const res = await axios.post(`/auth/login`, data);
  
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
    throw new Error(res.data.message?.TH)  
    });
};
