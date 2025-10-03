let btn_input = document.querySelector(".input");
let container_regist = document.querySelector(".registration");
let btn_sumbit = document.querySelector(".sumbit");
btn_input.addEventListener("click", () => {
  container_regist.style.display = "block";
  btn_input.style.display = "none";
});

btn_sumbit.addEventListener("click", () => {
  alert("Вам надано знижку 30%");
  container_regist.style.display = "none";
  btn_input.style.display = "flex";
  btn_input.innerHTML = "30%";
});
