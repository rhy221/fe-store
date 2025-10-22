"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useRegisterMutation } from "@/app/queries/useAuth";
import { RegisterBody, RegisterBodyType } from "@/app/schema/auth.schema";

export default function RegisterForm() {
  const registerMutation = useRegisterMutation();
  const router = useRouter();

  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (data: RegisterBodyType) => {
    if (registerMutation.isPending) return;
    try {
      const result = await registerMutation.mutateAsync(data);
      console.log(result);
      toast("Success", {
        description: "Please login to your account",
      });

      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6")}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Register to your account</h1>
          <p className="text-muted-foreground text-sm">
            Create an account to start chatting with your friends and family.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-2">
                    <Label className="font-bold" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      {...field}
                    />
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label className="font-bold" htmlFor="password">
                        Password
                      </Label>
                    </div>
                    <Input id="password" type="password" required {...field} />
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label className="font-bold" htmlFor="confirmPassword">
                        Confirm Password
                      </Label>
                    </div>
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      {...field}
                    />
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <Button variant="outline" className="w-full">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M22 7L12 14L2 7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span className="ml-2">Continue with Google</span>
          </Button>
        </div>
        <div className="text-center text-sm">
          <p className="text-muted-foreground text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline underline-offset-4">
              Login
            </a>
          </p>
          <p className="text-muted-foreground text-sm text-balance">
            By registering, you agree to our{" "}
            <a href="#" className="underline underline-offset-4">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-4">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </Form>
  );
}
