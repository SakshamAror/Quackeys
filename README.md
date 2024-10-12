# QUACKEYS
### Video Demo:  
https://youtu.be/cRm7Iqjm92c
### Description:
A google chrome extension that turns your keyboard in into a melodious soundboard with every keystroke. It plays different seounds for keys such as space, enter, and backspace. It has various sound profiles that contain real mechanical keyboards and other fun ones.

#### Features:
1) Sound Profiles:
You can choose a sound profile for your keyboard and the chrome extension will plaay sounds from that profile whenever a key is pressed. It uses a library of sounds to choose which to play. Each sound profile has 6 mp3 audio files that refer to the press and release sounds for backspace, enter, space, and any other key. They are named BackspacePress, BackspaceRelease, EnterPress, EnterRelease, KeyPress, KeyRelease, SpacePress, and SpaceRelease so the code can just change the folder name and play the suond without needing to change the file's name multiple times. All sound profiles are contained in the audio folder.

2) Use Button:
The 'Use Sound' button register's the user choice from the dropdown menu that allows them to choose the sound profile of their choice. This button also previews the sound profile by playing the 'KeyPress.mp3' file of that sound profile.

3) Volume Slider:
The volume slider simply lets the user change the volume of the extension.

4) Auto Mute when Media is Playing:
While testing the extension I noticed that the extension causes disturbance with any media playing. This would cause a distortion effect on any media playing as the extension's sounds take over. So, I added an option to the extension that allows the user to choose to auto mute the extension sounds when media is playing in the current tab. This also allowed the extension's sounds to not distract the user from any media playing, if turned on.

5) Auto-Saving:
The extension auto-saves any settings changed by the user. It saves the sound profile chosen by the user, the volume set by them, and the auto mute option. This allows the user for a streamless experience. To this, the extension saves data locally on the user's computer. This data is stored securely within Chrome and is not shared with any external servers, ensuring it stays on their device.

<img width="246" alt="ExtensionPopup" src="https://github.com/user-attachments/assets/bafadc16-6259-4792-bfe4-bb55bff0c318">

#### Design Choices:
When first creating this extension, the sounds played were same for any key but the pitch was randomized between a range. Although this brought a little bit of variability, the sounds felt a little repetitive and it didn't mirror a true mechanical keyboard's sounds that have sharp sounds for some keys (like the spacebar) and different sounds for other keys. So, I decided to collect sounds for 3 special keys (Backspace, Enter, and Spacebar) and one for any other generic key. This brought made the keyboard sound more like a mechanical one. I also commented out the pitch randomizing code because it produced noticeable lag. I tried other methods to reduce the lag and keep the pitch randomizer, for example, using an audio API. Nevertheless, it didn't bring enough substance to the sounds to be worth complicating the code and causing other problems in the future. Therefore, I only kept the different sounds and not the pitch randomizer.

Initially, I visualized the extension to only have real mechanical keyboard sound profiles, but when I tried some other special sounds, like a wood plank, I realized these 'extra' sound profiles will add more character to the extension. So, I added the Wood, Water, and Explosive profiles.

#### File Directory
In the extension's parent folder 'Quackeys', there are 2 subfolders and the main javascript, HTML, & CSS files. It also contains a manifest.json file that contains the metadata and configurations for the extension. The 2 subfolders are the 'audio' subfolder and the 'images' subfolder. In the 'images' subfolder, there are 3 icons for the extension that are of different sizes (16x16, 48x48, 128x128). I made these icons myself by merging a yellow-orange duck icon with a purple backdrop (which is a circle).

![QuackeysIcon128](https://github.com/user-attachments/assets/4a03f0e5-cb13-4ea3-873c-fe1a822bb510)

In the 'audio' subfolder, I have 9 folders for each sound profile which each contain 'BackspacePress.mp3', 'BackspaceRelease.mp3', 'EnterPress.mp3', 'EnterRelease.mp3', 'KeyPress.mp3', 'KeyRelease.mp3', 'SpacePress.mp3', and 'SpaceRelease.mp3'. These are accessed by the main 'content.js' file to play a sound when a key is pressed. The 'content.js' file contains the logic for the sounds and the auto mute feature. This file also communicates with the 'popup.js' file which relays information when the user selects a new sound profile, changes the volume, or toggles the auto mute setting. This 'popup.js' file supports the 'popup.html' file, which is the HTML file for the extension's UI. This HTML file is styled by 'style.css'.

#### Github
This extension has also been uploaded to Github for future improvements and distribution. The link to the repository: https://github.com/SakshamAror/Quackeys
