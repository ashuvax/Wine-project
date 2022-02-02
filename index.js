function crateWineRow(WineObject) {
  const table = document.getElementById("winesTable");
  const row = table.insertRow(1);
  const name = row.insertCell(0);
  const rating = row.insertCell(1);
  const location = row.insertCell(2);
  const image = row.insertCell(3);
  name.innerHTML = WineObject.wine;
  rating.innerHTML = WineObject.rating.average;
  location.innerHTML = WineObject.location;
  const newimage = document.createElement("img");
  newimage.src = WineObject.image;
  image.appendChild(newimage);
}
const xhr = new XMLHttpRequest();
xhr.open("get", "https://api.sampleapis.com/wines/reds");

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const data = JSON.parse(xhr.responseText).slice(0, 10);
    for (const wine of data) {
      crateWineRow(wine);
    }
  }
});
xhr.send(null);
