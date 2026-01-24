const projects = [
  {
    title: "Glybyna",
    description:
      "An intimate space designed to reflect stillness and thoughtful living.",
    location: "Vysotsky Residential Complex, Netishyn",
    size: "69.47 m²",
    img1: "https://images.unsplash.com/photo-1676088933950-bae87cf34fee?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tysha",
    description:
      "A calm and spacious interior where minimalism meets warmth and purpose.",
    location: "Pidzamche Town Residential Complex, Lviv",
    size: "54 m²",
    img1: "https://images.unsplash.com/photo-1723984790027-ffe34efb18f6?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1754611331891-949e7838f199?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Brauni",
    description:
      "A compact space with rich comforting tones and smart zoning solutions.",
    location: "Auroom Forest, Residential Complex, Vynimky.",
    size: "53.91 m²",
    img1: "https://images.unsplash.com/photo-1632119580908-ae947d4c7691?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img2: "https://images.unsplash.com/photo-1731562956926-f0a08548cc2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const stats = [
  {
    id: 1,
    stat: "10+ years",
    desc: "of combined design experience",
  },
  {
    id: 2,
    stat: "5000+ m²",
    desc: "designed across Europe and beyond",
  },
  {
    id: 3,
    stat: "100%",
    desc: "tailor-made Interiors",
  },
  {
    id: 4,
    stat: "2 architects",
    desc: "behind every detail",
  },
];

const items = [
  {
    id: 1,
    title: "Bold Choices",
    img: "https://images.unsplash.com/photo-1664347761197-b04b93f3feba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Modern Living",
    img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Calm Spaces",
    img: "https://images.unsplash.com/photo-1649083048597-d7b4f1e8a386?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721522288229-1c09300d84da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1704040686510-b747ff423ebb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1744149002999-f5f06714808a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const reviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    quote: "They designed not just a home — but a feeling",
    text: "We reached out to PRYDUMANO after seeing their past work and knew we wanted to collaborate. They were kind, responsive, and attentive to our needs. They guided us toward a natural style that elevated our vision.",
    author: "Oleh & Kateryna, Kyiv",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    quote: "I finally enjoy coming home",
    text: "I used to think my flat lacked potential. The layout options I hadn't considered completely transformed how I live. Every corner is now intentional and functional while feeling incredibly soft and bright.",
    author: "Oleh & Kateryna, Kyiv",
  },
];

const servicePackages = [
  {
    title: "Layout Planning",
    price: "$45 / m²",
    includes: [
      "Site visit and measurements",
      "3-4 planning options tailored to your lifestyle and space",
      "3D layout of the selected option",
      "Basic drawings",
    ],
  },
  {
    title: "Technical Project",
    price: "$55 / m²",
    includes: ["Everything in Layout Planning", "Full technical documentation"],
  },
  {
    title: "Technical Project + Concept",
    price: "$65 / m²",
    includes: [
      "Everything in Technical Project",
      "Visual moodboards and color palettes",
    ],
  },
];

const servicesBgImage =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80";

const steps = [
  {
    id: "1",
    title: "Introduction & Discovery",
    details: [
      "Online meeting",
      "Presentation of a past project",
      "Discussion of your vision and budget",
      "Defining whether we're the right fit for each other",
    ],
  },
  {
    id: "2",
    title: "Site Visit & Planning Start",
    isHighlighted: true, // For that dark/glassy block in your image
    details: [
      "Site measurements",
      "Contract signing",
      "Completion of a client questionnaire",
      "Development of a measurement plan",
    ],
  },
  {
    id: "3",
    title: "Layout Planning",
    details: [
      "Creation of 3–4 planning options",
      "Edits based on feedback and final approval",
      "3D model of the selected layout",
    ],
  },
  {
    id: "4",
    title: "Concept Development",
    details: [
      "Mood and inspiration discussion",
      "Creation of a personalized interior concept",
      "Selection of furniture and materials within your budget",
    ],
  },
  {
    id: "5",
    title: "Visualization & Technical Package",
    details: [
      "Photorealistic 3D visualizations for each room",
      "Full technical drawings for implementation",
      "Detailed budget for all items and materials",
    ],
  },
  {
    id: "6",
    title: "Final Delivery & Support",
    details: [
      "Project album in both digital and printed format",
      "Professional support during renovation — up to 2 years post-completion",
    ],
  },
];

export {
  projects,
  stats,
  steps,
  items,
  heroImages,
  reviews,
  servicePackages,
  servicesBgImage,
};
