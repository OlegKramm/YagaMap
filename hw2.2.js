let btn1 = document.querySelector(".clk1");
let btn2 = document.querySelector(".clk2");
let btn3 = document.querySelector(".clk3");
let btn4 = document.querySelector(".clk4");
let showMap = document.querySelector(".sect__map");

let frame1 = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5484.204293872541!2d6.1628020526739125!3d46.20696765944539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65462bfb6903%3A0x621b30a8744b46a1!2z0J_QsNGA0Log0JPRgNCw0L3Qtg!5e0!3m2!1sru!2sua!4v1661370295230!5m2!1sru!2sua" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
let frame2 = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3280.886560878706!2d33.0511648!3d34.6828124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7331416fad6e7%3A0xe16938480afa3df5!2zU2N1bHB0dXJlLCBBbmFzdGFzaSBTaW91a3JpLCBMaW1hc3NvbCwg0JrQuNC_0YA!5e0!3m2!1sru!2sua!4v1661361347960!5m2!1sru!2sua" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
let frame3 = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7340.279963933067!2d30.478159171784657!3d50.42669155282148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cec3731f1293%3A0x87ef4461299b4604!2z0KHQvtC70L7QvCfRj9C90YHRjNC60LjQuSDQu9Cw0L3QtNGI0LDRhNGC0L3QuNC5INC_0LDRgNC6!5e0!3m2!1sru!2sua!4v1661371720780!5m2!1sru!2sua" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
let frame4 = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3929670268935!2d-0.1632105485735328!3d51.5243518671845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761adf71d3c473%3A0xf52841716e371e73!2zUmVnZW50J3MgUGFyaywg0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sua!4v1661370950679!5m2!1sru!2sua" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

function closeMap() {
  showMap.insertAdjacentHTML(
    "beforeend",
    '<div class = "closeMap">Close</div>'
  );
  document.querySelector(".closeMap").addEventListener("click", function () {
    this.remove();
    if ((showMap.style.display = "block")) {
      showMap.style.display = "none";
    }
  });
}
btn1.addEventListener("click", function () {
  showMap.classList.toggle("maps");
  showMap.style.display = "block";
  showMap.innerHTML = frame1;
  closeMap();
});
btn2.addEventListener("click", function () {
  showMap.style.display = "block";
  showMap.classList.toggle("maps");
  showMap.innerHTML = frame2;
  closeMap();
});
btn3.addEventListener("click", function () {
  showMap.style.display = "block";
  showMap.classList.toggle("maps");
  showMap.innerHTML = frame3;
  closeMap();
});
btn4.addEventListener("click", function () {
  showMap.style.display = "block";
  showMap.classList.toggle("maps");
  showMap.innerHTML = frame4;
  closeMap();
});
