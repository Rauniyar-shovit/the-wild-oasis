import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

const useEditCabin = () => {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin was edited successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
  });
  return { editCabin, isEditing };
};

export default useEditCabin;
