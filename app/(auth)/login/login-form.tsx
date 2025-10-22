"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoginBody, LoginBodyType } from "@/app/schema/auth.schema";
import { useLoginMutation } from "@/app/queries/useAuth";

export default function LoginForm() {
  const loginMutation = useLoginMutation();

  const router = useRouter();
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (data: LoginBodyType) => {
    if (loginMutation.isPending) return;
    try {
      const result = await loginMutation.mutateAsync(data);
      console.log("Login result:", result);
      toast("Success", {
        description: "Login successful!",
      });
      localStorage.setItem("access_token", result.accessToken);
      localStorage.setItem("refresh_token", result.refreshToken);
      localStorage.setItem("user", JSON.stringify(result));
      router.push("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6")}
        onSubmit={form.handleSubmit(handleSubmit, (err) => {
          console.log(err);
        })}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="grid gap-2">
                    <Label className="font-bold" htmlFor="username">
                      Username
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="username"
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
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" required {...field} />
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
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
            Login with Email
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </form>
    </Form>
  );
}
