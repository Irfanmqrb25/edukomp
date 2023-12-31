import * as z from "zod";

export const getCourseSchema = z.object({
  id: z.number(),
});

export const getCoursesSchema = z.object({
  limit: z.number().default(10),
  offset: z.number().default(0),
  categories: z.string().optional().nullable(),
  sort: z.string().optional().nullable(),
  price_range: z.string().optional().nullable(),
});

export const searchParamsSchema = z.object({
  page: z.string().default("1"),
  per_page: z.string().default("8"),
  from: z.string().optional(),
  to: z.string().optional(),
  sort: z.string().optional().default("createdAt.desc"),
});

export const coursesSearchParamsSchema = searchParamsSchema
  .omit({ from: true, to: true })
  .extend({
    categories: z.string().optional(),
    price_range: z.string().optional(),
  });
