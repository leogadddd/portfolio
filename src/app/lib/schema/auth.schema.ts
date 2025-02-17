import { z } from "zod";
import { validateForm } from "@/lib/schema/zod";

export const SignupSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&]/, {
        message:
          "Password must contain at least one special character (@$!%*?&)",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

// Smaller functions for specific use cases
export const validateSignup = (formData: {
  email: string;
  password: string;
  confirmPassword: string;
}) => validateForm(SignupSchema, formData);

export const validateLogin = (formData: { email: string; password: string }) =>
  validateForm(loginSchema, formData);
