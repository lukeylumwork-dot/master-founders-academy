import { BookOpen, GraduationCap, Mic, Users } from "lucide-react";

export const pillars = [
  {
    id: "education",
    icon: BookOpen,
    title: "Foundational Education",
    subtitle: "Principle-led learning",
    description:
      "Structured, classroom-style training on the fundamentals that matter: decision making, storytelling, negotiation, and practical problem solving. Built from real scenarios, not abstract theory.",
    topics: ["Founder decision making", "Narrative & storytelling", "Negotiation frameworks", "Problem solving methods"],
  },
  {
    id: "academy",
    icon: GraduationCap,
    title: "Advanced Founder Academy",
    subtitle: "For later-stage founders",
    description:
      "A selective programme for founders navigating the complexities beyond Seed and Series A. Organisational design, strategic trade-offs, and second-order thinking for scaled leadership.",
    topics: ["Scaling complexity", "Organisational design", "Strategic trade-offs", "Second-order effects"],
  },
  {
    id: "reflections",
    icon: Mic,
    title: "Reflections",
    subtitle: "Short-form thinking",
    description:
      "Informal, human reflections recorded between meetings and while walking. Thoughts on the day-to-day reality of building—honest, unpolished, and far from the performative founder culture.",
    topics: ["Lived experience", "Honest observations", "Quiet insights", "Real moments"],
  },
  {
    id: "conversations",
    icon: Users,
    title: "Founder Conversations",
    subtitle: "Multiple perspectives",
    description:
      "Ongoing dialogues with founders working through live challenges. Sometimes with Andy and Chris from ReelFlow. Designed to surface new insight through varied viewpoints rather than prescriptive advice.",
    topics: ["Live challenges", "Work in progress", "Collaborative thinking", "Real decisions"],
  },
];
