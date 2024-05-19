//System commands for calling:

/*Optimizing application size:*/

nw.Screen.Init();
let dwidth =  nw.Screen.screens[0].bounds.width;
let dheight =  nw.Screen.screens[0].bounds.height; // for new window

/*
Scale: nw.Window.get().zoomLevel
*/

var defaultScale;

if (dwidth >= 1960)
  defaultScale = 1.6; // 2-0.4 and etc.
else if (dwidth >= 1752 && dwidth < 1960)
  defaultScale = 1.1; // -0.4
else if (dwidth >= 1600 && dwidth < 1752)
  defaultScale = 0.7; // -0.3
else if (dwidth >= 1460 && dwidth < 1600)
  defaultScale = 0.3; // -0.2
else if (dwidth >= 1200 && dwidth < 1460)
  defaultScale = -0.1; // -0.1
else if (dwidth < 1200)
  defaultScale = -0.3;

//TODO: add condition when implementing the localstorage info about scale
nw.Window.get().zoomLevel = defaultScale;

function setScaleUI(){
  let scale = document.getElementById("scaleUI").value;
  nw.Window.get().zoomLevel = parseFloat(scale);
}

function getScaleInfo(){
  let scaleString = document.querySelector('.scaleInfo');
  let scale = document.getElementById("scaleUI").value;
  scaleString.textContent = parseInt(scale*100+100)+"%";
}

//use dwidth and dheight variables for size new window
////nw.Window.get().resizeTo(dwidth*0.75, dheight*0.75);
//nw.Window.get().width = dwidth*0.7;
//nw.Window.get().height = dheight*0.7;
//nw.Window.get().setPosition('center'); // do not work! why?

nw.Window.get().setMinimumSize(640, 480); // for new windows


// For Run/Stop and Reset buttons:

function SetBtnsStyle() {
  let RunStopBtn = document.getElementsByClassName("run-stop-btn")[0];
  let ResetBtn = document.getElementsByClassName("reset-btn")[0];

  if (document.getElementById("trigger").checked == true){
    RunStopBtn.style.display = "none";
    ResetBtn.style.display = "none";
  } else {
    setTimeout(() => {
      RunStopBtn.style.display = "block";
      ResetBtn.style.display = "block";
    }, 1100);
  }

  if (CircuitJS1.isRunning() == false) {
    RunStopBtn.innerHTML = '&#xE801;'; // \e801
    RunStopBtn.style.color = "green";
    RunStopBtn.style.borderColor = "green";
  } else {
    RunStopBtn.innerHTML = '&#xE800;'; // \e800
    RunStopBtn.style.color = "red";
    RunStopBtn.style.borderColor = "red";
  }
}

