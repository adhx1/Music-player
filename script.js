 
 let  progress = document.getElementById("progress");
 let  quran = document.getElementById("quran");
 let  ctrlIcon = document.getElementById("ctrlIcon");
 let currentTimeDisplay = document.getElementById("currentTime");
 let totalTimeDisplay = document.getElementById("totalTime");


 quran.onloadedmetadata = function () {
     progress.max = quran.duration;
     progress.value = quran.currentTime;
     updateTimeDisplay(quran.currentTime, quran.duration); // Set total time when metadata is loaded


 };

 function playPause(){
if(ctrlIcon.classList.contains("fa-pause")){
    quran.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}else{
    quran.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");

}
 }
 function updateProgressBar() {
    let percentage = (progress.value / progress.max) * 100;
    progress.style.background = `linear-gradient(to right, #f53192 0%, #f53192 ${percentage}%, #d1d1d1 ${percentage}%)`;
  }

 if(quran.play()){
    setInterval(() => {
        progress.value = quran.currentTime;
        updateTimeDisplay(quran.currentTime, quran.duration); // Update time display here
        updateProgressBar(); // Update the visual progress bar


    }, 500);

 }


progress.onchange = function(){
    quran.play();
    quran.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}

function updateTimeDisplay(current, total) {
    currentTimeDisplay.textContent = formatTime(current);
    totalTimeDisplay.textContent = formatTime(total);
  }
  
  // Helper function to format time in MM:SS
  function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`;

  }