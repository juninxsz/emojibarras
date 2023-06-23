var emote = document.getElementsByClassName("emote")[0];
var draggables = Draggable.create(".knob", {
  type: "x",
  bounds: ".slider",
  onDrag: update
});

function update() {
  var x = draggables[0].x;
  TweenLite.set(".range", { width: x });
  
  var slider = document.getElementById("slider");
  var sliderWidth = slider.getBoundingClientRect().width;
  console.log("slider", sliderWidth, x);
  
  var perc = Math.ceil(100 / (sliderWidth - 32) * x);
  if (perc === 100) {
    emote.innerText = "😁";
  } else if(perc > 75) {
    emote.innerText = "😀";
  } else if(perc > 50) {
    emote.innerText = "😄";
  } else if(perc > 25) {
    emote.innerText = "🙂";
  } else {
    emote.innerText = "😐";
  }
}