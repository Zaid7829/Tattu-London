export interface Review {
  id: number;
  quote: string;
  author: string;
  source: string;
  rating?: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    quote:
      "The most stunning restaurant interior I've seen in London. Every detail is Instagram-worthy, and the food matches the incredible atmosphere.",
    author: "Guest Reviewer",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "A perfect spot for special occasions. The service was impeccable, and the modern Asian flavors were unlike anything else in the city.",
    author: "Food Enthusiast",
    source: "Google Reviews",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The cocktails are works of art, and the presentation of every dish is theatrical. A truly elevated dining experience from start to finish.",
    author: "London Diner",
    source: "Google Reviews",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "From the rooftop views to the attention to detail in every dish, Tattu delivers on every level. The cherry blossom cheesecake is a must-try.",
    author: "Travel Blogger",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "We celebrated our anniversary here and it was unforgettable. The private dining room felt opulent and the staff made it truly special.",
    author: "Celebration Guest",
    source: "Google Reviews",
    rating: 5,
  },
];

export const reviewThemes = [
  { label: "Beautiful Interior", icon: "Palace" },
  { label: "Great for Special Occasions", icon: "Sparkles" },
  { label: "Stylish Presentation", icon: "Camera" },
  { label: "Modern Asian Flavors", icon: "UtensilsCrossed" },
  { label: "Attentive Service", icon: "Heart" },
  { label: "Premium Atmosphere", icon: "Crown" },
];
