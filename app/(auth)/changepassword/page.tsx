import http from "@/lib/http";
import z from "zod";

const changePasswordBodySchema = z.object({
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    password: z
      .string()
      .min(6)
      .max(100)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{6,100}$/),
    confirmPassword: z.string().min(6).max(100),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Password does not match",
        path: ["confirmPassword"],
      });
    }
  });

type changePasswordBodyType = z.infer<typeof changePasswordBodySchema>;

const resetPass = async (body: changePasswordBodyType) => {
    const response = await http.post("")
}
export default function ChangePasswordPage()
{
    return (
        <form
                        id="register-form"
                        method="post"
                        className={cn("flex flex-col gap-6")}
                        onSubmit={form.handleSubmit(onSubmit)}
                      >
                        <div className="flex flex-col items-center gap-2 text-center">
                          <h1 className="text-2xl font-bold">Forgot your password</h1>
                          <p className="text-muted-foreground text-sm">
                            Enter your email to send reset password mail
                          </p>
                        </div>
                        <FieldGroup>
                          <Controller
                            name="email"
                            control={form.control}
                            render={({field, fieldState}) => (
                              <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>
                                  Email
                                </FieldLabel>
                                <Input
                                  {...field}
                                  id={field.name}
                                  type="email"
                                  placeholder="m@example.com"
                                  required>
                                </Input>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                  )}
                              </Field>
                            )}>
                          </Controller>
                        </FieldGroup>
                
                        <Field>
                          <Button type="submit" className="w-full">
                            Send Email
                          </Button>
                        </Field>
                      </form> 
    );
}