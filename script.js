document.addEventListener('DOMContentLoaded', () => {
    const refreshButtons = document.querySelectorAll('.refresh-btn');
    const visitButtons = document.querySelectorAll('.visit-btn');
    const musicSelector = document.getElementById('music-selector');
    const iframeContainers = document.querySelectorAll('.grid-item');

    refreshButtons.forEach(button => {
        button.addEventListener('click', () => {
            const frameId = button.getAttribute('data-frame');
            const iframe = document.getElementById(frameId);
            iframe.src = iframe.getAttribute('data-src'); // Reload the iframe content
        });
    });

    visitButtons.forEach(button => {
        button.addEventListener('click', () => {
            const frameId = button.getAttribute('data-frame');
            const iframe = document.getElementById(frameId);
            const url = iframe.getAttribute('data-src');
            window.open(url, '_blank'); // Open the URL in a new tab
        });
    });

    musicSelector.addEventListener('change', (event) => {
        const selectedFrameId = event.target.value;

        iframeContainers.forEach(container => {
            const iframe = container.querySelector('iframe');
            if (container.id === `container-${selectedFrameId}`) {
                container.style.display = 'flex';
                iframe.src = iframe.getAttribute('data-src'); // Set the src to load the iframe
            } else {
                container.style.display = 'none';
                iframe.src = ''; // Remove the src to stop the iframe
            }
        });
    });
});
