const number = Number(prompt ('Zadejte číslo:'));
let result = '';

if (number === 0) {0
  result = 'nula';
} else if ((number >= 1 && number <= 10) || (number >= 19 && number <= 28)) {
  if (number % 2 === 0) {
    result = 'číslo sudé, barva černá'
  } else {
    result = 'číslo liché, barva červená'
 }
} else if ((number >= 11 && number <= 18) || (number >= 29 && number <= 36)) {
  if (number % 2 === 0) {
    result = 'číslo sudé, barva červená'
  } else {
    result = 'číslo liché, barva černá'
  } 
  } else {
    result = 'neplatné číslo'
  }

document.body.innerHTML += `<p>Výsledek je: ${result}.</p>`
