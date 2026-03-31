export const siteConfig = {
  name: "NeevShaktiSanstha",
  shortName: "NeevShakti",
  organizationType: "Non-Governmental Organization (NGO)",
  mottoHindi: "𓆩आधार से अधिकार𓆪",
  mottoEnglish:
    "\"Embracing divyangjans and strengthening the underprivileged sections to unleash their potential.\"",
  logoPath: "/logo-neevs.png",
  tagline: "Building dignity, accessibility, and opportunity for every ability.",
  description:
    "NeevShaktiSanstha is a disability support NGO working with individuals, families, volunteers, and partners to create inclusive pathways in education, livelihoods, advocacy, and community life.",
  email: "hello@neevshaktisanstha.org",
  phone: "+91 97173 95466",
  phoneNumbers: [
    { label: "S Joshi", number: "+91 97173 95466" },
    { label: "Richa", number: "+91 97173 95777" }
  ],
  address:
    "NeevShaktiSanstha, Community Support Centre, City Name, State, India - 000000",
  mapEmbedLabel: "Google Maps placeholder for NeevShaktiSanstha office location",
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "https://www.instagram.com/neevshaktisanstha" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "https://www.youtube.com/@NeevShaktiSanstha-shjo" }
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Mission & Vision", href: "/mission-vision" },
    { label: "Programs", href: "/programs" },
    { label: "Stories", href: "/stories" },
    { label: "Videos", href: "/videos" },
    { label: "Gallery", href: "/gallery" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" }
  ],
  footerLinks: [
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Volunteer", href: "/get-involved" },
    { label: "Support Us", href: "/donate" },
    { label: "Contact", href: "/contact" }
  ]
};

export const homeContent = {
  hero: {
    eyebrow: "Inclusive support for people with disabilities",
    title: "Creating stronger foundations for dignity, independence, and belonging.",
    description:
      "NeevShaktiSanstha works with children, youth, adults, and families to remove barriers and create real opportunities through support services, advocacy, education, and community partnerships.",
    primaryAction: { label: "Join Us", href: "/get-involved" },
    secondaryAction: { label: "Donate", href: "/donate" },
    tertiaryAction: { label: "Contact", href: "/contact" },
    highlights: [
      "Accessible, human-centered programs",
      "Community partnerships that last",
      "Support shaped by dignity and choice"
    ]
  },
  introduction:
    "We believe disability inclusion is not charity alone. It is about rights, respect, practical support, and shared community responsibility. Every program is designed to help individuals and families move forward with confidence.",
  impactStats: [
    { value: "1,500+", label: "Lives reached through support and advocacy" },
    { value: "120+", label: "Volunteers and community supporters engaged" },
    { value: "45+", label: "Local partnerships with schools and employers" },
    { value: "18", label: "Ongoing initiatives across education and access" }
  ],
  featuredProgramIds: [
    "skill-development",
    "education-support",
    "employment-assistance"
  ],
  featuredTestimonialIds: ["story-aarti", "story-imran", "story-kavya"]
};

export const aboutContent = {
  story:
    "NeevShaktiSanstha was created with a simple belief: every person deserves to participate in community life with dignity, support, and equal opportunity. We work closely with persons with disabilities and their families to understand local needs and design responses that are practical, compassionate, and sustainable.",
  backgroundPoints: [
    "We support individuals across different disabilities with respect for personal goals and lived experiences.",
    "We partner with families, schools, employers, local leaders, and volunteers to create long-term change.",
    "We focus on everyday access: education, mobility, confidence, livelihoods, awareness, and belonging."
  ],
  values: [
    {
      title: "Dignity First",
      text: "Every interaction, service, and campaign is rooted in respect, choice, and self-worth."
    },
    {
      title: "Accessibility Matters",
      text: "We advocate for environments, systems, and information that people can truly use."
    },
    {
      title: "Community Strength",
      text: "Inclusion grows when families, institutions, and neighbors work together."
    },
    {
      title: "Hope With Action",
      text: "We pair emotional support with clear, practical pathways toward independence."
    }
  ]
};

export const missionVisionContent = {
  mission:
    "To empower people with disabilities through inclusive programs, accessible opportunities, informed advocacy, and compassionate community support.",
  vision:
    "A society where people with disabilities are respected, included, heard, and able to participate fully in education, work, public life, and relationships.",
  values: [
    "Equal opportunity and non-discrimination",
    "Family-centered and community-based support",
    "Accessibility in physical, digital, and social spaces",
    "Listening to lived experience before designing solutions",
    "Partnerships that lead to practical change"
  ],
  promises: [
    "We create spaces where people are seen for their strengths, not reduced to their barriers.",
    "We build programs that are simple to access, easy to understand, and shaped by real needs.",
    "We welcome donors, volunteers, and institutions who want to contribute with empathy and accountability."
  ]
};

export const programs = [
  {
    id: "skill-development",
    icon: "SD",
    title: "Skill Development",
    summary:
      "Hands-on training, confidence building, and life skills support for youth and adults with disabilities.",
    details:
      "Programs may include digital basics, communication, creativity, self-advocacy, mobility confidence, and work readiness."
  },
  {
    id: "education-support",
    icon: "ES",
    title: "Education Support",
    summary:
      "Academic guidance, inclusive learning support, caregiver orientation, and school collaboration.",
    details:
      "We help children and families navigate learning barriers through tutoring support, referrals, accessibility guidance, and encouragement."
  },
  {
    id: "community-support",
    icon: "CS",
    title: "Community Support",
    summary:
      "Family counseling, support circles, local outreach, and dependable community connections.",
    details:
      "Community participation and emotional support can reduce isolation and build everyday resilience."
  },
  {
    id: "employment-assistance",
    icon: "EA",
    title: "Employment Assistance",
    summary:
      "Career guidance, employer sensitization, job readiness, and pathways to livelihood opportunities.",
    details:
      "We work with candidates and local employers to improve access to fair, supportive, and meaningful work."
  },
  {
    id: "awareness-campaigns",
    icon: "AC",
    title: "Awareness Campaigns",
    summary:
      "Public programs that challenge stigma and build understanding around disability inclusion.",
    details:
      "Campaigns are designed to be relatable, respectful, and practical for schools, workplaces, and neighborhoods."
  },
  {
    id: "accessibility-advocacy",
    icon: "AA",
    title: "Accessibility Advocacy",
    summary:
      "Promoting accessible spaces, information, transport, services, and digital experiences.",
    details:
      "We advocate for better design and more inclusive systems so participation becomes possible, not exceptional."
  }
];

export const testimonials = [
  {
    id: "story-aarti",
    name: "Aarti and Family",
    role: "Parent perspective",
    quote:
      "NeevShaktiSanstha helped us feel less alone. We found guidance, encouragement, and a community that listens with care.",
    story:
      "After struggling to find the right support, Aarti's family connected with the NGO through a neighborhood outreach camp. They received counseling, school guidance, and practical strategies that improved confidence at home and in the classroom."
  },
  {
    id: "story-imran",
    name: "Imran",
    role: "Youth program participant",
    quote:
      "The training sessions gave me confidence to speak up, learn new skills, and believe that work opportunities are possible for me.",
    story:
      "Imran joined a skill development initiative focused on communication, digital basics, and interview readiness. He later participated in local employer interactions and started planning a stronger path toward employment."
  },
  {
    id: "story-kavya",
    name: "Kavya",
    role: "Community volunteer",
    quote:
      "What inspired me most was the dignity-centered approach. The NGO supports people with warmth while also pushing for structural change.",
    story:
      "Kavya first volunteered during an awareness event and now helps coordinate local accessibility campaigns. She values the way families, beneficiaries, and volunteers collaborate as equals."
  },
  {
    id: "story-raghav",
    name: "Raghav",
    role: "Livelihood support participant",
    quote:
      "I was nervous at first, but the guidance and patience made a real difference. I now feel more prepared to explore work opportunities.",
    story:
      "With mentorship and routine practice, Raghav improved communication confidence and identified suitable livelihood options with support from the employment assistance team."
  },
  {
    id: "story-meera",
    name: "Meera",
    role: "Inclusive education partner",
    quote:
      "Their team brings empathy and clarity into difficult situations. Families trust them because they respond with respect and consistency.",
    story:
      "As a local education partner, Meera has seen the value of caregiver support sessions and school coordination in helping children stay engaged with learning."
  }
];

export const videoTestimonials = [
  {
    title: "A beautiful day filled with learning, fun, creativity, and smiles",
    description:
      "Latest upload from the official NeevShaktiSanstha YouTube channel, published on March 30, 2026.",
    url: "https://www.youtube.com/watch?v=fKH3HZNb8rU"
  },
  {
    title: "With love, support, and opportunity, every child can bloom",
    description:
      "Official channel upload published on March 30, 2026, highlighting care, encouragement, and growth.",
    url: "https://www.youtube.com/watch?v=cpLFVSVam74"
  },
  {
    title: "Their strength inspires us every single day",
    description:
      "Official channel upload published on March 30, 2026, reflecting resilience and inclusive community support.",
    url: "https://www.youtube.com/watch?v=pNE1H7VD_hc"
  }
];

export const galleryPhotos = [
  {
    src: "/gallery/photo-01.jpeg",
    title: "Community support moment",
    alt: "NeevShaktiSanstha community activity with participants and supporters.",
    description: "A glimpse of NGO field work, inclusion, and shared community engagement."
  },
  {
    src: "/gallery/photo-02.jpeg",
    title: "Program participation",
    alt: "Participants engaging in a NeevShaktiSanstha program session.",
    description: "Showcasing participation, learning, and a welcoming support environment."
  },
  {
    src: "/gallery/photo-03.jpeg",
    title: "Group gathering",
    alt: "A group photo from an NGO event or support gathering.",
    description: "Moments like these help reflect belonging, connection, and visibility."
  },
  {
    src: "/gallery/photo-04.jpeg",
    title: "Inclusive outreach",
    alt: "NeevShaktiSanstha outreach activity involving the local community.",
    description: "Community outreach helps strengthen awareness and support networks."
  },
  {
    src: "/gallery/photo-05.jpeg",
    title: "Shared celebration",
    alt: "Participants and supporters gathered during an NGO celebration or event.",
    description: "A warm image that reflects dignity, joy, and collective participation."
  },
  {
    src: "/gallery/photo-06.jpeg",
    title: "Support in action",
    alt: "An NGO support activity captured during an in-person session.",
    description: "Useful for highlighting direct engagement with beneficiaries and families."
  },
  {
    src: "/gallery/photo-07.jpeg",
    title: "Volunteer involvement",
    alt: "Volunteers participating in a NeevShaktiSanstha activity.",
    description: "This image emphasizes collaboration between volunteers and the community."
  },
  {
    src: "/gallery/photo-08.jpeg",
    title: "Awareness event",
    alt: "A photograph from a public awareness or advocacy event.",
    description: "Awareness efforts help build understanding around disability inclusion."
  },
  {
    src: "/gallery/photo-09.jpeg",
    title: "Community gathering",
    alt: "People gathered together during an NGO program or public event.",
    description: "A strong addition for showing scale, participation, and solidarity."
  },
  {
    src: "/gallery/photo-10.jpeg",
    title: "Program snapshot",
    alt: "A candid program photograph from NeevShaktiSanstha activities.",
    description: "Suitable for reflecting ongoing NGO work and positive engagement."
  },
  {
    src: "/gallery/photo-11.jpeg",
    title: "Together with purpose",
    alt: "Participants and supporters pictured together during an NGO activity.",
    description: "This reinforces the warm, community-oriented identity of the organization."
  },
  {
    src: "/gallery/photo-12.jpeg",
    title: "Event memory",
    alt: "A memorable moment from a NeevShaktiSanstha event.",
    description: "A useful gallery item for showing lived experiences and event participation."
  },
  {
    src: "/gallery/photo-13.jpeg",
    title: "Community connection",
    alt: "A photo showing connection and participation within an NGO activity.",
    description: "Ideal for building trust through authentic visual storytelling."
  },
  {
    src: "/gallery/photo-14.jpeg",
    title: "Field engagement",
    alt: "An NGO field interaction with beneficiaries or community members.",
    description: "This image helps communicate grassroots involvement and support."
  },
  {
    src: "/gallery/photo-15.jpeg",
    title: "Inclusive participation",
    alt: "People participating together in an inclusive NGO-led environment.",
    description: "A clear reflection of access, dignity, and community presence."
  },
  {
    src: "/gallery/photo-16.jpeg",
    title: "Volunteer and beneficiary moment",
    alt: "A meaningful interaction during NeevShaktiSanstha activities.",
    description: "A strong visual for support, trust, and human connection."
  },
  {
    src: "/gallery/photo-17.jpeg",
    title: "Hope in community",
    alt: "A closing gallery image representing hope, togetherness, and NGO impact.",
    description: "A hopeful image that rounds out the gallery with warmth and optimism."
  }
];
export const involvementOptions = [
  {
    title: "Volunteer With Us",
    summary:
      "Support events, outreach drives, program coordination, mentoring, and accessible community activities."
  },
  {
    title: "Partner With Us",
    summary:
      "Schools, companies, social groups, and institutions can collaborate on inclusion-focused initiatives."
  },
  {
    title: "Become a Sponsor",
    summary:
      "Help sustain key programs such as education support, assistive needs, awareness efforts, or training sessions."
  },
  {
    title: "Join Community Campaigns",
    summary:
      "Take part in local advocacy, accessibility awareness, and neighborhood participation efforts."
  }
];

export const donationContent = {
  intro:
    "Your support helps us deliver direct services, build community awareness, and strengthen inclusive opportunities for people with disabilities and their families.",
  cards: [
    {
      title: "Support A Program",
      text: "Contribute to education, training, outreach, or accessibility initiatives that need regular backing."
    },
    {
      title: "Sponsor A Participant",
      text: "Help cover resources, transport support, assistive needs, or learning materials for an individual."
    },
    {
      title: "Fund Community Action",
      text: "Enable awareness sessions, local events, family circles, and inclusion campaigns in underserved areas."
    }
  ],
  supportAreas: [
    "Learning support and community-based education assistance",
    "Skills training and livelihood readiness sessions",
    "Accessible event materials and outreach campaigns",
    "Family support meetings and inclusive community activities"
  ]
};

export const contactContent = {
  heading:
    "We would love to hear from families, donors, volunteers, schools, and community partners.",
  formNote:
    "This demo form is ready for backend integration. You can later connect it to email, a CRM, or a serverless form handler."
};






