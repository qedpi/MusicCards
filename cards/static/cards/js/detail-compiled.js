'use strict';

// Generated by CoffeeScript 1.10.0
(function () {
  var shift;

  shift = function shift(s) {
    return s.toUpperCase();
  };

  $(function () {
    var temp;
    temp = $('#test-case').text();
    $('#lyrics').text(temp.split('\n').join('+'));

    /*
    
    $('#toggle-favorite').on 'Submit', (e) ->
      e.preventDefault()
      alert 'Favorited!'
      toggle_favorite
     */
    return $('#is_sharable').change(function () {
      var disable_status;
      disable_status = $(this).prop('checked') ? 'enable' : 'disable';
      $('#share_with').bootstrapToggle(disable_status);
      return $('#share_link').prop('disabled', !$('#share_link').prop('disabled'));
    });
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