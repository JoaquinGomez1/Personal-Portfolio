// --- Selectores de sección ---
const home = document.querySelector(".landing");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const projects = document.querySelector(".myWork");
const contactMe = document.querySelector(".contact");

// --- Selectores de botones ---
const homeBtn = document.querySelectorAll(".inicionav");
const aboutBtn = document.querySelectorAll(".aboutnav");
const servicesBtn = document.querySelectorAll(".servicesnav");
const projectsBtn = document.querySelectorAll(".proyectnav");
const contactBtn = document.querySelectorAll(".contactnav");

const btnList = [homeBtn, aboutBtn, servicesBtn, projectsBtn, contactBtn];
const sectionList = [home, about, services, projects, contactMe];

const subjectValue = document.getElementById("subject");
const msgValue = document.getElementById("msg");

for (let i = 0; i < btnList.length; i++) {
  // Cada boton tiene dos elementos distintos, uno correspondiente al navbar y el otro al sidebar
  btnList[i].forEach((each) =>
    each.addEventListener("click", () => {
      sectionList[i].scrollIntoView({ block: "start", behavior: "smooth" });
    })
  );
}

const viewProyectsBtn = document.querySelector(".viewProyectsBtn");
viewProyectsBtn.addEventListener("click", () => {
  projects.scrollIntoView({ block: "start", behavior: "smooth" });
});

// Contact Form
const sendFormBtn = document.querySelector(".sendFormBtn");
sendFormBtn.addEventListener("click", sendForm);

function sendForm(e) {
  e.preventDefault();
  window.location.href = ` mailto:joaquingomez3098@gmail.com?subject=${subjectValue.value}&body=${msgValue.value}`;
}

function validateForm() {
  let noError = true;

  //Verificar que no haya campos vacios
  if (!subjectValue || !msgValue) {
    document.querySelector(".errorMsg").classList.remove("hide");
    document.querySelector(".errorMsg").innerHTML =
      "No puede haber campos vacíos";
    return (noError = false);
  }

  if (noError) {
    document.querySelector(".errorMsg").classList.add("hide");
    return true;
  }
}
