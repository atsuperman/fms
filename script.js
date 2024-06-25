document.addEventListener('DOMContentLoaded', () => {
    const refreshButtons = document.querySelectorAll('.refresh-btn');

    refreshButtons.forEach(button => {
        button.addEventListener('click', () => {
            const frameId = button.getAttribute('data-frame');
            const iframe = document.getElementById(frameId);

            // Reload the iframe content
            iframe.src = iframe.src;
        });
    });
});
