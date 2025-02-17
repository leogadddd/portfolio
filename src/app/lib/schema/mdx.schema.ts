import { z } from "zod";
import { validateForm } from "@/lib/schema/zod";

export const mdxSchema = z.object({
  content_html: z.string().min(1, "Content HTML is required"),
  content_json: z.string().min(1, "Content JSON is required"),
  read_time: z.coerce
    .number()
    .int()
    .min(0, "Read time must be a non-negative integer"),
});

export const validateUpdateContent = (formData: {
  content_html: string;
  content_json: string;
  read_time: number;
}) => validateForm(mdxSchema, formData);
