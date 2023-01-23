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
       
    }
let sub=document.querySelector('#asd');
sub.addEventListener('submit',showlist)
function showlist()
{
   let parentele=document.createElement('listofitems');
   let childele=document.createElement('li');
   childele.textContent=name+" "+mail+" "+number+" "+date+" "+time;

   const delebtn=document.createElement('input');
   delebtn.type='button';
   delebtn.value='delete';
   delebtn.onclick=()=>{
     localStorage.removeItem(mail);
     parentele.removeChild(childele);
   }
   childele.appendChild(delebtn);
   parentele.appendChild(childele);
   bod.appendChild(parentele);
}