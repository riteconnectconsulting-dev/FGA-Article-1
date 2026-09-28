import { z } from "zod";

export const interestOptions = [
  "Opportunity Sourcing",
  "Proposal Development",
  "Compliance Guidance",
  "Capability Statements",
  "Contracting Strategy",
  "Registration & Certification",
  "Bid Development",
  "Administrative Support",
  "Not sure yet",
] as const;

export const consultationSchema = z.object({
  firstName: z.string().trim().min(1, "Required"),
  lastName: z.string().trim().min(1, "Required"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone number"),
  company: z.string().trim().min(1, "Required"),
  interest: z.enum(interestOptions, { message: "Select an option" }),
});

export type ConsultationRequest = z.infer<typeof consultationSchema>;
