document.addEventListener('DOMContentLoaded', () => {
    const refreshButtons = document.querySelectorAll('.refresh-btn');
    const musicSelector = document.getElementById('music-selector');
    const iframeContainers = document.querySelectorAll('.grid-item');

    refreshButtons.forEach(button => {
        button.addEventListener('click', () => {
            const frameId = button.getAttribute('data-frame');
            const iframe = document.getElementById(frameId);
            iframe.src = iframe.getAttribute('data-src'); // Reload the iframe content
        });
    });

    musicSelector.addEventListener('change', (event) => {
        const selectedFrameId = event.target.value;
        const selectedOptionText = event.target.options[event.target.selectedIndex].text;

        document.title = selectedOptionText; // Set the page title to the selected option text

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
