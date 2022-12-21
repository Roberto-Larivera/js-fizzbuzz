console.log('int ok');  //inizializzazione progetto
for (let i = 1 ; i <= 15 ; i++){
    // console.log('i',i,typeof i); //debug

    const ul = document.getElementById("box-ul"); //prendo un 'elemento ul' del DOM tramite il suo id
    //console.log('ul', ul, typeof ul); //debug
    const li = document.createElement('li');    //creo un elemento del DOM
    ul.append(li);  //aggiungo elemento appena creato nel 'ul' precedente

    if (i % 5 == 0 && i % 3 == 0){
        //console.log('sono un divisibile di tre e cinque',i); //debug
       
        console.log('FizzBuzz');    //stampa console
        li.innerHTML = 'FizzBuzz';  //stampa dom
    }
    else if (i % 3 == 0){
        //console.log('sono un divisibile di tre',i); //debug
        console.log('Fizz');    //stampa console
        li.innerHTML = 'Fizz';  //stampa dom

    }
    else if (i % 5 == 0){
        //console.log('sono un divisibile di cinque',i); //debug
        
        console.log('Buzz');    //stampa console
        li.innerHTML = 'Buzz';  //stampa dom

    }
    else{
        //console.log('tutti i numeri che non sono divisibili per 3 e 5', i); //debug
        
        console.log(i)    //stampa console
        li.innerHTML = i;  //stampa dom
    }


    // ul.append(li);
    // li.append(i);
    //newLi.innerHTML = `${index}`;
    //newLi.className = `box box-${index}`;

}