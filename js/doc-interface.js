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
          let first = response.data[i].profile.first_name;
          let last = response.data[i].profile.last_name;
          let address = response.data[i].practices[i].visit_address.street;
          let phone = response.data[i].practices[i].phones[i].number;
          let patient = response.data[i].practices[i].accepts_new_patients;
        $('.doctor').append("<ul>" + "<li>First:" + " " + first + "</li>" + "<li>Last: " + " " + last + "</li>" + "<li>Address: " + " " + address + "</li>" + "<li>Phone:" + " " + phone + "</li>" +
         "<li>Accepts new patients:" + " " + patient + "</ul>");
       }
      },
      error: function(request, status, error) {
        $('.errors').text("err");
      }
    });
  });
});
