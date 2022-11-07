import { useMutation } from "@tanstack/react-query";
import axios, { throwResponse } from 'axios_config'


export const useCreatImg = () => {
    return useMutation(async (data: any) => {
      const formdata = new FormData()
      formdata.append('file', data.file)
      const res = await axios.post(`/media-object/media`, formdata);
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
      throwResponse(res) 
    });
};