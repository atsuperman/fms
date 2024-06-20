<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Modern UI with Live Clock</title>
<style>
    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: linear-gradient(to right, #4facfe, #00f2fe);
        color: white;
        text-align: center;
    }
    .container {
        background: rgba(0, 0, 0, 0.6);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }
    .date-time {
        margin-bottom: 20px;
    }
    .date-time div {
        margin: 10px 0;
        font-size: 1.5em;
    }
    .blinking-colon {
        animation: blink 1s step-start infinite;
    }
    @keyframes blink {
        50% { opacity: 0; }
    }
</style>
</head>
<body>
<div class="container">
    <div class="date-time">
        <div id="date"></div>
        <div id="day"></div>
        <div id="time12"></div>
        <div id="time24"></div>
    </div>
</div>

<script>
    function updateDateTime() {
        const now = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = days[now.getDay()];
        const date = now.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY

        let hours12 = now.getHours() % 12 || 12;
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = now.getHours() >= 12 ? 'PM' : 'AM';
        let hours24 = now.getHours();

        let time12 = `${hours12.toString().padStart(2, '0')} <span class="blinking-colon">:</span> ${minutes.toString().padStart(2, '0')} ${ampm}`;
        let time24 = `${hours24.toString().padStart(2, '0')} <span class="blinking-colon">:</span> ${minutes.toString().padStart(2, '0')}`;

        document.getElementById('date').innerHTML = date;
        document.getElementById('day').innerHTML = day.toUpperCase();
        document.getElementById('time12').innerHTML = time12;
        document.getElementById('time24').innerHTML = time24;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call to display immediately
</script>
</body>
</html>
