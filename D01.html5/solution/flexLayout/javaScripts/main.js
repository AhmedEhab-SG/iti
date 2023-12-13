window.addEventListener("load", function () {
  mainBranch = this.document.getElementsByClassName("mainBranch")[0];
  secBranchArr = this.document.getElementsByClassName("secBranch");
});

const showHideMain = function () {
  if (mainBranch.style.display === "none") {
    mainBranch.style.display = "inline-block";
  } else {
    mainBranch.style.display = "none";
  }
};
const showHideBranch = function () {
  for (let elem of secBranchArr)
    if (elem.style.display === "none") {
      elem.style.display = "inline-block";
    } else {
      elem.style.display = "none";
    }
};
