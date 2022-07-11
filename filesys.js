//using filesystem model to access the file system

const fs = require('fs');

// fs.readdirSync('./');
// console.log(files);   -> this is a syncrhonous call

fs.readdir('../', function(err, files) { //this is an asyncrhonous call (BETTER)
    if (err) {
        console.log('Error', err);
    } else {
        for(var i = 0; i < files.length; i++) 
        {
            if(files[i].includes('.pdf'))
            {
                console.log(files[i]);
            }
        }
    }
}
);

//this finds a cert