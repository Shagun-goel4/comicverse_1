export interface Comic {
  id: string;
  title: string;
  publisher: string;
  character: string;
  genre: string;
  price: number;
  releaseDate: string;
  coverImage: string;
  description: string;
  creators: {
    writer: string;
    artist: string;
  };
  issueNumber: number;
  featured?: boolean;
}

export const comics: Comic[] = [
  {
    id: "001",
    title: "Spider-Man: No Way Home",
    publisher: "Marvel",
    character: "Spider-Man",
    genre: "Superhero",
    price: 4.99,
    releaseDate: "2024-01-15",
    coverImage: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop",
    description: "The multiverse breaks open and Spider-Man must face enemies from across dimensions. An epic adventure that will change everything.",
    creators: {
      writer: "Zeb Wells",
      artist: "John Romita Jr.",
    },
    issueNumber: 1,
    featured: true,
  },
  {
    id: "002",
    title: "Batman: Dark Knight Returns",
    publisher: "DC",
    character: "Batman",
    genre: "Superhero",
    price: 5.99,
    releaseDate: "2024-01-20",
    coverImage: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
    description: "Bruce Wayne returns from retirement to don the cape and cowl one last time in this legendary tale of heroism.",
    creators: {
      writer: "Frank Miller",
      artist: "Frank Miller",
    },
    issueNumber: 1,
    featured: true,
  },
  {
    id: "003",
    title: "The Invincible",
    publisher: "Image",
    character: "Invincible",
    genre: "Superhero",
    price: 3.99,
    releaseDate: "2024-02-01",
    coverImage: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    description: "Mark Grayson discovers that his father's legacy is not what it seems. A thrilling coming-of-age superhero story.",
    creators: {
      writer: "Robert Kirkman",
      artist: "Cory Walker",
    },
    issueNumber: 1,
    featured: true,
  },
  {
    id: "004",
    title: "Wonder Woman: Genesis",
    publisher: "DC",
    character: "Wonder Woman",
    genre: "Superhero",
    price: 4.99,
    releaseDate: "2024-02-10",
    coverImage: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    description: "Diana Prince's origin story retold for a new generation. Witness the birth of a legend.",
    creators: {
      writer: "Tom King",
      artist: "Daniel Sampere",
    },
    issueNumber: 1,
  },
  {
    id: "005",
    title: "Iron Man: Extremis",
    publisher: "Marvel",
    character: "Iron Man",
    genre: "Superhero",
    price: 4.99,
    releaseDate: "2024-02-15",
    coverImage: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=400&h=600&fit=crop",
    description: "Tony Stark faces a new technology that could change everything - or destroy him. A modern Iron Man classic.",
    creators: {
      writer: "Warren Ellis",
      artist: "Adi Granov",
    },
    issueNumber: 6,
  },
  {
    id: "006",
    title: "Saga Volume One",
    publisher: "Image",
    character: "Alana & Marko",
    genre: "Fantasy",
    price: 14.99,
    releaseDate: "2024-01-05",
    coverImage: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop",
    description: "Star-crossed lovers from warring species risk everything to raise their daughter. An epic space opera.",
    creators: {
      writer: "Brian K. Vaughan",
      artist: "Fiona Staples",
    },
    issueNumber: 1,
  },
  {
    id: "007",
    title: "The Flash: Rebirth",
    publisher: "DC",
    character: "Flash",
    genre: "Superhero",
    price: 3.99,
    releaseDate: "2024-02-20",
    coverImage: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    description: "Barry Allen returns as the fastest man alive. The Speed Force has never been more dangerous.",
    creators: {
      writer: "Joshua Williamson",
      artist: "Carmine Di Giandomenico",
    },
    issueNumber: 1,
  },
  {
    id: "008",
    title: "X-Men: Days of Future Past",
    publisher: "Marvel",
    character: "X-Men",
    genre: "Superhero",
    price: 5.99,
    releaseDate: "2024-01-25",
    coverImage: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
    description: "In a dystopian future, the X-Men must prevent their own extinction. A time-traveling masterpiece.",
    creators: {
      writer: "Chris Claremont",
      artist: "John Byrne",
    },
    issueNumber: 141,
    featured: true,
  },
  {
    id: "009",
    title: "Hellboy: Seed of Destruction",
    publisher: "Dark Horse",
    character: "Hellboy",
    genre: "Horror",
    price: 4.99,
    releaseDate: "2024-02-05",
    coverImage: "https://images.unsplash.com/photo-1609743522471-83c84ce23e32?w=400&h=600&fit=crop",
    description: "The demon detective Hellboy investigates his mysterious origins. Dark, atmospheric horror at its finest.",
    creators: {
      writer: "Mike Mignola",
      artist: "Mike Mignola",
    },
    issueNumber: 1,
  },
  {
    id: "010",
    title: "Captain America: Winter Soldier",
    publisher: "Marvel",
    character: "Captain America",
    genre: "Superhero",
    price: 4.99,
    releaseDate: "2024-02-25",
    coverImage: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    description: "Steve Rogers confronts a ghost from his past in this gripping tale of espionage and betrayal.",
    creators: {
      writer: "Ed Brubaker",
      artist: "Steve Epting",
    },
    issueNumber: 1,
  },
  {
    id: "011",
    title: "Aquaman: Deep Dives",
    publisher: "DC",
    character: "Aquaman",
    genre: "Superhero",
    price: 3.99,
    releaseDate: "2024-03-01",
    coverImage: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    description: "Arthur Curry must protect both the surface world and Atlantis from an ancient threat.",
    creators: {
      writer: "Geoff Johns",
      artist: "Ivan Reis",
    },
    issueNumber: 1,
  },
  {
    id: "012",
    title: "The Walking Dead",
    publisher: "Image",
    character: "Rick Grimes",
    genre: "Horror",
    price: 2.99,
    releaseDate: "2024-01-10",
    coverImage: "https://images.unsplash.com/photo-1609743522471-83c84ce23e32?w=400&h=600&fit=crop",
    description: "Survivors navigate a world overrun by zombies. The dead are not the only threat.",
    creators: {
      writer: "Robert Kirkman",
      artist: "Tony Moore",
    },
    issueNumber: 1,
  },
];
