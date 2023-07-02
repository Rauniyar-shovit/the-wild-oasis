import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as apiDeleteBooking } from "../../services/apiBookings";
const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: apiDeleteBooking,
    onSuccess: (data) => {
      toast.success(`Booking was deleted successfully `);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteBooking, isDeletingBooking };
};

export default useDeleteBooking;
