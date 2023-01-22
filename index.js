function register()
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
       localStorage.setItem('myobj',myobj_serialized);
    }
