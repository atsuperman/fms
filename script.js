document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-btn');
    const pauseButtons = document.querySelectorAll('.pause-btn');
    const volumeSliders = document.querySelectorAll('.volume-slider');

    function sendCommand(frameId, command) {
        const iframe = document.getElementById(frameId);
        iframe.contentWindow.postMessage(command, '*');
    }

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const frameId = button.getAttribute('data-frame');
            sendCommand(frameId, 'play');
        });
    });

    pauseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const frameId = button.getAttribute('data-frame');
            sendCommand(frameId, 'pause');
        });
    });

    volumeSliders.forEach(slider => {
        slider.addEventListener('input', () => {
            const frameId = slider.getAttribute('data-frame');
            sendCommand(frameId, `volume:${slider.value}`);
        });
    });

    window.addEventListener('message', (event) => {
        if (!['https://thaalam.fm', 'https://tamil894fm.com'].includes(event.origin)) return;

        // Handle incoming messages from the iframes if needed
    });
});
