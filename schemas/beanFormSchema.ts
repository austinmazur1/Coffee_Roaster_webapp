import { z } from "zod";
import { RoastLevels, BrewMethods } from "@/types/beanTypes";


export const roastLevelOptions = Object.entries(RoastLevels).map(
  ([id, name]) => ({ id, name })
);
export const brewMethodOptions = Object.entries(BrewMethods).map(
  ([id, name]) => ({ id, name })
);

const customMessage = "For multiple items, separate with a comma. Single items should not contain commas.";

const notesSchema = z.string()
  .trim() // First, trim whitespace from the start and end of the input string.
  .transform(value => 
    // The transformation step:
    value.split(',') // Split the input string by commas into an array of substrings.
    .map(note => note.trim()) // Trim whitespace from the start and end of each substring.
    .filter(note => note !== '') // Filter out any empty strings resulting from consecutive commas or commas at the start/end.
  );

  const originSchema = z.object({
    country: z.string().trim().min(1, { message: "Country is required!" }), // Assuming country is always required
    region: z.string().trim().min(1, { message: "Region is required!" }), // Region can be optional; adjust validation as needed
  });

export const beanFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Must be longer than 2 characters!" }),
  origin: originSchema,
  process: z.string().trim().min(5),
  elevation: z.string().trim().min(3),
  notes: notesSchema,
  roastLevel: z.nativeEnum(RoastLevels, {
    errorMap: () => {
      return { message: "Please choose an option" };
    },
  }),
  brewMethods: z.nativeEnum(BrewMethods, {
    errorMap: () => {
      return { message: "Please choose an option" };
    },
  }),
  roaster: z.string().trim(),
});
