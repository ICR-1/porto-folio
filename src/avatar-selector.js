// Script untuk mengubah avatar dari galeri yang tersedia

export const initAvatarSelector = async () => {
  const profileImage = document.getElementById('profile-image');
  
  if (!profileImage) return;
  
  try {
    // Tambahkan tombol untuk mengganti avatar
    const avatarContainer = profileImage.parentElement;
    const changeButton = document.createElement('button');
    changeButton.className = 'absolute bottom-2 right-2 bg-tertiary hover:bg-black-100 text-white-100 p-2 rounded-full shadow-lg z-10 transition-all duration-300';
    changeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    `;
    avatarContainer.style.position = 'relative';
    avatarContainer.appendChild(changeButton);
    
    // Ambil data avatar dari file JSON
    const response = await fetch('/avatar-dummy.json');
    const avatarData = await response.json();
    
    // Buat modal untuk memilih avatar
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300';
    modal.innerHTML = `
      <div class="bg-tertiary rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-white-100 text-xl font-bold">Pilih Avatar</h3>
          <button class="close-modal text-secondary hover:text-white-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="mb-4">
          <h4 class="text-secondary mb-2">Pria</h4>
          <div class="grid grid-cols-3 gap-3 avatar-group" data-group="male"></div>
        </div>
        
        <div class="mb-4">
          <h4 class="text-secondary mb-2">Wanita</h4>
          <div class="grid grid-cols-3 gap-3 avatar-group" data-group="female"></div>
        </div>
        
        <div>
          <h4 class="text-secondary mb-2">Netral</h4>
          <div class="grid grid-cols-3 gap-3 avatar-group" data-group="neutral"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Populate avatar options
    const populateAvatars = () => {
      Object.keys(avatarData).forEach(group => {
        const container = modal.querySelector(`.avatar-group[data-group="${group}"]`);
        if (!container) return;
        
        avatarData[group].forEach(avatar => {
          const avatarEl = document.createElement('div');
          avatarEl.className = 'avatar-option cursor-pointer rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all';
          avatarEl.setAttribute('data-url', avatar.url);
          avatarEl.innerHTML = `
            <img src="${avatar.url}" alt="${avatar.description}" class="w-full h-24 object-cover">
          `;
          container.appendChild(avatarEl);
          
          // Handle click on avatar option
          avatarEl.addEventListener('click', () => {
            profileImage.src = avatar.url;
            closeModal();
            
            // Optional: save selection to localStorage
            localStorage.setItem('selectedAvatar', avatar.url);
          });
        });
      });
    };
    
    // Load previously selected avatar if available
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
      profileImage.src = savedAvatar;
    }
    
    // Open modal function
    const openModal = () => {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
      
      // Populate avatars only when modal is opened (lazy loading)
      if (!modal.querySelector('.avatar-option')) {
        populateAvatars();
      }
    };
    
    // Close modal function
    const closeModal = () => {
      modal.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    };
    
    // Event listeners
    changeButton.addEventListener('click', openModal);
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    
    // Close when clicking outside the modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('opacity-0')) {
        closeModal();
      }
    });
    
  } catch (error) {
    console.error('Error initializing avatar selector:', error);
  }
}; 