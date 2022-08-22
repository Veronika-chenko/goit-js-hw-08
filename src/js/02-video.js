import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(setTime, 1000));

function setTime(data) {
    localStorage.setItem(CURRENT_TIME, data.seconds)
}

const currentTime = localStorage.getItem(CURRENT_TIME);
if (currentTime) {
    player.setCurrentTime(currentTime);
}

