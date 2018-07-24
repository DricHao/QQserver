const mongoose = require('mongoose');

const uri = 'mongodb://localhost/qq';

mongoose.connect(uri, (err)=> {
    if(err) {
        console.log(err);
        process.exit(1);
    }
    console.log('database is connecting!')
})
