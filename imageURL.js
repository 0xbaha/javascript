// https://stackoverflow.com/questions/9714525/javascript-image-url-verify

// checks to see if the url ends in any of these four extensions (jpeg|jpg|gif|png)
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
