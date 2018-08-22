const fs = require('fs');

function readFile(uri) {
    return new Promise((reslove, reject) => {
        fs.readFile(uri, (err, data) => {
            console.log('reading file')
            if(err) {
                reject(err);
                throw err
            }
            reslove(data);
        })
    })
}

readFile('index.js').then(
    (data) => {
        console.log(data.toString());
    },
    (err) => {
        console.log(err);
    }
)
