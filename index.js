const selected = {
    selected:0,
  }


  function thankYou (){

    let firstElement = document.querySelector('.rating-1');
    let secondElement = document.querySelector('.rating-2');
    let thirdElement = document.querySelector('.rating-3');
    let fourthElement = document.querySelector('.rating-4');
    let fifthElement = document.querySelector('.rating-5');

    const buttonElement = document.querySelector('.js-btn');

    firstElement.innerHTML = 1;
    secondElement.innerHTML = 2;
    thirdElement.innerHTML = 3;
    fourthElement.innerHTML = 4;
    fifthElement.innerHTML = 5;

      isFirstElement = false;

      firstElement.addEventListener('click', function (){
       isFirstElement = !isFirstElement;
       if(isFirstElement){
          firstElement.classList.add('rating-selected');

         selected.selected =1;
         console.log(selected);
       }else{
         firstElement.classList.remove('rating-selected');
        }
      })

      isSecondElement = false;

      secondElement.addEventListener('click', function (){
        isSecondElement = !isSecondElement;
        if(isSecondElement){
          secondElement.classList.add('rating-selected');
          selected.selected =2;
          console.log(selected);
        }else{
          secondElement.classList.remove('rating-selected');
        }
      })

      isThirdElement = false;

      thirdElement.addEventListener('click', function (){
        isThirdElement = !isThirdElement;
        if(isThirdElement){
          thirdElement.classList.add('rating-selected');
          selected.selected =3;
          console.log(selected);
        }else{
          thirdElement.classList.remove('rating-selected');
        }
      });

      isFourthElement = false;

      fourthElement.addEventListener('click', function (){
        isFourthElement = !isFourthElement;
        if(isFourthElement){
          fourthElement.classList.add('rating-selected');
          selected.selected =4;
          console.log(selected);
        }else{
          fourthElement.classList.remove('rating-selected');
        }
      });

      isFifthElement = false;

      fifthElement.addEventListener('click', function (){
        isFifthElement = !isFifthElement;
        if(isFifthElement){
          fifthElement.classList.add('rating-selected');
          selected.selected =5;
          console.log(selected);
        }else{
          fifthElement.classList.remove('rating-selected');
        }
      });

    buttonElement.addEventListener('click', function (){

      if (buttonElement.value = 'submit'){


        firstElement.addEventListener('click', function (){
          console.log(firstElement.value);
        });

        const fifthElement = document.querySelector('.rating-5').innerHTML.value;
        document.querySelector('.rating-componet-main').style.display = 'none';

        document.querySelector('.rating-thank-you-main').style.display = 'block';

        document.querySelector('.thank-select').innerText = `You selected ${selected.selected} out of 5.`;

        document.querySelector('.thanks-msg').style.display = 'flex';
        document.querySelector('.thanks-msg').style.justifyContent = 'center';
      ;





      }
    });
  }

  thankYou ();