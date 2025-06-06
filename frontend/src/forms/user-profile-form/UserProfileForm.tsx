import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is Required"),
  addressLine1: z.string().min(1, "addressLine1 is Required"),
  city: z.string().min(1, "city is Required"),
  country: z.string().min(1, "country is Required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const userProfileForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<UserFormData>({
    resolvers: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-500 rounded-lg md:p-10"
      >
        <div>
            <h2 className="text-2xl font-bold">User Profile Form</h2>
            <FormDescription>
                View and Change your Profile Information
            </FormDescription>
        </div>
        <FormField control={form.control} name="email" render={({field}) => (
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input {...field} disabled className="bg-white"/>
                </FormControl>
            </FormItem>
        )}/>
      </form>
    </Form>
  );
};

export default userProfileForm;
