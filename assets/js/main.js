let nav = document.getElementById('navigation');
function toggleMenu() {
  nav.classList.toggle('navigation-visible');
}


const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const feedbackMsgs = document.querySelectorAll(".feedback-msg .msg");
const tagItems = document.querySelectorAll(".tag .tag-items .item");

let currentIndex = 0;

function showFeedback(index) {
    feedbackMsgs.forEach((msg, i) => {
        if (i === index) {
            msg.style.display = "block";
            msg.classList.add("active");
        } else {
            msg.style.display = "none";
            msg.classList.remove("active");
        }
    });

    tagItems.forEach((tag, i) => {
        if (i === index) {
            tag.classList.add("active");
        } else {
            tag.classList.remove("active");
        }
    });
}

function prevFeedback() {
    currentIndex = (currentIndex === 0) ? feedbackMsgs.length - 1 : currentIndex - 1;
    showFeedback(currentIndex);
}

function nextFeedback() {
    currentIndex = (currentIndex === feedbackMsgs.length - 1) ? 0 : currentIndex + 1;
    showFeedback(currentIndex);
}

prevBtn.addEventListener("click", prevFeedback);
nextBtn.addEventListener("click", nextFeedback);

// Show the initial feedback message
showFeedback(currentIndex)



