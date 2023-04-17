const shareEl = document.querySelector(".share");
const shareEl2 = document.getElementById("share");
const shareMenuEl = document.querySelector(".opacity-0");

const openShare = () => {
  shareEl2.classList.toggle("fill-white");
  shareEl.classList.toggle("bg-dt-dark-blue");
  shareEl.classList.toggle("bg-lg-gray-blue");
  shareMenuEl.classList.toggle("opacity-0");
};

shareEl.addEventListener("click", openShare);
