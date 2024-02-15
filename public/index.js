document.getElementById("burger").onclick = () => {
  showMenu();
};

const showMenu = () => {
  document.getElementById("menu").classList.toggle("hidden");
};
