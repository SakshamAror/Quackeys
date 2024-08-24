// content.js
let volume = 1;
let pressedKeys = new Set();
let selectedAudio = 'MXBlack';
let autoMute = true;

chrome.storage.local.get(['selectedAudio', 'volume', 'autoMute'], function (data) {
    if (data.selectedAudio !== undefined) {
        selectedAudio = data.selectedAudio;
    }
    if (data.volume !== undefined) {
        volume = data.volume;
    }
    if (data.autoMute !== undefined) {
        autoMute = data.autoMute;
    }
});

function isMediaPlaying() {
    const mediaElements = document.querySelectorAll('audio, video');
    for (let mediaElement of mediaElements) {
        if (!mediaElement.paused && !mediaElement.muted) {
            return true;
        }
    }
    return false;
}

document.addEventListener('keydown', function (event) {
    if (isMediaPlaying() && autoMute) {
        return;
    }

    if (!pressedKeys.has(event.code)) {
        pressedKeys.add(event.code);

        if (event.code == 'Backspace') {
            playSound(volume, selectedAudio, 'BackspacePress');
        }
        else if (event.code == 'Enter') {
            playSound(volume, selectedAudio, 'EnterPress');
        }
        else if (event.code == 'Space') {
            playSound(volume, selectedAudio, 'SpacePress');
        }
        else {
            playSound(volume, selectedAudio);
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (isMediaPlaying() && autoMute) {
        return;
    }

    pressedKeys.delete(event.code);
    if (event.code == 'Backspace') {
        playSound(volume, selectedAudio, 'BackspaceRelease');
    }
    else if (event.code == 'Enter') {
        playSound(volume, selectedAudio, 'EnterRelease');
    }
    else if (event.code == 'Space') {
        playSound(volume, selectedAudio, 'SpaceRelease');
    }
    else {
        playSound(volume, selectedAudio, 'KeyRelease');
    }
});

function playSound(volume = 1.0, audioFolder = 'MXBlack', audioFile = 'KeyPress') {
    const audio = new Audio(chrome.runtime.getURL('audio/' + audioFolder + '/' + audioFile + '.mp3'));
    audio.currentTime = 0;
    audio.volume = volume
    // audio.playbackRate = Math.random() * 0.2 + 0.9;  // (Randomize playback rate for pitch change) removed because it caused lag
    audio.play().catch(error => console.error('Audio playback failed:', error));
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.selectedAudio !== undefined) {
        selectedAudio = request.selectedAudio;
    }

    if (request.volume !== undefined) {
        volume = request.volume
    }

    if (request.autoMute !== undefined) {
        autoMute = request.autoMute
    }
});