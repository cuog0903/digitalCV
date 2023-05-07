"use strick";
// Show personal Information
const personal = document.querySelector(".personalInformation");
const vetify = document.querySelector(".vetify");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
  let email = document.querySelector("#inputEmail").value;
  if (validateEmail(email)) {
    personal.classList.remove("hidden");
    vetify.classList.add("hidden");
  } else alert("Please input conrect Email!");
};
document.getElementById("submitBtn").addEventListener("click", handleSubmit);
// const handleInputchange = (e) => {
//   let email = e.target.value;
//   let message = document.querySelector("#message");
//   if (validateEmail(email)) {
//     message.textContent = "";
//   } else {
//     message.textContent = "Sai định dạng email";
//   }
// };
// document
//   .getElementById("inputEmail")
//   .addEventListener("input", handleInputchange);
//Hide Job information
const viewMore1 = document.querySelector(".view-more--1");
const viewLess1 = document.querySelector(".view-less--1");
const viewMore2 = document.querySelector(".view-more--2");
const viewLess2 = document.querySelector(".view-less--2");
const viewMore3 = document.querySelector(".view-more--3");
const viewLess3 = document.querySelector(".view-less--3");
const viewMore4 = document.querySelector(".view-more--4");
const viewLess4 = document.querySelector(".view-less--4");
const viewMore5 = document.querySelector(".view-more--5");
const viewLess5 = document.querySelector(".view-less--5");
const viewMore6 = document.querySelector(".view-more--6");
const viewLess6 = document.querySelector(".view-less--6");

viewMore1.addEventListener("click", function () {
  const showDetail = document.querySelector(".exp-content");
  showDetail.classList.remove("hidden");
  viewMore1.style.display = "none";
  viewLess1.style.display = "inline-block";
});
viewLess1.addEventListener("click", function () {
  const showDetail = document.querySelector(".exp-content");
  showDetail.classList.add("hidden");
  viewMore1.style.display = "inline-block";
  viewLess1.style.display = "none";
});
viewMore2.addEventListener("click", function () {
  const showDetail = document.querySelector(".edu-content");
  showDetail.classList.remove("hidden");
  viewMore2.style.display = "none";
  viewLess2.style.display = "inline-block";
});
viewLess2.addEventListener("click", function () {
  const showDetail = document.querySelector(".edu-content");
  showDetail.classList.add("hidden");
  viewMore2.style.display = "inline-block";
  viewLess2.style.display = "none";
});
viewMore3.addEventListener("click", function () {
  const showDetail = document.querySelector(".worked-content");
  showDetail.classList.remove("hidden");
  viewMore3.style.display = "none";
  viewLess3.style.display = "inline-block";
});
viewLess3.addEventListener("click", function () {
  const showDetail = document.querySelector(".worked-content");
  showDetail.classList.add("hidden");
  viewMore3.style.display = "inline-block";
  viewLess3.style.display = "none";
});

viewMore4.addEventListener("click", function () {
  const showDetail = document.querySelector(".interest-content");
  showDetail.classList.remove("hidden");
  viewMore4.style.display = "none";
  viewLess4.style.display = "inline-block";
});
viewLess4.addEventListener("click", function () {
  const showDetail = document.querySelector(".interest-content");
  showDetail.classList.add("hidden");
  viewMore4.style.display = "inline-block";
  viewLess4.style.display = "none";
});
viewMore5.addEventListener("click", function () {
  const showDetail = document.querySelector(".lang-content");
  showDetail.classList.remove("hidden");
  viewMore5.style.display = "none";
  viewLess5.style.display = "inline-block";
});
viewLess5.addEventListener("click", function () {
  const showDetail = document.querySelector(".lang-content");
  showDetail.classList.add("hidden");
  viewMore5.style.display = "inline-block";
  viewLess5.style.display = "none";
});
viewMore6.addEventListener("click", function () {
  const showDetail = document.querySelector(".skill-content");
  showDetail.classList.remove("hidden");
  viewMore6.style.display = "none";
  viewLess6.style.display = "inline-block";
});
viewLess6.addEventListener("click", function () {
  const showDetail = document.querySelector(".skill-content");
  showDetail.classList.add("hidden");
  viewMore6.style.display = "inline-block";
  viewLess6.style.display = "none";
});
