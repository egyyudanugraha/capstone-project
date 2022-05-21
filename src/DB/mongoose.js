const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.MONGODB_URI}`);
