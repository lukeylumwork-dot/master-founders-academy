import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.enum(["education", "academy", "undecided"], {
    required_error: "Please select an option",
  }),
});

type FormValues = z.infer<typeof schema>;

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    trackEvent("waitlist_signup", { interest: data.interest });
    // Replace this with your actual form submission (e.g. Supabase, Mailchimp, Resend)
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Waitlist submission:", data);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-section bg-card">
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Stay in the loop
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4">
              Join the waitlist
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Get early access, new Reflections, and updates on upcoming cohorts. No noise — just the things worth your attention.
            </p>
          </div>

          {submitted ? (
            <div className="bg-background border border-border p-8 text-center">
              <p className="font-serif text-2xl text-foreground mb-2">You're on the list.</p>
              <p className="text-muted-foreground">
                We'll be in touch when something worth sharing is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                  What are you most interested in?
                </label>
                <select
                  id="interest"
                  {...register("interest")}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-colors appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="education">Foundational Education (£495/year)</option>
                  <option value="academy">Advanced Academy (£12,000/year)</option>
                  <option value="undecided">Not sure yet</option>
                </select>
                {errors.interest && (
                  <p className="mt-1 text-sm text-destructive">{errors.interest.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining…" : "Join the waitlist"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                No spam. Unsubscribe any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
