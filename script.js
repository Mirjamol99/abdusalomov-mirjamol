// DARK MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const icon = themeBtn.querySelector("i");

  if (document.body.classList.contains("dark")) {
    icon.className = "fas fa-sun";
    localStorage.setItem("theme", "dark");
  } else {
    icon.className = "fas fa-moon";
    localStorage.setItem("theme", "light");
  }

});


// OLD THEME

if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

  themeBtn.querySelector("i").className = "fas fa-sun";

}


// SHARE

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {

  const shareData = {
    title: "Abdusalomov Mirjamol",
    text: "Abdusalomov Mirjamol — Frontend Developer",
    url: window.location.href
  };

  try {

    if (navigator.share) {

      await navigator.share(shareData);

    } else {

      await navigator.clipboard.writeText(window.location.href);

      alert("Profil linki nusxalandi!");

    }

  } catch (error) {

    console.log("Share bekor qilindi.");

  }

});