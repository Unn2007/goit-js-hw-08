import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let seeTime = localStorage.getItem(STORAGE_KEY);
if (seeTime) {
  player.setCurrentTime(seeTime);
}
player.on(
  'timeupdate',
  throttle(function ({ duration, percent, seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds);
  }, 1000)
);
