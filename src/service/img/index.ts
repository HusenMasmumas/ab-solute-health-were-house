import { useMutation } from "@tanstack/react-query";
import axios from 'axios_config'

axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'

export const useCreatImg = () => {
    return useMutation(async (data: FormData) => {
      const res = await axios.post(`/media-object/media`, data);
  
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
    throw new Error(res.data.message)  
    });
};