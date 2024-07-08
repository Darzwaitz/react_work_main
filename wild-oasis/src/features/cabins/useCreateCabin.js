import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const queryClient = useQueryClient();

const { mutate: createCabin, isLoading: isCreating } = useMutation({
  mutationFn: createEditCabin,
  onSuccess: () => {
    toast.success("New cabin successfully created");
    queryClient.invalidateQueries({
      queryKey: ["cabins"],
    });
    reset();
  },
  onError: (err) => toast.error(err.message),
});
