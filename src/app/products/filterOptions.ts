const sortOptions = [
  { value: "newest", label: "Newest", defaultChecked: true },
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price low to high" },
  { value: "price-high", label: "Price high to low" },
];

const sizeOptions = [
  ["xs", "s"],
  ["m", "l"],
  ["xl", "xxl"],
  ["34", "36"],
  ["37", "38"],
  ["39", "40"],
  ["41", "42"],
  ["44", "46"],
  ["48", ""],
];

const categoryOptions = [
  ["cardigans", "coats"],
  ["dresses", "jackets"],
  ["shoes", "skirts"],
  ["sweaters", "tshirts"],
  ["tops", "trousers"],
  ["waistcoats", ""],
];

const colourOptions = [
  ["beige", "black"],
  ["brown", "coral"],
  ["green", "grey"],
  ["hot-pink", "khaki"],
  ["light-green", "orange"],
  ["pink", "sand"],
  ["soft-pink", "taupe"],
];

const categoryLabels = {
  cardigans: "Cardigans",
  coats: "Coats",
  dresses: "Dresses",
  jackets: "Jackets",
  shoes: "Shoes",
  skirts: "Skirts",
  sweaters: "Sweaters",
  tshirts: "T-shirts",
  tops: "Tops & Blouses",
  trousers: "Trousers",
  waistcoats: "Waistcoats",
};

const colourLabels = {
  beige: "Beige",
  black: "Black",
  brown: "Brown",
  coral: "Coral",
  green: "Green",
  grey: "Grey",
  "hot-pink": "Hot pink",
  khaki: "Khaki",
  "light-green": "Light green",
  orange: "Orange",
  pink: "Pink",
  sand: "Sand",
  "soft-pink": "Soft pink",
  taupe: "Taupe",
};

export {
  categoryLabels,
  categoryOptions,
  colourLabels,
  colourOptions,
  sizeOptions,
  sortOptions,
};
