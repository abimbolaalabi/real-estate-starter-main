// import house images
import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";
// import house large images
import House1Lg from "./assets/img/houses/house1lg.png";
import House2Lg from "./assets/img/houses/house2lg.png";
import House3Lg from "./assets/img/houses/house3lg.png";
import House4Lg from "./assets/img/houses/house4lg.png";
import House5Lg from "./assets/img/houses/house5lg.png";
import House6Lg from "./assets/img/houses/house6lg.png";
import House7Lg from "./assets/img/houses/house7lg.png";
import House8Lg from "./assets/img/houses/house8lg.png";
import House9Lg from "./assets/img/houses/house9lg.png";
import House10Lg from "./assets/img/houses/house10lg.png";
import House11Lg from "./assets/img/houses/house11lg.png";
import House12Lg from "./assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "./assets/img/apartments/a1.png";
import Apartment2 from "./assets/img/apartments/a2.png";
import Apartment3 from "./assets/img/apartments/a3.png";
import Apartment4 from "./assets/img/apartments/a4.png";
import Apartment5 from "./assets/img/apartments/a5.png";
import Apartment6 from "./assets/img/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "./assets/img/apartments/a1lg.png";
import Apartment2Lg from "./assets/img/apartments/a2lg.png";
import Apartment3Lg from "./assets/img/apartments/a3lg.png";
import Apartment4Lg from "./assets/img/apartments/a4lg.png";
import Apartment5Lg from "./assets/img/apartments/a5lg.png";
import Apartment6Lg from "./assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
import Agent5 from "./assets/img/agents/agent5.png";
import Agent6 from "./assets/img/agents/agent6.png";
import Agent7 from "./assets/img/agents/agent7.png";
import Agent8 from "./assets/img/agents/agent8.png";
import Agent9 from "./assets/img/agents/agent9.png";
import Agent10 from "./assets/img/agents/agent10.png";
import Agent11 from "./assets/img/agents/agent11.png";
import Agent12 from "./assets/img/agents/agent12.png";

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "House 1",
    description:
      "A stunning, spacious family home located in the heart of Lawndale, CA. This 6-bedroom, 3-bathroom property offers 4200 sq ft of living space with modern amenities and a contemporary design. Built in 2016, this home is perfect for large families, featuring a beautiful backyard and close proximity to schools and parks.",
    image: House1,
    imageLg: House1Lg,
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "110000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    description:
      "A luxurious and well-maintained 6-bedroom house located in a peaceful neighborhood in Bridgewater, NJ. With 4200 sq ft of living space, this house built in 2016 offers elegant interiors, a spacious kitchen, and a private garden. Ideal for those who value comfort and style.",

    image: House2,
    imageLg: House2Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "140000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    description:
      "Located in Alexandria, VA, this modern 6-bedroom home features 4200 sq ft of living space. Built in 2016, it combines contemporary design with family-friendly features, including a large open-plan living area, ample storage, and a lovely garden for outdoor entertainment.",
    image: House3,
    imageLg: House3Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "170000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    description:
      "A beautiful 6-bedroom, 3-bathroom house in Cocoa, FL, offering 4200 sq ft of modern living space. Built in 2016, this property boasts spacious rooms, a well-designed layout, and a large backyard perfect for family gatherings. Situated in a friendly neighborhood, it's the perfect place to call home.",
    image: House4,
    imageLg: House4Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "200000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    description:
      "A charming 5-bedroom house located in Warminster, PA. With 4200 sq ft of living space, this 2015-built home offers a cozy and warm atmosphere, perfect for families. Enjoy modern amenities, a large open kitchen, and a spacious backyard for outdoor activities.",
    image: House5,
    imageLg: House5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2015",
    price: "210000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    description:
      "This impressive 6200 sq ft house in Butte, MT offers 6 bedrooms and 3 bathrooms. Built in 2014, it boasts a grand interior with a spacious living area, luxurious finishes, and a serene outdoor space. Ideal for large families looking for space and comfort.",
    image: House6,
    imageLg: House6Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2014",
    price: "220000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "Apartament",
    name: "Apartament 1",
    description:
      "A cozy 2-bedroom apartment located in Butte, MT. With 1200 sq ft of space, this modern apartment built in 2012 offers an open-plan living area, modern kitchen, and comfortable bedrooms. It's perfect for small families or couples looking for affordable luxury.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2012",
    price: "20000",
    agent: {
      image: Agent7,
      name: "Jawhar Shamil Naser",
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartament",
    name: "Apartament 2",
    description:
      "This charming 3-bedroom apartment in Warminster, PA is perfect for small families or first-time buyers. Offering 1000 sq ft of living space, it was built in 2011 and features a modern kitchen, a bright living area, and a convenient location near schools and shops.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2011",
    price: "30000",
    agent: {
      image: Agent8,
      name: "Juana Douglass",
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartament",
    name: "Apartament 3",
    description:
      "A modern 2-bedroom apartment in Cocoa, FL. With 1100 sq ft of living space, this home offers stylish interiors and a quiet location. Perfect for young professionals or small families looking for a comfortable and affordable living space.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "United States",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2011",
    price: "40000",
    agent: {
      image: Agent9,
      name: "Jerry Schenck",
      phone: "0123 456 78910",
    },
  },
  {
    id: 10,
    type: "House",
    name: "House 7",
    description:
      "A beautiful 5-bedroom house located in the peaceful suburbs of Lawndale, California. This home features a spacious living area, modern kitchen, and a large backyard, perfect for families looking for a quiet retreat. The house boasts modern finishes, including hardwood floors and updated bathrooms. Close to local parks and schools.",
    image: House7,
    imageLg: House7Lg,
    country: "Canada",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200 sq ft",
    year: "2015",
    price: "117000",
    agent: {
      image: Agent10,
      name: "Vera Levesque",
      phone: "0123 456 78910",
    },
  },
  {
    id: 11,
    type: "House",
    name: "House 8",
    description:
      "This spacious 7-bedroom house in Bridgewater, New Jersey offers a luxurious living experience. With a modern design, this property features high ceilings, large windows, and an open floor plan. Perfect for large families or those who love to entertain, this house includes a grand kitchen, multiple living areas, and a beautiful outdoor space with a garden.",
    image: House8,
    imageLg: House8Lg,
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200 sq ft",
    year: "2019",
    price: "145000",
    agent: {
      image: Agent11,
      name: "Sofia Gomes",
      phone: "0123 456 78910",
    },
  },
  {
    id: 12,
    type: "House",
    name: "House 9",
    description:
      "A stylish 4-bedroom house located in Alexandria, Virginia. This home features a modern design with high-end finishes, including a gourmet kitchen, luxury bathrooms, and a spacious master suite. The open-plan living and dining areas flow seamlessly into the outdoor patio, perfect for entertaining guests or enjoying family time.",
    image: House9,
    imageLg: House9Lg,
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600 sq ft",
    year: "2015",
    price: "139000",
    agent: {
      image: Agent12,
      name: "Raymond Hood",
      phone: "0123 456 78910",
    },
  },
  {
    id: 13,
    type: "House",
    name: "House 10",
    description:
      "A grand 5-bedroom house located in Cocoa, Florida. This home features spacious rooms with high ceilings, a large gourmet kitchen, and a private garden. The master suite offers a luxurious retreat with a spa-like bathroom and walk-in closet. Ideal for families looking for a blend of elegance and comfort.",
    image: House10,
    imageLg: House10Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200 sq ft",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "Patricia Tullert",
      phone: "0123 456 78910",
    },
  },
  {
    id: 14,
    type: "House",
    name: "House 11",
    description:
      "A charming 5-bedroom house located in the heart of Warminster, Pennsylvania. This home offers a welcoming atmosphere with its warm interiors, cozy living spaces, and a beautifully landscaped backyard. The updated kitchen and bathrooms provide modern conveniences, making it perfect for growing families or those who love to entertain.",
    image: House11,
    imageLg: House11Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200 sq ft",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "Daryl Hawker",
      phone: "0123 456 78910",
    },
  },
  {
    id: 15,
    type: "House",
    name: "House 12",
    description:
      "A luxurious 4-bedroom house situated in Butte, Montana. This property is perfect for those seeking a combination of modern style and comfort. It includes a spacious open-concept living area, high-end kitchen appliances, and a large backyard with stunning views. Ideal for families or those who enjoy outdoor living.",
    image: House12,
    imageLg: House12Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "Amado Smith",
      phone: "0123 456 78910",
    },
  },
  {
    id: 16,
    type: "Apartament",
    name: "Apartament 16",
    description:
      "A modern 2-bedroom apartment located in a quiet neighborhood of Butte, Montana. This unit offers a spacious living area, a well-equipped kitchen, and a cozy atmosphere perfect for small families or individuals. The large windows allow for plenty of natural light, making the space feel open and bright. Close to local amenities and parks.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300 sq ft",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "Kaitlyn Gonzalez",
      phone: "0123 456 78910",
    },
  },
  {
    id: 17,
    type: "Apartament",
    name: "Apartament 17",
    description:
      "This cozy 3-bedroom apartment located in Warminster, PA offers a convenient lifestyle for families and professionals alike. Featuring a compact yet functional layout, it includes a well-maintained kitchen, a comfortable living space, and serene bedrooms. With nearby shopping centers and schools, this property is ideal for anyone looking for a practical and affordable living space.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "Grover Robinson",
      phone: "0123 456 78910",
    },
  },
  {
    id: 18,
    type: "Apartament",
    name: "Apartament 18",
    description:
      "A bright and airy 3-bedroom apartment located in Cocoa, Florida. This unit is perfect for small families or couples, offering a relaxing environment with easy access to beaches and outdoor activities. The apartment features a spacious living room, modern kitchen, and comfortable bedrooms, with a charming balcony to enjoy the sunny weather.",
    image: Apartment6,
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "Karen Sorensen",
      phone: "0123 456 78910",
    },
  },
];
