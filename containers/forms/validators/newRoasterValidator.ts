import {  z } from "zod";
import {RoasterType} from '@/types/roasterTypes'

const locationSchema = z.object({
    address: z.string().trim().min(4, {message: "Must be longer than 4 characters!" }),
    geo: z.object({
        lat: z.number(),
        long: z.number()
    })
})

const socialMediaSchema = z.object({
    instagram: z.object({
        url: z.string(),
        handle: z.string(),
    }),
})

export const roasterFormSchema = z.object({
    name: z.string().trim().min(2, { message: "Must be longer than 2 characters!" }),
    location: locationSchema,
    contactInfo: z.object({
        email: z.string(),
        phoneNumber: z.string(),
    }),
    website: z.string(),
    socialMedia: socialMediaSchema,
    // beans: z.array().optional()
    beans: z.any()
})