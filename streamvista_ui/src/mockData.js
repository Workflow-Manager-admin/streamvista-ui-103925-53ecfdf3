export const mockCarousels = [
  {
    title: "Featured",
    items: [
      {
        id: 1,
        title: "The Night Hunter",
        image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80",
        description: "A mysterious thriller on the hunt for the truth.",
        genres: ["Thriller", "Crime"],
        cast: ["John Doe", "Jane Camera"]
      },
      {
        id: 2,
        title: "Star Games 2022",
        image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=400&q=80",
        description: "The world unites for the biggest sports event.",
        genres: ["Sports", "Drama"],
        cast: ["Ronald Fast", "Daisy Ace"]
      },
      {
        id: 3,
        title: "Hidden Tales",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        description: "Dive into stories never told.",
        genres: ["Adventure"],
        cast: ["Finn Novel", "Penny Plot"]
      }
    ]
  },
  {
    title: "Latest Movies",
    items: [
      {
        id: 4,
        title: "Midnight Pulse",
        image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
        description: "Beat of the city after dark.",
        genres: ["Action", "Drama"],
        cast: ["Night King", "Jules Beat"]
      },
      {
        id: 5,
        title: "Desert Rose",
        image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=400&q=80",
        description: "A journey across sun-baked lands.",
        genres: ["Drama", "Romance"],
        cast: ["Ella Sand", "Kyle Desert"]
      }
    ]
  },
  {
    title: "Top TV Shows",
    items: [
      {
        id: 6,
        title: "Laugh Line",
        image: "https://images.unsplash.com/photo-1421098518790-5a14be6bda46?auto=format&fit=crop&w=400&q=80",
        description: "Comedy that keeps you on the edge.",
        genres: ["Comedy"],
        cast: ["Lucy Chuckle", "Mick Giggle"]
      },
      {
        id: 7,
        title: "Dark Signal",
        image: "https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=400&q=80",
        description: "Signals from the unknown.",
        genres: ["Sci-Fi", "Mystery"],
        cast: ["Rhea Ray", "Zack Zero"]
      }
    ]
  }
];

export const mockTabs = [
  { key: "Home", carousels: [0, 1] },
  { key: "TV", carousels: [2] },
  { key: "Movies", carousels: [1] },
  { key: "Sports", carousels: [0] },
  { key: "News", carousels: [2] },
  { key: "Premium", carousels: [1, 2] }
];
