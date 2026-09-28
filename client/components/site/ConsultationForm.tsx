import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { consultationSchema, interestOptions, type ConsultationRequest } from "@shared/consultation";
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FormValues = ConsultationRequest;

const fieldClass = "h-12 rounded-xl bg-white px-4 text-base";

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-1 text-xs text-red-600">{message}</p> : null;
}

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(consultationSchema),
    // "" is the unselected placeholder; the schema rejects it with "Select an option"
    defaultValues: { interest: "" as FormValues["interest"] },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center px-4 py-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-blue-700" />
        <h3 className="mt-4 text-2xl font-extrabold text-navy">Thank you!</h3>
        <p className="mt-2 text-slate-600">
          We received your request and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input aria-label="First name" placeholder="First name" autoComplete="given-name" className={fieldClass} {...register("firstName")} />
          <FieldError message={errors.firstName?.message} />
        </div>
        <div>
          <Input aria-label="Last name" placeholder="Last name" autoComplete="family-name" className={fieldClass} {...register("lastName")} />
          <FieldError message={errors.lastName?.message} />
        </div>
      </div>
      <div>
        <Input aria-label="Work email" type="email" placeholder="Work email" autoComplete="email" className={fieldClass} {...register("email")} />
        <FieldError message={errors.email?.message} />
      </div>
      <div>
        <Input aria-label="Phone number" type="tel" placeholder="Phone number" autoComplete="tel" className={fieldClass} {...register("phone")} />
        <FieldError message={errors.phone?.message} />
      </div>
      <div>
        <Input aria-label="Company name" placeholder="Company name" autoComplete="organization" className={fieldClass} {...register("company")} />
        <FieldError message={errors.company?.message} />
      </div>
      <div>
        <select
          aria-label="What are you interested in?"
          className={cn(
            "w-full rounded-xl border border-input bg-white px-4 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "h-12 invalid:text-muted-foreground",
          )}
          {...register("interest")}
        >
          <option value="">What are you interested in?</option>
          {interestOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <FieldError message={errors.interest?.message} />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="h-12 w-full rounded-xl bg-blue-700 text-base font-bold text-white hover:bg-blue-800">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Request a consultation <ArrowRight className="h-4 w-4" /></>}
      </Button>

      {status === "error" && (
        <p role="alert" className="text-center text-sm text-red-600">
          Something went wrong. Please try again in a moment.
        </p>
      )}

      <p className="flex items-center justify-center gap-2 text-xs text-slate-500">
        <ShieldCheck className="h-4 w-4" /> Your information is private. No obligation.
      </p>
    </form>
  );
}
