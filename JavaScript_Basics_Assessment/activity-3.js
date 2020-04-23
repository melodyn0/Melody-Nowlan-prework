let studentnames = ['Amy', 'Gina', 'Rosa'];

for (let i = 0; i < 3; i++){
    studentnames.push(prompt('Enter a name.'));
}

for (let i = 0; i < studentnames.length; i++){
    alert(studentnames[i]);
}

// for some reason, console.log() doesn't print anything when i run my code on chrome. i'm using alert() instead.