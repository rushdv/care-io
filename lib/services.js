export const services = [
  {
    id: "baby-care",
    title: "Baby Care",
    shortDesc: "Professional babysitting and infant care services.",
    description:
      "Our certified baby care specialists provide attentive, loving care for your little ones. From newborns to toddlers, we ensure a safe and nurturing environment while you're away.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600",
    charge: 500,
    unit: "hour",
    features: ["Certified caregivers", "24/7 availability", "Activity planning", "Meal preparation"],
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    shortDesc: "Compassionate care and support for senior family members.",
    description:
      "We provide dignified, compassionate care for elderly family members. Our trained professionals assist with daily activities, medication reminders, and companionship.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600",
    charge: 600,
    unit: "hour",
    features: ["Daily activity assistance", "Medication reminders", "Companionship", "Health monitoring"],
  },
  {
    id: "sick-care",
    title: "Sick People Care",
    shortDesc: "Dedicated home care for ill or recovering family members.",
    description:
      "Our skilled caregivers provide specialized home care for sick or recovering individuals. We work alongside medical professionals to ensure the best recovery environment.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600",
    charge: 800,
    unit: "hour",
    features: ["Post-surgery care", "Chronic illness support", "Physical therapy assistance", "Doctor coordination"],
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);
