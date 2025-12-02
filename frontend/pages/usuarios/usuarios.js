const main = document.querySelector("main")


async function searcpeople (){
   const persons= await fetch("http://localhost:3333").then(response => response.json())
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