
const mongoose = require('mongoose');
const Listing = require("../models/allprod.js");



let products = [
  {
    "name": "Petal Dew Hydrating Cleanser",
    "price": 32,
    "image": "/images/SAN_8504.jpg"
  },
  {
    "name": "Golden Hour Renewal Serum",
    "price": 68,
    "image": "/images/SAN_8508.jpg"
  },
  {
    "name": "Velvet Cloud Moisturizer",
    "price": 55,
    "image": "/images/SAN_8523.jpg"
  },
  {
    "name": "Moonbeam Brightening Eye Cream",
    "price": 48,
    "image": "/images/SAN_8527.jpg"
  },
  {
    "name": "Wild Rose Calming Toner",
    "price": 28,
    "image": "/images/SAN_8540.jpg"
  },
  {
    "name": "Sunstone Vitamin C Elixir",
    "price": 72,
    "image": "/images/SAN_8555.jpg"
  },
  {
    "name": "Forest Floor Purifying Mask",
    "price": 42,
    "image": "/images/SAN_8592.jpg"
  },
  {
    "name": "Nurturing Barrier Repair Cream",
    "price": 60,
    "image": "/images/SAN_8598.jpg"
  },
  {
    "name": "Herbal Infusion Gentle Scrub",
    "price": 35,
    "image": "/images/SAN_8619.jpg"
  },
  {
    "name": "Morning Mist Hydrating Essence",
    "price": 38,
    "image": "/images/SAN_8622.jpg"
  },
  {
    "name": "Midnight Bloom Retinol Alternative",
    "price": 85,
    "image": "/images/SAN_8634.jpg"
  },
  {
    "name": "Citrus Grove Brightening Cleanser",
    "price": 34,
    "image": "/images/SAN_8638.jpg"
  },
  {
    "name": "Dewdrop Hyaluronic Acid Serum",
    "price": 65,
    "image": "/images/SAN_8641.jpg"
  },
  {
    "name": "Soothing Aloe Vera Gel",
    "price": 25,
    "image": "/images/SAN_8644.jpg"
  },
  {
    "name": "Luxe Botanical Facial Oil",
    "price": 75,
    "image": "/images/SAN_8657.jpg"
  },
  {
    "name": "Revitalizing Ginseng Eye Serum",
    "price": 52,
    "image": "/images/SAN_8660.jpg"
  },
  {
    "name": "Chamomile Soothing Sleep Mask",
    "price": 45,
    "image": "/images/SAN_8684.jpg"
  },
  {
    "name": "Willow Bark Blemish Treatment",
    "price": 29,
    "image": "/images/SAN_8686.jpg"
  },
  {
    "name": "Peptide Plumping Moisturizer",
    "price": 58,
    "image": "/images/SAN_8692.jpg"
  },
  {
    "name": "Green Tea Balancing Toner",
    "price": 28,
    "image": "/images/SAN_8698.jpg"
  }
];


const seedDB = async () => {
    // Optional: Delete existing data to start fresh
    await Listing.deleteMany({});
    
    // Use insertMany to add all the products from your array
    await Listing.insertMany(products);
    console.log('Database seeded successfully!');
    
};

main()
.then(() => console.log('connected'))
seedDB()

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/swan-botanicals');


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



