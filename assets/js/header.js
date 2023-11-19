const user_sign = document.querySelectorAll(".user-sign");
if (window.location.href.includes("/sign-up")) {
  console.log(user_sign[0]);
  user_sign[1].style.display = "none";
} else if(window.location.href.includes("/sign-in")) {
  user_sign[0].style.display = "none";
}
