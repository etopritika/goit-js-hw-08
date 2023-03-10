import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// console.log(iframe);
// console.log(player);

player.on('timeupdate', onPlay);

const onPlay = function(data) {
    console.log('played the video!');
};



