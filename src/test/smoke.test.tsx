import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Minimal wrapper providing required context providers
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <MemoryRouter>{children}</MemoryRouter>
  </ThemeProvider>
);

// Lazy-import components to keep individual test failures isolated
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import FAQ from "@/components/sections/FAQ";
import EducationPricing from "@/components/sections/EducationPricing";
import AcademyPricing from "@/components/sections/AcademyPricing";
import WaitlistForm from "@/components/sections/WaitlistForm";

describe("Smoke tests — components render without crashing", () => {
  it("renders Header", () => {
    const { container } = render(<Header />, { wrapper: Wrapper });
    expect(container.firstChild).not.toBeNull();
    expect(screen.getByText("Master Founders Academy")).toBeInTheDocument();
  });

  it("renders Footer", () => {
    const { container } = render(<Footer />, { wrapper: Wrapper });
    expect(container.firstChild).not.toBeNull();
  });

  it("renders Hero", () => {
    const { container } = render(<Hero />, { wrapper: Wrapper });
    expect(container.firstChild).not.toBeNull();
  });

  it("renders Pillars with all 4 pillars", () => {
    render(<Pillars />, { wrapper: Wrapper });
    expect(screen.getByText("Foundational Education")).toBeInTheDocument();
    expect(screen.getByText("Advanced Founder Academy")).toBeInTheDocument();
    expect(screen.getByText("Reflections")).toBeInTheDocument();
    expect(screen.getByText("Founder Conversations")).toBeInTheDocument();
  });

  it("renders FAQ with questions", () => {
    render(<FAQ />, { wrapper: Wrapper });
    expect(screen.getByText("Things founders ask before joining")).toBeInTheDocument();
  });

  it("renders EducationPricing with real testimonial", () => {
    render(<EducationPricing />, { wrapper: Wrapper });
    expect(screen.getByText("£495")).toBeInTheDocument();
    // Ensure placeholder is gone
    expect(screen.queryByText("[Testimonial coming soon]")).toBeNull();
  });

  it("renders AcademyPricing", () => {
    render(<AcademyPricing />, { wrapper: Wrapper });
    expect(screen.getByText("£12,000")).toBeInTheDocument();
  });

  it("renders WaitlistForm with fields", () => {
    render(<WaitlistForm />, { wrapper: Wrapper });
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /join the waitlist/i })).toBeInTheDocument();
  });
});
