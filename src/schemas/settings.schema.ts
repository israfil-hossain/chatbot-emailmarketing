import { z } from "zod"

const MAX_UPLOAD_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export type DomainSettingsProps = {
    domain?:string 
    image?:any 
    welcomeMessage?:string 
}

export const AddDomainSchema = z.object({
    domain: z
        .string()
        .min(4, { message: "A Domain must be at least 4 characters" })
        .refine(
            (value) =>
                /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,}$/.test(value ?? ''),
            { message: "This is not a valid domain" }
        ),
    // image: z
    //     .any()
    //     .refine((files) => files?.length > 0, {
    //         message: "Image is required",
    //     })
    //     .refine((files) => files?.[0]?.size <= MAX_UPLOAD_SIZE, {
    //         message: "Your file size must be less than 2MB",
    //     })
    //     .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
    //         message: "Only JPG, JPEG & PNG are accepted file formats",
    //     }),
    //     image: z
     image: z.instanceof(File, { message: "Image is required" })
});

export const DomainSettingsSchema = z.object({
     domain: z
        .string()
        .min(4, { message: "A Domain must be at least 4 characters" })
        .refine(
            (value) =>
                /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,}$/.test(value ?? ''),
            { message: "This is not a valid domain" }
        ),
        image: z.instanceof(File, { message: "Image is required" }), 
        welcomeMessage: z.string().min(6,'The message must be atleast 6 chracters').optional().or(z.literal('').transform(()=> undefined))
})

export type HelpDeskQuestionsProps = {
    question: string 
    answer: string 
}

export const HelpDeskQuestionsSchema = z.object({
    question: z.string().min(3, 'Question cannot be left empty'),
    answer: z.string().min(3, 'Answer cannot be left empty'),
})

export const FilterQuestionsSchema = z.object({
    question: z.string().min(3, 'Question cannot be left empty'),
})

export const AddProductSchema = z.object({
    name: z.string().min(3,{ message: 'The name must have atleast 3 chracters'}), 
    image: z.instanceof(File, { message: "Image is required" })
})