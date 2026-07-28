export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "interior" | "food" | "cocktail" | "ambience" | "private";
  label: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/assets/tattu-interior-1.png",
    alt: "Tattu London interior dining room",
    category: "interior",
    label: "Interior",
  },
  {
    id: 2,
    src: "/assets/tattu-food-1.png",
    alt: "Signature dish at Tattu London",
    category: "food",
    label: "Cuisine",
  },
  {
    id: 3,
    src: "/assets/tattu-cocktail-1.png",
    alt: "Signature cocktail at Phoenix Bar",
    category: "cocktail",
    label: "Cocktails",
  },
  {
    id: 4,
    src: "/assets/tattu-hero.png",
    alt: "Rooftop dining ambience",
    category: "ambience",
    label: "Ambience",
  },
  {
    id: 5,
    src: "/assets/tattu-private-dining.png",
    alt: "Private dining room",
    category: "private",
    label: "Private Hire",
  },
  {
    id: 6,
    src: "/assets/tattu-interior-1.png",
    alt: "Bar area at Tattu London",
    category: "interior",
    label: "Bar",
  },
  {
    id: 7,
    src: "/assets/tattu-food-1.png",
    alt: "Dim sum selection",
    category: "food",
    label: "Dim Sum",
  },
  {
    id: 8,
    src: "/assets/tattu-cocktail-1.png",
    alt: "Cocktail preparation",
    category: "cocktail",
    label: "Mixology",
  },
];
