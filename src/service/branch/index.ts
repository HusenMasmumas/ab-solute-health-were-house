import { useMutation } from "@tanstack/react-query";
import axios from "axios_config";
import { IPostBranch } from "./interface";

export const useCreateBranch = () => {
    return useMutation(async (body :IPostBranch) => {
      const res = await axios.post(`/branch`, body);
  
      if (res.status >= 200 && res.status < 300) {
        return res.data.result?.[0];
      }
    throw new Error(res.data.message)  
    });
};