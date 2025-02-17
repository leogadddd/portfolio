import { z, ZodError, ZodIssue } from "zod";

export const parseZodErrors = (error: z.ZodError) => {
  return error.errors
    .map((err) => {
      const path = err.path.join(".");

      // Replace "stack.0" or "keywords.1" with readable names
      const formattedPath = path
        .replace(/stack\.\d+/, "stack") // Replace stack index
        .replace(/keywords\.\d+/, "keywords"); // Replace keywords index

      return `${formattedPath}: ${err.message}`;
    })
    .join("\n");
};

// Generic validator function
export const validateForm = <T>(schema: z.ZodSchema<T>, formData: T) => {
  const result = schema.safeParse(formData);
  return result.success
    ? { success: true, data: result.data }
    : { success: false, errors: parseZodErrors(result.error) };
};
