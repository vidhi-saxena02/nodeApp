
function getval(){
    const user = document.querySelectorAll('input')
    const email = user[0].value;
    const pass = user[1].value;
    console.log(email,pass)
    return {email,pass}
}
const apiUrl = "http://localhost:3000/users"
async function postUser(user){
    try{
    return await fetch(`${apiUrl}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
    })
} catch(e){
    console.log(e)
}
}

const btn = document.querySelector('.btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const user = getval();
    console.log(user);
    postUser(user);
})