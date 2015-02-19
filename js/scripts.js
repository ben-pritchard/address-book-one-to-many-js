$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName,
                       lastName: inputtedLastName,
                       address: []
                     };

    $(".new-address").each(function() {
      var street = $(this).find("input.street").val();
      var city = $(this).find("input.city").val();
      var state = $(this).find("input.state").val();
      var zip = $(this).find("input.zip").val();
      var newAddress = { street: street,
                        city: city,
                        state: state,
                        zip: zip,
                        fullAddress: function() {
                          return this.street + '<br>' +
                          this.city + ', ' + this.state + ' ' + this.zip;
                        }};

      newContact.address.push(newAddress);
      $(this).find("input.street").val("");
      $(this).find("input.city").val("");
      $(this).find("input.state").val("");
      $(this).find("input.zip").val("");
    });

    $("ul#contacts").append("<li><span class='contact'>" +
                            newContact.firstName + " " +
                            newContact.lastName + " " +
                            "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $('.new-address').detach();
    $("#new-addresses").append( '<div class="new-address">' +
                                  '<div class="form-group">' +
                                    '<label for="street" class="sr-only">Street</label>' +
                                    '<input type="text" class="form-control street" placeholder="street address">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="city" class="sr-only">City</label>' +
                                    '<input type="text" class="form-control city" placeholder="city of residence">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="state" class="sr-only">State</label>' +
                                    '<input type="text" class="form-control state" placeholder="state / province">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="zip" class="sr-only">Zip</label>' +
                                    '<input type="text" class="form-control zip" placeholder="postal zipcode">' +
                                  '</div>' +
                                '</div>');

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      newContact.address.forEach(function(address) {
        $("#full-address").append("<li>" + address.fullAddress() + "</li>")
      });
      $(".full-address").text("");


    });
  });




  // $("button#dummy-create").click(function(event) {
  //   var newAddress = { street: "123 Main St.",
  //     city: "Beaverton",
  //     state: "Oregon",
  //     zip: "97005",
  //     fullAddress: function() {
  //       return this.street + '<br>' +
  //       this.city + ', ' + this.state + ' ' + this.zip;
  //     }};
  //
  //     var newContact = { firstName: "Bob",
  //       lastName: "Smith",
  //       address: newAddress.fullAddress()
  //     };
  //
  //   $("ul#contacts").append("<li><span class='contact'>" +
  //                           newContact.firstName + " " +
  //                           newContact.lastName + " " +
  //                           "</span></li>");
  //
  //   $(".contact").last().click(function() {
  //     $("#show-contact").show();
  //     $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
  //     $(".first-name").text(newContact.firstName);
  //     $(".last-name").text(newContact.lastName);
  //     $("#full-address").text("");
  //     $("#full-address").append(newContact.address);
  //   });
  // });

  $("#add-address").click(function() {
    $("#new-addresses").append( '<div class="new-address">' +
                                  '<div class="form-group">' +
                                    '<label for="street" class="sr-only">Street</label>' +
                                    '<input type="text" class="form-control street" placeholder="street address">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="city" class="sr-only">City</label>' +
                                    '<input type="text" class="form-control city" placeholder="city of residence">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="state" class="sr-only">State</label>' +
                                    '<input type="text" class="form-control state" placeholder="state / province">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="zip" class="sr-only">Zip</label>' +
                                    '<input type="text" class="form-control zip" placeholder="postal zipcode">' +
                                  '</div>' +
                                '</div>');
  });
});
