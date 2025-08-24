const mongoose = require('mongoose');

main()
.then(() => console.log('connected'))

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/swan-botanicals');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const listingSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});

const Listing = mongoose.model('Listing', listingSchema);


module.exports = Listing;