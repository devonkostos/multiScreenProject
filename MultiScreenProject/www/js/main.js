var title = "<h1>Grand Canyon</h1>",
    histHead = "<h2>History</h2>",
    histInfo = "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide and attains a depth of over a mile (6,093 feet or 1,857 meters). The canyon and adjacent rim are contained within  Grand Canyon National Park, the Kaibab National Forest, Grand Canyon-Parashant National Monument, the Hualapai Indian Reservation, the Havasupai     Indian Reservation and the Navajo Nation. President Theodore Roosevelt was a major proponent of preservation of the Grand Canyon area, and visited    it on numerous occasions to hunt and enjoy the scenery.",
    tourHead = "<h2>Tourist Information</h2>",
    tourInfo = "Most visitors (90%) see the South Rim area of the Grand Canyon from overlooks accessed by free park shuttle buses or by their personal vehicles. The South Rim is open all year. A much smaller number of people (10%) see the canyon from the North Rim of the park, which lies just 10 miles (16 km) across the canyon from the South Rim, but is a 220 mile/ 354 km drive by car. The North Rim has a short season. Lodging and food services are open between May 15th and October 15th of each year.";

window.onload = function() {
    document.getElementById("title").innerHTML = title;
    document.getElementById("natLandmark").width = "150";
    document.getElementById("natLandmark").height = "270";
    document.getElementById("retBtn").style.display = "none";
    document.getElementById("retBtn").addEventListener("click", screenOne, false);
    document.getElementById("histBtn").addEventListener("click", screenTwo, false);
    document.getElementById("tourBtn").addEventListener("click", screenThree, false);
    document.getElementById("natLandmark").addEventListener("click", screenFour, false);
}
function screenOne() {
    document.getElementById("natLandmark").width = "150";
    document.getElementById("natLandmark").height = "270";
    document.getElementById("content").innerHTML = "";
    document.getElementById("header").innerHTML = "";
    document.getElementById("tourBtn").style.display = "block";
    document.getElementById("histBtn").style.display = "block";
    document.getElementById("natLandmark").style.display = "block";
    document.getElementById("retBtn").style.display = "none";
}
function screenTwo() {
    document.getElementById("header").innerHTML = histHead;
    document.getElementById("content").innerHTML = histInfo;
    document.getElementById("histBtn").style.display = "none";
    document.getElementById("tourBtn").style.display = "none";
    document.getElementById("natLandmark").style.display = "none";
    document.getElementById("retBtn").style.display = "block";
}
function screenThree() {
    document.getElementById("header").innerHTML = tourHead;
    document.getElementById("content").innerHTML = tourInfo;
    document.getElementById("tourBtn").style.display = "none";
    document.getElementById("histBtn").style.display = "none";
    document.getElementById("natLandmark").style.display = "none";
    document.getElementById("retBtn").style.display = "block";
}
function screenFour() {
    document.getElementById("natLandmark").width = "300";
    document.getElementById("natLandmark").height = "420";
    document.getElementById("histBtn").style.display = "none";
    document.getElementById("tourBtn").style.display = "none";
    document.getElementById("retBtn").style.display = "block";
}