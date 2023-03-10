import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const setWatchingTime = ({ seconds }) => {
  localStorage.setItem(STORAGE_KEY, seconds);
};
player.on('timeupdate', throttle(setWatchingTime, 1000));
player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);