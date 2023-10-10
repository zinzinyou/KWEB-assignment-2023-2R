const fs = require('fs');
const path = require('path');
const util = require('util');

const getDirList = util.promisify(fs.readdir);
const getFileStat = util.promisify(fs.stat);

const PATH = '../KWEB-backend/chap2';

const searchDirectory = async directory => {
    const files = await getDirList(directory);
    files.forEach(async file => {
        const filePath = path.join(directory, file);
        const stat = await getFileStat(filePath);
        if (stat.isDirectory()) await searchDirectory(filePath);
        else if (path.extname(filePath) === '.js') console.log(filePath);
    }); 
};

(async () => {
    try {
        await searchDirectory(PATH);
    } catch (err) {
        console.error(err);
    }
})();