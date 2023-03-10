import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// console.log(iframe);
// console.log(player);

player.on('play', onPlay);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', currentTime);
  const currentTime = {
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
  };
  player.setCurrentTime(currentTime);
};
