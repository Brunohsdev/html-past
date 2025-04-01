let tvOn = false;
let currentChannel = 1;
let volume = 0;
const channels = [1, 3, 5, 7, 11];

document.getElementById("power").addEventListener("click", function() {
    tvOn = !tvOn;
    updateTV();
});

document.getElementById("channel-up").addEventListener("click", function() {
    if (tvOn) {
        let index = channels.indexOf(currentChannel);
        if (index < channels.length - 1) {
            currentChannel = channels[index + 1];
        }
        updateTV();
    }
});

document.getElementById("channel-down").addEventListener("click", function() {
    if (tvOn) {
        let index = channels.indexOf(currentChannel);
        if (index > 0) {
            currentChannel = channels[index - 1];
        }
        updateTV();
    }
});

document.getElementById("volume-up").addEventListener("click", function() {
    if (tvOn && volume < 100) {
        volume += 10;
        updateTV();
    }
});

document.getElementById("volume-down").addEventListener("click", function() {
    if (tvOn && volume > 0) {
        volume -= 10;
        updateTV();
    }
});

document.getElementById("mute").addEventListener("click", function() {
    if (tvOn) {
        volume = 0;
        updateTV();
    }
});

function updateTV() {
    const tvScreen = document.getElementById("tv-screen");
    const statusText = document.getElementById("status");
    
    if (tvOn) {
        tvScreen.src = "https://private-user-images.githubusercontent.com/203570197/427759209-73c06a43-efe2-49a4-96b9-d8afab210b26.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1MTU4ODYsIm5iZiI6MTc0MzUxNTU4NiwicGF0aCI6Ii8yMDM1NzAxOTcvNDI3NzU5MjA5LTczYzA2YTQzLWVmZTItNDlhNC05NmI5LWQ4YWZhYjIxMGIyNi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwMVQxMzUzMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMzIxYzI0OGY2NWU5OWUxNDEwODg1ZmI5YjEwMDVmNmZmZDlkZmIzMmY2YWRiYzExYjQ2ZmJjNTE4NDM0YzBjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.3S5EPyS85R-W1gpTNSUMkVCzSHIQ3d-dqnQgZiiOcFQ";
        statusText.textContent = `Canal: ${currentChannel} | Volume: ${volume}`;
    } else {
        tvScreen.src = "https://private-user-images.githubusercontent.com/203570197/429060314-1f80b1f0-03a5-49e4-895f-1c3417e16ec8.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM1MTYxNDIsIm5iZiI6MTc0MzUxNTg0MiwicGF0aCI6Ii8yMDM1NzAxOTcvNDI5MDYwMzE0LTFmODBiMWYwLTAzYTUtNDllNC04OTVmLTFjMzQxN2UxNmVjOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwMVQxMzU3MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNzZjNjkyMWM2ZGQ3ZmQ0NjU4MDQ2ZWNiMzI5YjU2MTEwNzA1ZGMzNjlkY2Q1Njc1Y2U3NmMyMDNhYTc0YmY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.oSCniDnFRiR71HRJVo4c61jYrRHHooCcNegg4uv3DBc";
        statusText.textContent = "TV Desligada";
    }
}