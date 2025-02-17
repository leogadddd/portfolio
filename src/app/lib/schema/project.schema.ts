import { z } from "zod";
import { validateForm } from "@/lib/schema/zod";

export const projectSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  subtitle: z.string().min(1, { message: "Subtitle is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  slug: z
    .string()
    .min(1, { message: "Slug is required" })
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, {
      message:
        "Slug must be URL-friendly (lowercase, numbers, and dashes only)",
    }),
  stack: z
    .array(z.string().min(1, { message: "Each stack item must not be empty" }))
    .min(1, { message: "At least one stack technology is required" }),
  keywords: z
    .array(z.string().min(1, { message: "Each keyword must not be empty" }))
    .min(3, { message: "At least 3 keywords are required" }),
});

export const validateNewProject = (formData: {
  name: string;
  subtitle: string;
  description: string;
  slug: string;
  stack: string[];
  keywords: string[];
}) => validateForm(projectSchema, formData);
