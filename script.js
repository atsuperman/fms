document.addEventListener('DOMContentLoaded', () => {
    const refreshButtons = document.querySelectorAll('.refresh-btn');
    const musicSelector = document.getElementById('music-selector');
    const iframeContainers = document.querySelectorAll('.grid-item');

    refreshButtons.forEach(button => {
        button.addEventListener('click', () => {
            const frameId = button.getAttribute('data-frame');
            const iframe = document.getElementById(frameId);
            iframe.src = iframe.src; // Reload the iframe content
        });
    });

    musicSelector.addEventListener('change', (event) => {
        const selectedFrameId = event.target.value;

        iframeContainers.forEach(container => {
            if (container.id === `container-${selectedFrameId}`) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none';
            }
        });
    });
});
