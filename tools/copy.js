const fs = require('fs');
const mkdirp = require('mkdirp');
var ncp = require('ncp').ncp;

(function main() {
    // Копируем необходимые файлы
    fs.createReadStream('src/config/config.json').pipe(fs.createWriteStream('dist/config/config.json'));
})();
