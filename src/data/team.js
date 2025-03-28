// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('team-modal');
  const modalImage = document.getElementById('modal-image');
  const modalName = document.getElementById('modal-name');
  const modalRole = document.getElementById('modal-role');
  const modalBio = document.getElementById('modal-bio');
  const modalLinkedin = document.getElementById('modal-linkedin');
  const modalGithub = document.getElementById('modal-github');
  const modalSocial = document.getElementById('modal-social');
  const closeModalBtn = document.getElementById('close-modal');
  
  // Get all team cards
  const teamCards = document.querySelectorAll('.team-card');
  
  // Function to open modal with member data
  function openModal(memberData) {
    // Set modal content
    modalImage.src = memberData.image || '/placeholder.svg';
    modalImage.alt = `Foto de ${memberData.name}`;
    modalName.textContent = memberData.name;
    modalRole.textContent = memberData.role;
    modalBio.textContent = memberData.bio || 'Miembro del equipo de desarrollo.';
    
    // Handle social links
    if (memberData.linkedin) {
      modalLinkedin.href = memberData.linkedin;
      modalLinkedin.style.display = 'flex';
    } else {
      modalLinkedin.style.display = 'none';
    }
    
    if (memberData.github) {
      modalGithub.href = memberData.github;
      modalGithub.style.display = 'flex';
    } else {
      modalGithub.style.display = 'none';
    }
    
    // Hide social section if no links
    if (!memberData.linkedin && !memberData.github) {
      modalSocial.style.display = 'none';
    } else {
      modalSocial.style.display = 'flex';
    }
    
    // Show modal with flex display
    modal.style.display = 'flex';
    
    // Add event listener to close when clicking outside
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    }, { once: true });
    
    // Prevent scrolling on body
    document.body.style.overflow = 'hidden';
  }
  
  // Function to close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  
  // Add click event to each team card
  teamCards.forEach(card => {
    card.addEventListener('click', function() {
      try {
        const memberData = JSON.parse(this.dataset.member);
        openModal(memberData);
      } catch (error) {
        console.error('Error parsing member data:', error);
      }
    });
  });
  
  // Close modal when clicking the close button
  closeModalBtn.addEventListener('click', closeModal);
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
});