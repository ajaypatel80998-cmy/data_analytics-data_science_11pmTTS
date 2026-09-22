/**
 * Ajay Bhesdadiya - Data Analytics Portfolio
 * Interactive Functionality: Mobile Right Drawer, Project Filters, Modals, Forms & Toasts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* -------------------------------------------------------------------------- */
  /* 1. Mobile Right Off-Canvas Navigation Drawer                                */
  /* -------------------------------------------------------------------------- */
  const mobileOpenBtn = document.getElementById('mobile-menu-open-btn');
  const mobileCloseBtn = document.getElementById('mobile-menu-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    mobileDrawer.classList.remove('translate-x-full');
    mobileDrawer.classList.add('translate-x-0');
    mobileBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    mobileBackdrop.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  };

  const closeMobileMenu = () => {
    mobileDrawer.classList.remove('translate-x-0');
    mobileDrawer.classList.add('translate-x-full');
    mobileBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    mobileBackdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  };

  if (mobileOpenBtn) {
    mobileOpenBtn.addEventListener('click', openMobileMenu);
  }
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Auto-close mobile drawer when any link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  /* -------------------------------------------------------------------------- */
  /* 2. Project Category Filtering                                              */
  /* -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state on buttons
      filterButtons.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-md', 'shadow-cyan-500/20');
        b.classList.add('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');
      });

      btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-md', 'shadow-cyan-500/20');
      btn.classList.remove('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* -------------------------------------------------------------------------- */
  /* 3. Interactive Project Details Modal                                       */
  /* -------------------------------------------------------------------------- */
  const projectModal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalTools = document.getElementById('modal-project-tools');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalHighlights = document.getElementById('modal-project-highlights');
  const modalGithub = document.getElementById('modal-github-link');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalSecondaryClose = document.getElementById('modal-secondary-close');
  const projectTriggers = document.querySelectorAll('.project-modal-trigger');

  const openProjectModal = (data) => {
    modalTitle.textContent = data.title;
    modalTools.textContent = data.tools;
    modalDesc.textContent = data.desc;
    modalGithub.href = data.github || 'https://github.com';

    // Clear and populate highlights
    modalHighlights.innerHTML = '';
    const highlights = data.highlights ? data.highlights.split('|') : [];
    highlights.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-slate-300';
      li.innerHTML = `
        <span class="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
        <span>${item.trim()}</span>
      `;
      modalHighlights.appendChild(li);
    });

    projectModal.classList.remove('opacity-0', 'pointer-events-none');
    projectModal.classList.add('opacity-100', 'pointer-events-auto');
    const modalCard = document.getElementById('project-modal-card');
    if (modalCard) {
      modalCard.classList.remove('scale-95');
      modalCard.classList.add('scale-100');
    }
    document.body.classList.add('overflow-hidden');
  };

  const closeProjectModal = () => {
    projectModal.classList.remove('opacity-100', 'pointer-events-auto');
    projectModal.classList.add('opacity-0', 'pointer-events-none');
    const modalCard = document.getElementById('project-modal-card');
    if (modalCard) {
      modalCard.classList.remove('scale-100');
      modalCard.classList.add('scale-95');
    }
    document.body.classList.remove('overflow-hidden');
  };

  projectTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      openProjectModal({
        title: btn.getAttribute('data-title'),
        tools: btn.getAttribute('data-tools'),
        desc: btn.getAttribute('data-desc'),
        highlights: btn.getAttribute('data-highlights'),
        github: btn.getAttribute('data-github')
      });
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalSecondaryClose) modalSecondaryClose.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 4. Resume Modal & Download Action                                          */
  /* -------------------------------------------------------------------------- */
  const resumeModal = document.getElementById('resume-modal');
  const resumeTriggers = [
    document.getElementById('quick-resume-btn'),
    document.getElementById('hero-resume-btn'),
    document.getElementById('mobile-drawer-resume-btn')
  ];
  const resumeModalClose = document.getElementById('resume-modal-close-btn');
  const downloadCvAction = document.getElementById('download-cv-action');
  const resumeContactShortcut = document.getElementById('resume-contact-shortcut');

  const openResumeModal = () => {
    if (resumeModal) {
      resumeModal.classList.remove('opacity-0', 'pointer-events-none');
      resumeModal.classList.add('opacity-100', 'pointer-events-auto');
      document.body.classList.add('overflow-hidden');
    }
  };

  const closeResumeModal = () => {
    if (resumeModal) {
      resumeModal.classList.remove('opacity-100', 'pointer-events-auto');
      resumeModal.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('overflow-hidden');
    }
  };

  resumeTriggers.forEach(btn => {
    if (btn) btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
      openResumeModal();
    });
  });

  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeModal);
  if (resumeContactShortcut) {
    resumeContactShortcut.addEventListener('click', closeResumeModal);
  }
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  if (downloadCvAction) {
    downloadCvAction.addEventListener('click', () => {
      showToast('Ajay Bhesdadiya Resume (Data Analyst) is downloading...');
      setTimeout(() => {
        closeResumeModal();
      }, 1000);
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 5. Contact Form Submission & Toast                                         */
  /* -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(message, duration = 3500) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, duration);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      
      showToast(`Thank you, ${name}! Your inquiry has been sent to Ajay Bhesdadiya.`);
      contactForm.reset();
    });
  }

  /* -------------------------------------------------------------------------- */
  /* 6. Keyboard Accessibility (ESC to close modals)                            */
  /* -------------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeProjectModal();
      closeResumeModal();
    }
  });

  /* -------------------------------------------------------------------------- */
  /* 7. Active Navigation Link Highlighting on Scroll                           */
  /* -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('header nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('text-cyan-400', 'bg-slate-900/80');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400', 'bg-slate-900/80');
      }
    });
  });
});
