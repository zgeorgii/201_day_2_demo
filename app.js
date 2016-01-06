
var userName = prompt('WHAT, is your name?');
alert('Correct, ' + userName + ' Next question...');
console.log('The user\'s name is ' + 'userName');

var answer1 = prompt('WHAT, is your favorite color?');
  if (answer1.length < 6) {
    alert('CORRECT!, last question...')
  }
  else {
    alert('INCORRECT! To the pits with you!!!')
  }

var answer2 = prompt('WHAT, is the airspeed velocity of an unladen swallow?');
  if (answer2 === 'African or European?') {
    alert('I don\'t know... AHHHH!!!');
  }
  else {
    alert('To the pits with you!!!');
  }

  alert('You may pass the bridge of death if all were answered correctly');
