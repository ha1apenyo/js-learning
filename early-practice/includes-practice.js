const allowedExtensions = ['.jpg', '.png', '.gif'];

function isImageFile(filename) {
    for (let extension of allowedExtensions) {
        if (filename.includes(extension) &&
           filename.indexOf(extension) ===  filename.length - extension.length) {
            return true;
        }
    }
    return false;
}

console.log(isImageFile("icon.gif"));