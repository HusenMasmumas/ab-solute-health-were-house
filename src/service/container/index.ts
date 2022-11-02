import { useMutation } from "@tanstack/react-query";
import axios from "axios_config";
import { IContainer } from "./interface";

export const useCreateContainer = () => {
    return useMutation(async (body :IContainer) => {
      const res = await axios.post(`/container`, body);
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
      throw new Error(res.data.message)  
    });
};