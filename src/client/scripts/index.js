import $ from 'jquery';
import io from 'socket.io-client';
import * as math from '../../shared/math.js';
import '../styles/index.scss';

// Do client-side calculations using shared code
console.log('math.sum(1, 2) = ', math.sum(1, 2));
console.log('math.div(1, 2) = ', math.div(1, 2));
console.log('math.mod(1, 2) = ', math.mod(1, 2));

$(function () {
  const socket = io();

  socket.on('new user', (data) => {
    $('#root').append(`<h1>${data.greeting}</h1>`);
  });
});
