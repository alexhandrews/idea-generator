var toggleSubmit = function() {
  var isDisabled = ![].some.call(document.querySelectorAll("input[type=text]"), function(input) {
    return input.value.length;
  });
  
  var submitBtn = document.querySelector("input[type=button]");
  
  if (isDisabled) {
    submitBtn.setAttribute("disabled", "disabled");
  } else {
    submitBtn.removeAttribute("disabled");
  }
};

document.querySelector("form").addEventListener("input", toggleSubmit, false);

function myFunction() {
    var myarray1 = new Array("A beginner's guide to", "Why you should care about!, "A potted history of", "A quick guide to", "Perspectives on", "100 years of", " A survey about", "A study into", "An alternative guide to", "An illustrated guide to", "An infographic about", "Best blogs about", "Everything you need to know about", "The amazing story of", "The amazing technology of", "The case against", "The changing face of", "The current state of", "The evolution of", "The future of", "The hidden cost of", "The history of", "The millennial's guide to", "The rise and fall of", "The rise of", "The true cost of", "The ultimate guide to", "The untold story of", "Top 10 hacks for", "Travelling with", "Getting to grips with", "The war against", "The women who shaped", "What we can learn from", "Debunking the myths around", "10 things you didn't know about", "10 people who shaped", "10 things that will shock you about", "An interactive timeline of", "An interactive gallery of", "The best alternatives to");
    var myarray2 = new Array("around the world", "through time", "in numbers", "- where did it all go wrong?", "according to industry experts", "in 2017", "according to science", "according to bloggers", "trends in 2017", "trends for 2018", "described by children", "when you're blind", "trends around the world", "trends through time", "through the eyes of a child");
    var random1 = myarray1[Math.floor(Math.random() * myarray1.length)];
    var random2 = myarray2[Math.floor(Math.random() * myarray2.length)];
    var output = random1 + " " + document.getElementById("myText").value + " " + random2;

    document.getElementById("result").innerHTML = output;
}




  