export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuTab {
  id: string;
  label: string;
  categories: MenuCategory[];
}

export const menuTabs: MenuTab[] = [
  {
    id: "a-la-carte",
    label: "À La Carte",
    categories: [
      {
        title: "Dim Sum & Small Plates",
        items: [
          { name: "Prawn & Scallop Siu Mai", description: "Steamed dumplings with scallop, ginger, chilli crisp" },
          { name: "Crispy Aromatic Duck Rolls", description: "Hoisin, cucumber, spring onion" },
          { name: "Szechuan Pepper Chicken Skewers", description: "Sesame, coriander, Szechuan peppercorn" },
          { name: "Truffle & Mushroom Bao", description: "Wild mushrooms, black truffle, yuzu kosho" },
        ],
      },
      {
        title: "Large Plates",
        items: [
          { name: "Cantonese Black Cod", description: "Champagne & yuzu honey, pickled kohlrabi, caviar" },
          { name: "Wagyu Beef Fillet", description: "Truffle & shallot ponzu, sesame, wasabi" },
          { name: "Peking Duck", description: "Classic pancakes, cucumber, spring onion, hoisin" },
          { name: "Vegetable Tempura", description: "Assorted seasonal vegetables, ponzu dipping sauce" },
        ],
      },
      {
        title: "Sushi & Modern Asian Specials",
        items: [
          { name: "Signature Sushi Selection", description: "Chef's choice of nigiri and maki rolls" },
          { name: "Yellowtail Sashimi", description: "Truffle ponzu, micro shiso, gold leaf" },
        ],
      },
      {
        title: "Signature Desserts",
        items: [
          { name: "Cherry Blossom Cheesecake", description: "Sakura infused, yuzu gel, matcha crumb" },
          { name: "Chocolate & Szechuan Fondant", description: "Warm chocolate cake, Szechuan pepper ice cream" },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    categories: [
      {
        title: "Signature Cocktails",
        items: [
          { name: "The Phoenix", description: "Japanese whisky, yuzu, ginger, honey, smoke" },
          { name: "Cherry Blossom Martini", description: "Sake, lychee, rose, edible flower" },
          { name: "Dragon's Breath", description: "Mezcal, chili, lime, agave, flame" },
          { name: "Imperial Old Fashioned", description: "Bourbon, osmanthus, orange bitters, gold leaf" },
        ],
      },
      {
        title: "Wine & Champagne",
        items: [
          { name: "Curated Wine List", description: "Fine selection from around the world" },
          { name: "Champagne by the Glass", description: "Dom Pérignon, Krug, Veuve Clicquot" },
          { name: "Sake Selection", description: "Premium Junmai Daiginjo and Nigori varieties" },
        ],
      },
    ],
  },
  {
    id: "set-menus",
    label: "Set Menus",
    categories: [
      {
        title: "All Day Set Menu",
        items: [
          { name: "Two Course Menu", description: "Starter and main, selected dishes" },
          { name: "Three Course Menu", description: "Starter, main, and dessert selection" },
        ],
      },
      {
        title: "Evening Set Menu",
        items: [
          { name: "Tattu Tasting Experience", description: "Chef's curated tasting menu with wine pairing option" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    categories: [
      {
        title: "Dessert Menu",
        items: [
          { name: "Cherry Blossom Cheesecake", description: "Sakura infused, yuzu gel, matcha crumb" },
          { name: "Chocolate & Szechuan Fondant", description: "Warm chocolate cake, Szechuan pepper ice cream" },
          { name: "Tropical Fruit Spring Rolls", description: "Crispy spring rolls, coconut ice cream, passionfruit" },
          { name: "Matcha Tiramisu", description: "Green tea mascarpone, sake biscuit, red bean" },
        ],
      },
    ],
  },
  {
    id: "vegetarian",
    label: "Vegetarian / Vegan",
    categories: [
      {
        title: "Vegetarian Tasting Menu",
        items: [
          { name: "Vegetarian Set Menu", description: "Curated plant-based tasting experience" },
          { name: "Truffle & Mushroom Bao", description: "Wild mushrooms, black truffle, yuzu kosho" },
          { name: "Vegetable Tempura", description: "Assorted seasonal vegetables, ponzu dipping sauce" },
        ],
      },
    ],
  },
];
