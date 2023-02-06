function ver(){
    document.getElementById('oculto').style.display='block'
    document.getElementById('photo').style.marginRight='0px'
}

function quitar(){
    document.getElementById('oculto').style.display='none'
    document.getElementById('photo').style.marginRight='640px'
}

function mostrar(){
	document.getElementById('general8').style.display='block';
}

function ocultar(){
	document.getElementById('general8').style.display='none';
}

//formulario

function enviar(){
    let name= document.getElementById('name').value;
    let email= document.getElementById('email').value;
    let genero= document.getElementById('genero').value;

    document.getElementById('respuesta').innerHTML=name+" + "+email+" + "+genero;

}

