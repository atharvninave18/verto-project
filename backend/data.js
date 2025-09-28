const products = [
  {
    id: 1,
    name: "iPhone 9",
    price: 549,
    imageUrl: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    description: "An apple mobile which is nothing like apple"
  },
  {
    id: 2,
    name: "iPhone X",
    price: 899,
    imageUrl: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip"
  },
  {
    id: 3,
    name: "Samsung Universe 9",
    price: 1249,
    imageUrl: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe"
  },
  {
    id: 4,
    name: "OPPO F19",
    price: 280,
    imageUrl: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "OPPO F19 is officially announced on April 2021."
  },
  {
    id: 5,
    name: "Huawei P30",
    price: 499,
    imageUrl: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    description: "Huawei’s re-badged P30 Pro New Edition unveiled in Germany and UK."
  },
  {
    id: 6,
    name: "MacBook Pro",
    price: 1749,
    imageUrl: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    description: "MacBook Pro 2021 with mini-LED display may launch between September, November."
  },
  {
    id: 7,
    name: "Samsung Galaxy Book",
    price: 1499,
    imageUrl: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip."
  },
  {
    id: 8,
    name: "Microsoft Surface Laptop 4",
    price: 1499,
    imageUrl: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    description: "Style and speed. Stand out on HD video calls backed by Studio Mics."
  },
  {
    id: 9,
    name: "Infinix INBOOK",
    price: 1099,
    imageUrl: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty."
  },
  {
    id: 10,
    name: "HP Pavilion 15-DK1056WM",
    price: 1099,
    imageUrl: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    description: "HP Pavilion 15 Gaming Laptop 10th Gen Core i5, GTX 1650, Windows 10."
  },
  {
    id: 11,
    name: "Perfume Oil",
    price: 13,
    imageUrl: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
    description: "Impression of Acqua Di Gio by Giorgio Armani concentrated attar perfume oil."
  },
  {
    id: 12,
    name: "Brown Perfume",
    price: 40,
    imageUrl: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
    description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml."
  },
  {
    id: 13,
    name: "Fog Scent Xpressio Perfume",
    price: 13,
    imageUrl: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
    description: "Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting."
  },
  {
    id: 14,
    name: "Non-Alcoholic Perfume Oil",
    price: 120,
    imageUrl: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
    description: "Original Al Munakh® Non-Alcoholic Concentrated Perfume Oil."
  },
  {
    id: 15,
    name: "Eau De Perfume Spray",
    price: 30,
    imageUrl: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
    description: "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality."
  },
  {
    id: 16,
    name: "Hyaluronic Acid Serum",
    price: 19,
    imageUrl: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
    description: "L'Oreal Paris Hyaluron Expert Replumping Serum with 1.5% Hyaluronic Acid."
  },
  {
    id: 17,
    name: "Tea Tree Oil 30ml",
    price: 12,
    imageUrl: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
    description: "Tea tree oil with terpinen-4-ol to kill certain bacteria."
  },
  {
    id: 18,
    name: "Oil Free Moisturizer 100ml",
    price: 40,
    imageUrl: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
    description: "Dermive Oil Free Moisturizer with SPF 20 with ceramides & hyaluronic acid."
  },
  {
    id: 19,
    name: "Skin Beauty Serum",
    price: 46,
    imageUrl: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
    description: "Rorec collagen hyaluronic acid white face serum rice 15ml."
  },
  {
    id: 20,
    name: "Freckle Treatment Cream 15gm",
    price: 70,
    imageUrl: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
    description: "Fair & Clear pure freckle cream helps fade freckles & dark spots."
  },
  {
    id: 21,
    name: "Daal Masoor 500g",
    price: 20,
    imageUrl: "https://i.dummyjson.com/data/products/21/thumbnail.png",
    description: "Fine quality branded product. Keep in a cool and dry place."
  },
  {
    id: 22,
    name: "Elbow Macaroni 400g",
    price: 14,
    imageUrl: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
    description: "Bake Parlor Big Elbow Macaroni - 400 gm."
  },
  {
    id: 23,
    name: "Orange Essence Flavour",
    price: 14,
    imageUrl: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
    description: "Orange essence food flavour for cakes and baking."
  },
  {
    id: 24,
    name: "Cereals Muesli Fruit Nuts",
    price: 46,
    imageUrl: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
    description: "Fauji cereal muesli 250gm box with fruits & nuts."
  },
  {
    id: 25,
    name: "Gulab Powder 50g",
    price: 70,
    imageUrl: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
    description: "Dry Rose Flower Powder Gulab Powder 50 Gram."
  },
  {
    id: 26,
    name: "Plant Hanger",
    price: 41,
    imageUrl: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
    description: "Boho Decor Plant Hanger for home wall decoration."
  },
  {
    id: 27,
    name: "Flying Wooden Bird",
    price: 51,
    imageUrl: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
    description: "3D shaped wooden birds with adhesive tape. Material: MDF."
  },
  {
    id: 28,
    name: "3D Embellishment Art Lamp",
    price: 20,
    imageUrl: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
    description: "3D LED lamp sticker wall art. Cell operated (included)."
  },
  {
    id: 29,
    name: "Handcraft Chinese Vase",
    price: 60,
    imageUrl: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
    description: "Luxury palace home decor ceramic vase with brass fruit plate."
  },
  {
    id: 30,
    name: "Key Holder",
    price: 30,
    imageUrl: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
    description: "Metallic material with four key hooks. Reliable & durable."
  }
];



export default products;