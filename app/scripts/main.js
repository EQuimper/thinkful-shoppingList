/* global $: false */

$(document).ready(function(){
  'use strict';

  $('form').submit(function(e){
    if ($('input').val().length !== 0) { // Prevent item with 0
      var value = $('input').val();
      console.log(value);
      $('#itemList').append('<li class="item ui-state-default">' + value + '</li>'); // Add to the list
      $('form').find('input:text').val('');
      e.preventDefault();
    } else {
      alert('You must add a item'); // Message cause of empty
    }
  });

  // $('.itemList').draggable({
  //
  // });

  $(function() {
    $( "#itemList, #itemDone" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });

  $('.item').draggable();

  $('button').click(function() {
    $('.completed > li').remove();
  });

});
