//console.log('int ok');  //inizializzazione progetto
for (let i = 1 ; i <= 100 ; i++){
    // console.log('i',i,typeof i); //debug

    const containerBox = document.getElementById("container-box"); //prendo un 'elemento ul' del DOM tramite il suo id    //bonus
    //console.log('ul', ul, typeof ul); //debug
    //const b = document.createElement('div');  //bonus
    //const box = document.createElement('div');    //creo un elemento del DOM  //bonus
   //containerBox.append(box);     //bonus
    //box.className = "box";  //bonus
    //console.log(box.classList); //debug

    if (i % 5 == 0 && i % 3 == 0){  
        //console.log('sono un divisibile di tre e cinque',i); //debug
        console.log('FizzBuzz');    //stampa console
        //box.innerHTML = 'FizzBuzz';  //stampa dom  //bonus
        //box.classList.add("fizz-buzz");  //bonus
        //console.log(box.classList);
    }
    else if (i % 3 == 0){
        //console.log('sono un divisibile di tre',i); //debug
        console.log('Fizz');    //stampa console
        //box.innerHTML = 'Fizz';  //stampa dom  //bonus
        //box.classList.add("fizz");  //bonus
        //console.log(box.classList); //debug
    }
    else if (i % 5 == 0){
        //console.log('sono un divisibile di cinque',i); //debug
        console.log('Buzz');    //stampa console
        //box.innerHTML = 'Buzz';  //stampa dom  //bonus
        //box.classList.add("buzz");  //bonus
        //console.log(box.classList); //debug

    }
    else{
        //console.log('tutti i numeri che non sono divisibili per 3 e 5', i); //debug
        console.log(i)    //stampa console
        //box.innerHTML = i;  //stampa dom  //bonus

        //box.classList.add("default-box");  //bonus
        //console.log(box.classList); //debug
    }


    // ul.append(li);
    // li.append(i);
    //newLi.innerHTML = `${index}`;
    //newLi.className = `box box-${index}`;

}