'use strict';

// Generated by CoffeeScript 1.10.0

/* QEDPI's Latte */

(function () {
  var Transposer;

  Transposer = require('chord-transposer');

  $(function () {
    var animate_body, into_lines, pretty, scroll_speed, scroll_speed_fast, scroll_speed_medium, scroll_speed_slow, scroll_state_off, scroll_state_on, shareClipboard, share_link, stop_animation, temp, words;
    into_lines = function into_lines(text) {
      return text.split('\n');
    };
    words = function words(line) {
      return line.split(' ');
    };
    $('#transpose-up').click(function () {
      var lyrics_text;
      lyrics_text = $('#lyrics').text();
      return $('#lyrics').html(Transposer.transpose(lyrics_text).fromKey('Em').up(1)['text']);
    });
    $('#transpose-down').click(function () {
      var lyrics_text;
      lyrics_text = $('#lyrics').text();
      return $('#lyrics').html(Transposer.transpose(lyrics_text).fromKey('Em').down(1)['text']);
    });
    shareClipboard = new Clipboard('#share_link_passcode');
    temp = $('#test-case').text();
    pretty = {
      val: 2
    };

    /**
    #my docstring
     *
     */

    /*
    scroll_lyrics = $('div.autoscrolling')
    setInterval ->
      pos = scroll_lyrics.scrollTop
      scroll_lyrics.scrollTop(++pos)
    , 100
     */
    scroll_speed_fast = 100000;
    scroll_speed_medium = 200000;
    scroll_speed_slow = 400000;
    scroll_speed = scroll_speed_medium;
    scroll_state_off = 'fa fa-arrow-down';
    scroll_state_on = 'fa fa-pause';
    stop_animation = function stop_animation() {
      return $('html, body').stop();
    };
    animate_body = function animate_body() {
      var scrollable;
      $('html, body').animate({
        scrollTop: $('html, body').get(0).scrollHeight
      }, scroll_speed);
      return scrollable = $('html, body');

      /*
      if ($(scrollable).scrollTop() + $(scrollable).innerHeight()) * .1 >= $(scrollable).scrollHeight
        $('#autoscroll-button').removeClass(scroll_state_on).addClass(scroll_state_off)
        stop_animation()
        alert 'done scrolling'
       */
    };
    $('#autoscroll-button').click(function () {
      var current;
      current = $('#autoscroll-button');
      if (current.hasClass(scroll_state_off)) {
        $('#autoscroll-button').removeClass(scroll_state_off).addClass(scroll_state_on);
        return animate_body();
      } else {
        $('#autoscroll-button').removeClass(scroll_state_on).addClass(scroll_state_off);
        return stop_animation();
      }
    });
    $('#autoscroll-faster').click(function () {
      stop_animation();
      scroll_speed *= .75;
      return animate_body();
    });
    $('#autoscroll-slower').click(function () {
      stop_animation();
      scroll_speed *= 1.3;
      return animate_body();
    });
    $('#is_sharable').change(function () {
      var disable_status;
      disable_status = $(this).prop('checked') ? 'enable' : 'disable';
      $('#share_with').bootstrapToggle(disable_status);
      return $('#share_link').prop('disabled', !$('#share_link').prop('disabled'));
    });
    share_link = '';
    $('#share_link').click(function () {
      return share_link = $('#share_link_passcode').text();
    });
    return $('#copy_sharelink_clipboard').click(function () {
      var link_new;
      link_new = window.location.href.split('/').slice(0, -2).join('/') + '/' + share_link;
      $('#share_link_passcode').val(window.location.href.split('/').slice(0, -2).join('/') + '/' + $('#share_link_passcode').val());
      $('#share_link_passcode').select();
      return document.execCommand('copy');
    });

    /*
    $('#toggle-favorite').on 'Submit', (e) ->
      e.preventDefault()
      alert 'Favorited!'
      toggle_favorite
     */
  });

  /*first multiline coment!
   */

  /*
  name = 'hello bye'
  
  coffee = ->
    console.log 'coffee'
  
  double = (x) ->
    x * 2
  
  console.log name
  console.log double 5
  
  makeitdouble = (msg) ->
    answer = confirm msg
    "your answer is #{answer}"
  
  alert makeitdouble('apple')
   */
}).call(undefined);

//# sourceMappingURL=detail.js.map

//# sourceMappingURL=detail-compiled.js.map