function register()
    {
       const name= document.getElementById('name').value;
       const mail=document.getElementById('email').value;
       const number=document.getElementById('number').value;
       const date=document.getElementById('date').value;
       const time=document.getElementById('time').value;
       localStorage.setItem('name',name);
       localStorage.setItem('email',mail);
       localStorage.setItem('number',number);
       localStorage.setItem('date',date);
       localStorage.setItem('time',time);
    }
