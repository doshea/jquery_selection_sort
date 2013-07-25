var cleaned_text;

function grab_and_clean_text(callback){
  $.getJSON('http://hipsterjesus.com/api/', function(data) {
    //Remove periods
    var hipster_text = data.text.replace(/\./g, "");
    //Remove start and end <p> tags
    hipster_text = hipster_text.replace(/<p>/g, "");
    hipster_text = hipster_text.replace(/<\/p>/g, "");
    //Replace line breaks with newlines
    cleaned_text = hipster_text.replace(/(\r\n|\n|\r)/gm," ");
  }).done(callback);
}

$(function(){
  grab_and_clean_text(function(){
    // Stuff that can happen only after the text is returned
    console.log(cleaned_text);
  });
});