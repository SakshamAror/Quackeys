// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('audioSelect');
    const range = document.getElementById('volumeControl');
    const autoMuteToggle = document.getElementById('autoMuteToggle')

    chrome.storage.local.get(['selectedAudio', 'volume', 'autoMute'], function (data) {
        if (data.selectedAudio != undefined) {
            dropdown.value = data.selectedAudio;
        }

        if (data.volume !== undefined) {
            range.value = data.volume;
        }

        if (data.autoMute !== undefined) {
            autoMuteToggle.checked = data.autoMute;
        }
    });


    document.getElementById('playButton').addEventListener('click', function () {
        const selectedAudio = document.getElementById('audioSelect').value;
        const audio = new Audio(chrome.runtime.getURL('audio/' + selectedAudio + '/' + 'KeyPress.mp3'));
        audio.play();

        chrome.storage.local.set({ 'selectedAudio': selectedAudio });

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { selectedAudio: selectedAudio });
        });
    });

    range.addEventListener('input', function (event) {
        var volume = range.value

        chrome.storage.local.set({ 'volume': volume });

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { volume: volume });
        });
    });

    document.getElementById('autoMuteToggle').addEventListener('change', function () {
        const autoMute = autoMuteToggle.checked;

        chrome.storage.local.set({ 'autoMute': autoMute });

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { autoMute: autoMute });
        });
    });
});
