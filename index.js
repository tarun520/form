function register(event)
{
  event.preventDefault()
    let name=event.target.name.value;
    let email=event.target.email.value;
    let number=event.target.number.value;

    let obj={
      name,
      email,
      number
    }

    // sending data
    axios.post('https://crudcrud.com/api/a2090cc030f84e3f974debe8a0f78446/validatedata',obj)
    .then((res)=>{
      showuserdetails(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
}
function showuserdetails(data)
{
    let parele=document.getElementById('frm');
    let childele=`<li id='${data._id}'>${data.name} ${data.email} ${data.number}
                          <button class='btn btn-primary btn-sm' onClick=deluser('${data._id}')>Delete</button>
                          <button class='btn btn-primary btn-sm' onClick=edituser('${data.name}','${data.email}','${data.number}','${data._id}')>Edit</button></li>`
    parele.innerHTML=parele.innerHTML+childele;
}
function deluser(id)
{
  axios.delete(`https://crudcrud.com/api/a2090cc030f84e3f974debe8a0f78446/validatedata/${id}`)
  .then(
    removeuser(id)
  )
  .catch((err)=>console.log(err));

}
function removeuser(id)
{
  let parnode=document.getElementById('frm');
  let childnode=document.getElementById(id)
  if(childnode)
  {
    parnode.removeChild(childnode)
  }
}
function edituser(name,email,number,id)
{
  document.getElementById('name').value=name;
  document.getElementById('email').value=email;
  document.getElementById('number').value=number;

  deluser(id)
}
window.addEventListener('DOMContentLoaded',()=>{
  axios.get('https://crudcrud.com/api/a2090cc030f84e3f974debe8a0f78446/validatedata')
  .then((res)=>{
      console.log(res.data)
      for(var i=0;i<res.data.length;i++)
      {
          showuserdetails(res.data[i]);
      }
  })
})