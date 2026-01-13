document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.award-number');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 50; // A menor número, más rápido
            
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});

const imgConclusion   = document.getElementById("conclusion-image");
const videoConclusion = document.getElementById("conclusion-video");
const imageMainBox    = document.querySelector(".image-main");

if (imgConclusion && videoConclusion && imageMainBox) {

  imgConclusion.addEventListener("click", () => {
    imageMainBox.classList.add("playing");
    videoConclusion.currentTime = 0;
    videoConclusion.play().catch(() => {});
  });


  videoConclusion.addEventListener("ended", () => {
    imageMainBox.classList.remove("playing");
  });
}