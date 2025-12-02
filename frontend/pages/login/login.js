const button =document.querySelector("button")
button.onclick =(event)=>{
    event.preventDefault()
    signIn()
}

 async function signIn(){
   
   const email = document.querySelector("#email").value
   const password = document.querySelector("#password").value

   if( email=== "" || password===""){
    alert("PREENCHA TODAS AS INFORMAÇÕES, animal ")
    return
   }

   const user = {

email,
password
   }
  const response = await fetch("https://backend-eight-phi-99.vercel.app/", {
    method: "POST",
    headers :{
        "Content-Type": "application/json"
    },

    body: JSON.stringify({user})
   }).then(response=> response.json())

   //const{message}=response

   //alert(message)

  // window.location.href = "../index.html"
}