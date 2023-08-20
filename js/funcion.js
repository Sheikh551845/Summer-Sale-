function getTextValues(ID1, ID2, ID3, ID4, ID5, ID6, ID7, ID8)
{
    const textElement1=document.getElementById(ID1);
    const StringValue1= textElement1.innerText;
    const NumValue1= parseFloat(StringValue1);

    const textElement2=document.getElementById(ID2);
    const StringValue2= textElement2.innerText;
    const NumValue2= parseFloat(StringValue2);

    const total= NumValue2 + NumValue1;
    textElement2.innerText= total.toFixed(2) ;

    const textElement8=document.getElementById(ID8);
   
    textElement8.innerText= total.toFixed(2) ;

    const textElement3=document.getElementById(ID3);
    const StringValue3= textElement3.innerText;


     const textElement4=document.getElementById(ID4);


    const count= textElement4.childElementCount;
    
    const p = document.createElement('p');
    
    p.innerText=`${count+1}. ${StringValue3}`;
    p.style.fontSize='24px';
    p.style.fontWeight= '500';

    textElement4.appendChild(p);

    

    document.getElementById(ID5).disabled=false;

    const textElement7=document.getElementById(ID7);
    const inputValue=textElement7.value;

    const textElement6=document.getElementById(ID6);
    

   if(inputValue=="SELL200" && total>=200)
    {
        document.getElementById(ID6).disabled=false;
    }  
    return total;
}

function getInputValue(ID1,ID2, ID3)
{
    const inputElement1=document.getElementById(ID1);
    const string= inputElement1.innerText;
    const inputNumber1= parseFloat(string);
    
    const inputElement2=document.getElementById(ID2);
    
    const discount=(inputNumber1*0.2);
    
    inputElement2.innerText=discount.toFixed(2);
    const string2= inputElement2.innerText;
    const inputNumber2= parseFloat(string2);
    

    const inputElement3=document.getElementById(ID3);

    const fPrice = inputNumber1 - inputNumber2;
     console.log(fPrice);
    inputElement3.innerText= fPrice.toFixed(2);


 
}