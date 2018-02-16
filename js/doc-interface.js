import { Doc } from './../js/doc.js';

$(document).ready(function() {
  $('#sym-form').submit(function(event){
    event.preventDefault();
    let symptom = $('#symptom').val();
    $('#symptom').val("");
    $.ajax({
      url: ``
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showFirst').text(`${}`);
        $('.showLast').text(`${}`);
      },
      error: function() {
        $('.error').text("")
      }
    });
  });
});
