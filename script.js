document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('music-frame');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const volumeSlider = document.getElementById('volume-slider');

    function sendCommand(command) {
        iframe.contentWindow.postMessage(command, 'https://thaalam.fm');
    }

    playBtn.addEventListener('click', () => sendCommand('play'));
    pauseBtn.addEventListener('click', () => sendCommand('pause'));
    volumeSlider.addEventListener('input', () => sendCommand(`volume:${volumeSlider.value}`));

    window.addEventListener('message', (event) => {
        if (event.origin !== 'https://thaalam.fm') return;

        // Handle incoming messages from the iframe if needed
    });
});
