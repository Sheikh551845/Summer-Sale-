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
    

   if(total>=200)
    {
        document.getElementById(ID6).disabled=false;
    }  
    
}

function getInputValue(ID1,ID2, ID3, ID4)
{
    const inputElement1=document.getElementById(ID1);
    const string1= inputElement1.innerText;
    const inputNumber1= parseFloat(string1);
    
    const inputElement2=document.getElementById(ID2);
    
    const discount=(inputNumber1*0.2).toFixed(2);
    
    
    const string2= inputElement2.innerText;
    const inputNumber2= parseFloat(string2);
    

    const inputElement3=document.getElementById(ID3);

    const inputElement4=document.getElementById(ID4);
    const string4= inputElement4.value;

    if(string4==='SELL200'){
        inputElement2.innerText=discount
        const fPrice = inputNumber1 - discount;
        inputElement3.innerText=fPrice;
        
    }
    


 
}

function homeClick(ID1, ID2, ID3, ID4, ID5)
{
    const home1=document.getElementById(ID1);
    home1.value='';

    const home2=document.getElementById(ID2);
    home2.innerText='00.00';

    const home3=document.getElementById(ID3);
    home3.innerText='00.00';

    const home4=document.getElementById(ID4);
    home4.innerText='00.00';

    const home5=document.getElementById(ID5);
    home5.innerText='';
}