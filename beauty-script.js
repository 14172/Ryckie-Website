const lightbox = document.getElementById("lightbox");
const video = document.getElementById("lightbox-video");
const source = document.getElementById("lightbox-source");
const closeBtn = document.getElementById("lightbox-close");

// 點圖片開啟影片
document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    const videoSrc = img.getAttribute("data-video");
    source.src = videoSrc;
    video.load();
    lightbox.classList.add("show");
  });
});

// 點 × 關閉 Lightbox
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
  video.pause();
  source.src = ""; // 清除來源，避免背景播放
});
