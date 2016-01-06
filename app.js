
var userName = prompt('WHAT, is your name?');
alert('Correct, ' + userName + ' Next question...');
console.log('The user\'s name is ' + 'userName');

var answer1 = prompt('WHAT, is your favorite color?');
  if (answer1.length < 6 && answer1.length > 3) {
    alert('CORRECT!, last question...');
  }
  else {
    alert('INCORRECT! To the pits with you!!!');
  }

var answer2 = prompt('WHAT, is the airspeed velocity of an unladen swallow?');
  if (answer2 === 'African or European?' || 'african or european?') {
    alert('I don\'t know... AHHHH!!!');
  }
  else {
    alert('To the pits with you!!!');
  }

    alert('You may pass the bridge of death if all were answered correctly.');

    alert('You enter the room of The Holy Grail!');

  var userNumber = prompt('Pick a cup, they are numbered 1-10');
  var computerNumber = Math.floor((Math.random() * 10) + 1);
    if (userNumber <= 5 && computerNumber <= 5) {
      alert('You drink the water and embrace the feeling of immortality! \
      The Holy Grail is yours!');
    }
    else if (userNumber > 5 && computerNumber > 5) {
      alert('You drink the water, shit your guts out and die...');

    }
    else {
      alert('You are a Pu*** and refuse to drink out of any cup... \
      Your journey was for nothing.');
    }
