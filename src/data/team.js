document.addEventListener("DOMContentLoaded", () => {
  const teamCards = document.querySelectorAll(".team-card");
  const modal = document.getElementById("team-modal");
  const closeModal = document.getElementById("close-modal");
  const modalImage = document.getElementById("modal-image");
  const modalName = document.getElementById("modal-name");
  const modalRole = document.getElementById("modal-role");
  const modalLinkedin = document.getElementById("modal-linkedin");
  const modalGithub = document.getElementById("modal-github");
  const modalBio = document.getElementById("modal-bio");

  // Sample bios - you can replace these with actual data
  const bios = {
    "Stiven Carvajal":
      "Scrum Master con experiencia en metodologías ágiles y gestión de proyectos de desarrollo.",
    "Ayelmer Corzo":
      "Desarrollador Full Stack Especializado en desarrollo web.",
    "Karen Cristancho":
      "Frontend Developer con enfoque en experiencia de usuario y diseño de interfaces.",
    "Elidallana Cristancho":
      "Frontend Developer con habilidades en diseño responsive y accesibilidad web.",
    "Jhorman Castellanos":
      "Backend Developer.",
    "Nilson Carvajal":
      "Backend Developer",
    "Stivenson Correa":
      "Backend Developer con enfoque en escalabilidad y rendimiento de aplicaciones web.",
    "Erick Arias":
      "Frontend Developer",
    "Jeisson Perez":
      "Frontend Developer",
  };

  // Open modal when clicking on a team card
  teamCards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.querySelector("h3").textContent.trim();
      const role = card.querySelector("p").textContent.trim();
      const image = card.querySelector("img").src;

      // Find LinkedIn and GitHub links
      const linkedinLink = card.querySelector('a[aria-label*="LinkedIn"]');
      const githubLink = card.querySelector('a[aria-label*="GitHub"]');

      // Update modal content
      modalImage.src = image;
      modalImage.alt = `Foto de ${name}`;
      modalName.textContent = name;
      modalRole.textContent = role;
      modalBio.textContent = bios[name] || "Miembro del equipo de desarrollo.";

      // Update social links
      if (linkedinLink) {
        modalLinkedin.href = linkedinLink.href;
        modalLinkedin.style.display = "flex";
      } else {
        modalLinkedin.style.display = "none";
      }

      if (githubLink) {
        modalGithub.href = githubLink.href;
        modalGithub.style.display = "flex";
      } else {
        modalGithub.style.display = "none";
      }

      // Show modal
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  });
});
