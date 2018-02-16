import { Doc } from './../js/doc.js';
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#sym-form').submit(function(event){
    event.preventDefault();
    let symptom = $('#symptom').val();
    $('#symptom').val("");
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=OR&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=${apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(`${response.data.length}`);
        console.log(`${response.data[0].profile.first_name}`);
        console.log(`${response.data[1].profile.first_name}`);
        // $('.showFirst').text(`${}`);
        // $('.showLast').text(`${}`);
      },
      error: function() {
        $('.error').text("")
      }
    });
  });
});
