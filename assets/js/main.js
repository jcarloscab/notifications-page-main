// variables
const notification = document.querySelectorAll(".notification");
let unread = document.querySelectorAll(".notification--unread");
const btnReaded = document.getElementById("btn-readed");
const counter = document.getElementById("counter");
counter.textContent = unread.length;

// listeners
btnReaded.addEventListener("click", () => {
  unread.forEach((notification) => {
    notification.classList.remove("notification--unread");
    counter.textContent = 0;
  });
});

unread.forEach((notReaded) => {
  notReaded.addEventListener("click", () => {
    notReaded.classList.remove("notification--unread");

    // uploading the unread nodelist and counter
    unread = document.querySelectorAll(".notification--unread");
    counter.textContent = unread.length;
  });
});
