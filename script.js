let formulario = document.querySelector("form");

let listaUsers =[];
if (!localStorage.getItem("listaUsers")){
   
   localStorage.setItem("listaUsers", JSON.stringify(listaUsers));
};






formulario.addEventListener("submit", function(event) {
	event.preventDefault();

    const nombre = event.target.nombre.value;
    const email = event.target.email.value;
    const mesaje = event.target.mensaje.value;
    const imagen = event.target.imagen.value;


//let p = document.createTextNode(pintar);
    //document.body.appendChild(p);


    let usuario ={
        nombre: nombre,
        email: email, 
        mensaje: mesaje, 
        imagen: imagen
    }
    
    let nuevoUser = JSON.parse(localStorage.getItem("listaUsers"));
    
    nuevoUser.push(usuario);
    localStorage.setItem("listaUsers", JSON.stringify(nuevoUser));
    let datospintar = JSON.parse(localStorage.getItem("listaUsers"));
    console.log(datospintar);
    let x = datospintar.length -1;
    let pintar = `<p><b>Nombre:</b> ${datospintar[x].nombre}</p>
                        <p><b>E-mail:</b> ${datospintar[x].email}</p>
                        <p><b>Mensaje:</b> ${datospintar[x].mensaje}</p>
                        <p><b>Url Imagen:</b> ${datospintar[x].imagen}</p>`
        
    document.getElementById("pintar").innerHTML += pintar;

/*
    let datospintar = JSON.parse(localStorage.getItem("listaUsers"));
    console.log(datospintar);
    datospintar.forEach(element => {
        let pintar = `<p><b>Nombre:</b> ${element.nombre}</p>
                        <p><b>E-mail:</b> ${element.email}</p>
                        <p><b>Mensaje:</b> ${element.mensaje}</p>
                        <p><b>Url Imagen:</b> ${element.imagen}</p>`

    
            document.getElementById("pintar").innerHTML = pintar;                
    
    });
        
        */

})
