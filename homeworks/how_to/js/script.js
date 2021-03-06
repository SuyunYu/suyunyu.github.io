//variabel to track the number of steps
var totalsteps= 6;

//variatble to track which step be displayed
var currentstep= 0;
//stpre the html of each slide
var currentslide;

$(function(){
  $('.totalsteps').html(totalsteps);

  //hide the step
  $('.steps li, .end, .controls, #prev' ).hide();

});

//click events

$('#begin').on('click', function(){
  //do something here
  $('.welcome').hide();
  currentstep= 1;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('.controls').fadeIn(1000);
  $('h2').html('step' + currentstep);
});

//click on Next
$('#next').on('click', function(){
  if(currentstep != totalsteps){
  $(currentslide).hide();
  currentstep++;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('step' + currentstep);
  }
  if(currentstep == totalsteps){
    $('#next').hide();
  }
  if(currentstep != 1){
    $('#prev').show();
  }
});
//click on prev
$('#prev').on('click', function(){
  $(currentslide).hide();
  currentstep--;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('step' + currentstep);

  if(currentstep != totalsteps){
    $('#next').show();
  }
  if(currentstep == 1){
    $('#prev').hide();
  }
});

$('#finish').on('click', function(){
  //hide everything again
  $('.steps li, .controls, #prev').hide();
  $('.end') .fadeIn(1000);

});

$('h2').on('mouseover', function(){
  $(this).css('color','green');
});
$('h2').on('mouseleave', function(){
  $(this).css('color','black');
});
$('#end').on ('click', function(){
  locaton.reload();
});
