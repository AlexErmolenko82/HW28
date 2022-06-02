function resizeImageUrl(url, requiredHeight) {
  //import url "https://picsum.photos/id/0/5616/3744"
  const arrWords = url.split("/");
  if (arrWords[5] > arrWords[6]) {
    arrWords[5] = Math.round((arrWords[5] / arrWords[6]) * requiredHeight);
    arrWords[6] = requiredHeight;
  } else {
    arrWords[6] = Math.round((arrWords[6] / arrWords[5]) * requiredHeight);
    arrWords[5] = requiredHeight;
  }
  return arrWords.join("/"); //transform url to "https://picsum.photos/id/0/150/100"
}

export default resizeImageUrl;
