var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

$(document).ready(function () {
  $("#textBtn_click").on("click", function () {
    $("#notePage_click").append("<div class='form-group'> <textarea class='form-control' id='exampleFormControlTextarea1' rows='10' cols='80'/></div>");
  });
  //image btn (drag drop image)

  $("#imgBtn_click").on("click", function () {
    $("#notePage_click").append("<div class='form-group'> <input class='form-control' type='file' id='formFileMultiple' multiple/></div>");
  });

  // $("#handBtn_click").on("click", function () {
  //   $("#notePage_click").append("<div class='handBox'></div>");
  // });

  $("#handBtn_click").on("click", function () {
    $("#notePage_click").append(" <div class='handBox'><canvas id ='myCanvas' resize></canvas></div>");
  });


  $("#codeBtn_click").on("click", function () {
    $("#notePage_click").append("<div class='form-group'> <iframe frameborder='0' width='100%' height='500px' src='https://replit.com/@ritza/demo-embed?lite=true'/></div>");
  });


  $("#removeBtn_click").on("click", function () {
    $("#notePage_click").children().last().remove();
  });
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//const { Path } = require("paper/dist/paper-core");
var myPath;

function onMouseDown(event) {
  console.log("path down");
    myPath = new Path();
    console.log("path down2");
    myPath.strokeColor = 'black';
}

function onMouseDrag(event) {
   console.log("path drag");
    myPath.add(event.point);
   // websocket.send("The mouse has been moved.");
}

function onMouseUp(event) {
  console.log("path up");
    var myCircle = new Path.Circle({
        center: event.point,
        radius: 10
    });

    myCircle.strokeColor = 'black';
    myCircle.fillColor = 'white';
}
