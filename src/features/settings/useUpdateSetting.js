import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-hot-toast";
const useUpdateSetting = () => {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
  });
  return { updateSetting, isUpdating };
};

export default useUpdateSetting;
