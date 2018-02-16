import  medCall from './../js/doc.js';
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
        for(let i=0; i < response.data.length; i++) {
          setTimeout(function() { console.log(response.data[i].profile.first_name); },1000);
          let first = response.data[i].profile.first_name;



        $('.first').text(first);
        $('.last').text(" " + `${response.data[0].profile.last_name}`);
        $('.address').text(" " + `${response.data[0].practices[0].visit_address.street}`);
        $('.phone').text(" " + `${response.data[0].practices[0].phones[0].number}`);
        $('.website').text(" " + `${response.data[0].practices[0].website}`); // issue
        $('.patient').text(" " + `${response.data[0].practices[0].accepts_new_patients}`);
      }
      },
      error: function() {
        $('.errors').text("There was an error with the request.")
      }
    });
  });
});
