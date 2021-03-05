import $ from 'jquery';
import io from 'socket.io-client';
import './index.scss';

$(function () {
  const socket = io();

  socket.on('new user', (data) => {
    $('main').append(`<h1>${data.greeting}</h1>`);
  });
});
