/**
 * Placeholder content for the Vague Bleue home page.
 *
 * Mock data only — passed into the home view via props (never imported into a
 * component directly). Copy is original; asset paths point at the real on-court
 * photography in `public/assets/` (the hero keeps its dedicated background plate).
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface FeaturedCollection {
  brand: string;
  title: string;
  blurb: string;
  cta: string;
  image: string;
  imageAlt: string;
}

export interface MembershipStat {
  value: string;
  caption: string;
  image: string;
  imageAlt: string;
}

export interface HeroContent {
  titleLines: string[];
  taglineLines: string[];
  backgroundImage: string;
  backgroundAlt: string;
  collections: FeaturedCollection[];
  membership: MembershipStat;
}

export interface TrustSlide {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  /** Four oversized ghost words shown behind this coach (2 rows of 2). */
  headline: [string, string, string, string];
}

export interface TrustContent {
  percent: { value: string; caption: string };
  badge: {
    index: string;
    title: string;
    body: string;
  };
  slides: TrustSlide[];
}

export interface Program {
  index: string;
  name: string;
  description: string;
  href: string;
}

export interface ProgramsContent {
  eyebrow: string;
  titleLines: string[];
  programs: Program[];
}

export interface CourtCard {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: "clay" | "blue";
}

export interface FacilitiesContent {
  icon: string;
  iconAlt: string;
  titleLines: string[];
  body: string;
  courts: CourtCard[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsContent {
  eyebrow: string;
  titleLines: string[];
  stats: StatItem[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  titleLines: string[];
  testimonials: Testimonial[];
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface FooterContent {
  blurb: string;
  columns: FooterColumn[];
  contact: { email: string; phone: string; address: string };
  social: NavLink[];
  legal: NavLink[];
  copyright: string;
}

export interface HomeContent {
  brand: string;
  navLeft: NavLink[];
  cta: string;
  hero: HeroContent;
  trust: TrustContent;
  programs: ProgramsContent;
  facilities: FacilitiesContent;
  stats: StatsContent;
  testimonials: TestimonialsContent;
  footer: FooterContent;
}

export const homeContent: HomeContent = {
  brand: "Vague Bleue",
  navLeft: [
    { label: "Programs & Coaches", href: "#programs" },
    { label: "Club & Events", href: "#facilities" },
  ],
  cta: "DM to Sign Up",
  hero: {
    titleLines: ["Master The Art"],
    taglineLines: ["Precision.", "Discipline.", "Power."],
    backgroundImage: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000&auto=format&fit=crop",
    backgroundAlt: "Coach Brett with young Ninjas class",
    collections: [
      {
        brand: "Vague Bleue Pro",
        title: "Featured Gear",
        blurb: "Tour-grade rackets and apparel, picked by our coaching team.",
        cta: "Shop the kit",
        image: "/assets/images/img4.jpg",
        imageAlt: "Player driving a backhand on a hard court",
      },
      {
        brand: "Court Series",
        title: "Summer Drop",
        blurb: "Breathable on-court apparel built for long sessions.",
        cta: "View the line",
        image: "/assets/images/img3.jpg",
        imageAlt: "Player stretching for a forehand on clay",
      },
      {
        brand: "Academy Kit",
        title: "Junior Range",
        blurb: "Lighter frames and grips sized for developing players.",
        cta: "Browse juniors",
        image: "/assets/images/img5.png",
        imageAlt: "Player set in a ready stance on clay",
      },
    ],
    membership: {
      value: "100",
      caption: "Members on court",
      image: "/assets/images/img1.jpg",
      imageAlt: "Player waiting to return on a clay court",
    },
  },
  trust: {
    percent: { value: "100%", caption: "Coaching built around your game" },
    badge: {
      index: "#01",
      title: "Trusted by serious players",
      body: "From first-timers to nationally ranked juniors, players train here because the progress shows up on the scoreboard.",
    },
    slides: [
      {
        name: "Brett Bryant",
        role: "Third Dan Black Belt",
        image: "/assets/images/img2.png",
        imageAlt: "Head coach set in a ready stance on clay",
        headline: ["Expert", "Result-", "Driven", "Coaching"],
      },
      {
        name: "Coaching Staff",
        role: "Dedicated Instructors",
        image: "/assets/images/img5.png",
        imageAlt: "Dedicated taekwondo instructors",
        headline: ["Sharper", "Faster", "Stronger", "Player"],
      },
      {
        name: "Junior Team",
        role: "Future Black Belts",
        image: "/assets/images/img1.jpg",
        imageAlt: "Junior taekwondo team in line",
        headline: ["Future", "Champions", "Start", "Here"],
      },
    ],
  },
  programs: {
    eyebrow: "Training programs",
    titleLines: ["Pathways to", "Black Belt"],
    programs: [
      {
        index: "01",
        name: "Junior Development",
        description: "Fundamentals, footwork, and match play for ages 6–14.",
        href: "#junior",
      },
      {
        index: "02",
        name: "Performance Squad",
        description: "High-volume training for competitive and ranked players.",
        href: "#performance",
      },
      {
        index: "03",
        name: "Adult Clinics",
        description: "Small-group sessions to sharpen technique and fitness.",
        href: "#adult",
      },
      {
        index: "04",
        name: "Private Coaching",
        description: "One-to-one sessions tailored to your goals and schedule.",
        href: "#private",
      },
    ],
  },
  facilities: {
    icon: "/assets/images/img3.jpg",
    iconAlt: "Player stretching for a forehand on clay",
    titleLines: ["Train", "Like a", "Black Belt"],
    body: "Our methodology is designed to foster a culture of discipline, resilience, and constant growth. From fundamental drills to advanced board breaking, every session pushes your limits and hones your technique.",
    courts: [
      {
        name: "Kids & Teens",
        description: "Building confidence, respect, and foundational martial arts skills for all ages.",
        image: "/assets/videos/reel1.mp4",
        imageAlt: "Black belt performing poomsae",
        tone: "clay",
      },
      {
        name: "Board Breaking",
        description: "Develop explosive power and precise technique through targeted breaking drills.",
        image: "/assets/videos/reel2.mp4",
        imageAlt: "Students hitting kicking shields",
        tone: "blue",
      },
    ],
  },
  stats: {
    eyebrow: "By the numbers",
    titleLines: ["Built on", "Tradition"],
    stats: [
      { value: "15", label: "Years Experience" },
      { value: "3rd", label: "Dan Black Belt" },
      { value: "100", label: "Members training" },
      { value: "15", label: "Years of experience" },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    titleLines: ["Voices of", "our Dojang"],
    testimonials: [
      {
        quote:
          "The level of instruction is unmatched. Brett's 15 years of experience show in every drill. It transformed my confidence entirely.",
        name: "Marc Antoine",
        role: "Blue Belt Student",
        avatar: "/assets/avatares/6339f3000c19ca36b334c4112414e95f.jpg",
      },
      {
        quote:
          "A welcoming community with an uncompromising standard of excellence. Training here has become the best part of my daily routine.",
        name: "Julien Tremblay",
        role: "Adult Practitioner",
        avatar: "/assets/avatares/6568484d9a0be86bd9591731c02cae28.jpg",
      },
      {
        quote:
          "More than just kicks and punches—Vague Bleue teaches genuine respect and discipline. The kids program is truly exceptional.",
        name: "Sarah G.",
        role: "Proud Parent",
        avatar: "/assets/avatares/8b083774fbdc0fde07641da720c9e945.jpg",
      },
    ],
  },
  footer: {
    blurb:
      "A members' tennis club and academy where focused coaching meets championship courts.",
    columns: [
      {
        heading: "Programs",
        links: [
          { label: "Junior Development", href: "#junior" },
          { label: "Performance Squad", href: "#performance" },
          { label: "Adult Clinics", href: "#adult" },
          { label: "Private Coaching", href: "#private" },
        ],
      },
      {
        heading: "Club",
        links: [
          { label: "Membership", href: "#membership" },
          { label: "Facilities", href: "#facilities" },
          { label: "Events", href: "#club" },
          { label: "Pro Shop", href: "#shop" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Coaches", href: "#programs" },
          { label: "Careers", href: "#careers" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    contact: {
      email: "info@vaguebleue.ca",
      phone: "+1 (212) 555-0148",
      address: "120 Court Lane, New York",
    },
    social: [
      { label: "Instagram", href: "#instagram" },
      { label: "X", href: "#x" },
      { label: "YouTube", href: "#youtube" },
      { label: "LinkedIn", href: "#linkedin" },
    ],
    legal: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
    copyright: "© 2026 Vague Bleue TaeKwonDo. All rights reserved.",
  },
};
