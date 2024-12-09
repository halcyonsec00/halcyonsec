const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popupOverlay = document.getElementById('popupOverlay');

openPopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Close popup when clicking outside the popup content
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});
