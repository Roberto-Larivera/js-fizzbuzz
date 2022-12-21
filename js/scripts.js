console.log('int ok');  //inizializzazione progetto
for (let i = 1 ; i <= 15 ; i++){
    // console.log('i',i,typeof i); //debug

    const ul = document.getElementById("box-ul");
    console.log('ul', ul, typeof ul);
    const li = document.createElement('li');
    ul.append(li);

    if (i % 5 == 0 && i % 3 == 0){
        //console.log('sono un multiplo di tre e cinque',i); //debug
        console.log('FizzBuzz');
        li.innerHTML = 'FizzBuzz';
    }
    else if (i % 3 == 0){
        //console.log('sono un multiplo di tre',i); //debug
        console.log('Fizz');
        li.innerHTML = 'Fizz';

    }
    else if (i % 5 == 0){
        //console.log('sono un multiplo di cinque',i); //debug
        console.log('Buzz');
        li.innerHTML = 'Buzz';

    }
    else{
        //console.log('non sono un divisore', i); //debug
        console.log(i)
        li.innerHTML = i;

    }


    // ul.append(li);
    // li.append(i);
    //newLi.innerHTML = `${index}`;
    //newLi.className = `box box-${index}`;

}









// for (let i = 1 ; i <= 10 ; i++){
//     // console.log('i',i,typeof i);
//     let tabUno = i * 1;
//     console.log(tabUno, i);
//     let tabbellinaTre = i * 3;
//     // console.log('tabbellina',tabbellina,typeof tabbellina);
//     console.log(tabbellinaTre, 'Fizz');
//     let tabbellinaCinque = i * 5;
//     console.log(tabbellinaCinque, 'Buzz');
// }
// let numeroQuasiCasuale = 98764;
// // Verificare se numeroQuasiCasuale è pari. Se è pari, alertare "Pari", altrimenti alertare "Dispari"
// if (numeroQuasiCasuale % 2 == 0) {
//     alert("Pari");
// }
// else {
//     alert("Dispari");
// }



// console.log('PRIMA DEL CICLO FOR');

// for (let i = 0; i < 10; i++) {

//     console.log('DURANTE IL CICLO FOR', i);

//     document.getElementById('mio-div').innerHTML += '<p>' + (i + 1) + '° P</p>';

// } 

// console.log('DOPO IL CICLO FOR');

// let risultatoDivisione = (10 / 3);
// let risultatoModulo = (10 % 3);
// console.log('risultatoDivisione 10 / 3: ' + risultatoDivisione);
// console.log('risultatoModulo 10 % 3: ' + risultatoModulo);