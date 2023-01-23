let bod=document.querySelector('body');
function register(e)
    {
       const name= document.getElementById('name').value;
       const mail=document.getElementById('email').value;
       const number=document.getElementById('number').value;
       const date=document.getElementById('date').value;
       const time=document.getElementById('time').value;
       let myobj={
        'name':name,
        'email':mail,
        'number':number,
        'date':date,
        'time':time
       } 
       let myobj_serialized=JSON.stringify(myobj);
       localStorage.setItem(mail,myobj_serialized);
       let parentele=document.createElement('ul');
       parentele.id='listofitems';
      let childele=document.createElement('li');
      childele.textContent=" "+name+" "+mail+" "+number+" "+date+" "+time;
      let dele=document.createElement('input')
      dele.type='button';
      dele.value='delete';
      let edi=document.createElement('input');
      edi.type='button';
      edi.value='edit';
      
      dele.onclick=()=>{
         localStorage.removeItem(childele);
         parentele.removeChild(childele);
      }
      edi.onclick=()=>{
         document.getElementById('name').value=name;
         document.getElementById('email').value=mail;
         document.getElementById('number').value=number;
         localStorage.removeItem(childele);
         parentele.removeChild(childele);
      }
      childele.appendChild(dele);
      childele.appendChild(edi);
      parentele.appendChild(childele);
      bod.appendChild(parentele);
  
       
    }
