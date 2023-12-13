window.addEventListener("load", function () {
  video = this.document.querySelector("video");
});

const changeVideo = function (e) {
  video.src = `assets/videos/${e.target.value}.mp4`;
};
