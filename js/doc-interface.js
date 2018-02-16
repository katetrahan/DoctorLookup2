import  medCall from './../js/doc.js';
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#sym-form').submit(function(event){
    event.preventDefault();
    let symptom = $('#symptom').val();
    $('#symptom').val("");
  });
});
