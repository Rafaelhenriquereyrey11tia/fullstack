const main = document.querySelector("main")


async function searcpeople (){
   const persons= await fetch("https://backend-eight-phi-99.vercel.app/").then(response => response.json())
  persons.map(persons=>{
    main.innerHTML += ` 
    <section>
        <h2>Nome:${persons.name}</h2>
        <p>Email:${persons.email}</p>
        <p>Idade:${persons.age} anos</p>
     </section>
    `
  })
}

searcpeople()