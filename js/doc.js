var apiKey = require('./../.env').apiKey;
export function medCall(symptom) {
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=OR&user_location=45.5231%2C122.6765&skip=0&limit=10&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      if(response.data.length === 0) {
        $('.errors').text("there are no doctors listed in your area for this symptom");
      }

      for(let i=0; i < response.data.length; i++) {
        let first = response.data[i].profile.first_name;
        let last = response.data[i].profile.last_name;
        let address = response.data[i].practices[0].visit_address.street;
        let phone = response.data[i].practices[0].phones[0].number;
        let web = response.data[i].practices[0].website;
        let nw = "this doctor does not have a website";
        let patient = response.data[i].practices[0].accepts_new_patients;

        if(response.data[i].practices[0].website === undefined) {
         $('.doctor').append("<ul>" + "<li>First:" + " " + first + "</li>" + "<li>Last: " + " " + last + "</li>" + "<li>Address: " + " " + address + "</li>" + "<li>Phone:" + " " + phone + "</li>" +
          "<li>Accepts new patients:" + " " + patient + "</li>" + "<li>Website: " + " " + nw + "</ul>");
        } else {
        $('.doctor').append("<ul>" + "<li>First:" + " " + first + "</li>" + "<li>Last: " + " " + last + "</li>" + "<li>Address: " + " " + address + "</li>" + "<li>Phone:" + " " + phone + "</li>" +
         "<li>Accepts new patients:" + " " + patient + "</li>" + "<li>Website: " + " " + web + "</ul>");
      }
     }
    },
    error: function() {
      $('.errors').text("there was an error with your request");
    }
  });
}
