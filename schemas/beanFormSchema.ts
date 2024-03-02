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

const validateInput = (value: string) => {
  // Split the input based on spaces to check the number of words
  const words = value.split(' ').filter(Boolean); // filter(Boolean) removes empty strings from the array
  
  // If there's more than one word, check for commas
  if (words.length > 1) {
    return value.includes(',');
  }

  // If there's only one word, no comma is needed
  return true;
};

export const beanFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Must be longer than 2 characters!" }),
  origin: z.string().trim().refine(validateInput, {
    message: customMessage,
  }),
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
