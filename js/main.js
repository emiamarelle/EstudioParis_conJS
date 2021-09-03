
class Servicio {
    constructor(servicio) {
        this.servicioConsultado;
		this.tarea = servicio.tarea;
        this.stringDuplicado;
		this.precioDuplicado;
		this.precioAdicional;
		this.precioServicio;
        this.duplicado = servicio.duplicado;
		this.adicional = servicio.adicional;
    }	

    mostraMensaje(){

		if(this.tarea == "balance"){
			
			this.precioServicio = 6500
			this.servicioConsultado = "Se consultó por un servicio de Balance"


		}else if(this.tarea == "certificacion"){
			
			this.precioServicio = 3000
			this.servicioConsultado = "Se consultó por un servicio de Certificacion"

		}else if(this.tarea == "declaracion"){

			this.precioServicio = 3500	
            this.servicioConsultado = "Se consultó por un servicio de Declaración Jurada"

        }else{
			this.precioServicio = 2500
            this.servicioConsultado = "Se consultó por un servicio de Presentación de Ganancias"
        }

		if(this.duplicado == "SI"){
			 this.stringDuplicado = "con duplicado"
			 this.precioDuplicado = 2000
		}else{
            this.stringDuplicado = "sin duplicado"
			this.precioDuplicado = 0
       }

	   
		if(this.adicional != "NO"){

			this.precioAdicional = 1000
			
			$("#confirmacion").html(`<div>
										<a class="resp_div_a"> ¡Gracias por elegir al Estudio Contable Paris! <br><br> </a>
										<a> ${this.servicioConsultado} ${this.stringDuplicado} con un servicio extra a analizar según lo detallado. <br><br> </a>
										<a> El presupuesto estimado de los servicios cotizados es de: $ ${this.precioServicio + this.precioDuplicado + this.precioDuplicado} pesos. <br> (A esta cotización es posible que se adicionen cargos extras debido al Servicio Adicional que se detallo.) <br><br> </a>
										<a> Le enviaremos toda la información al email de contacto. <br><br> </a>
										<div class="btnConfirForm">	
											<button class="btnNuevaCot" onclick="location.href='presupuesto.html'">Cotizar otro servicio</button>
											<button class="btnVolverHome" onclick="location.href='../index.html'">Volver a la Home</button>
										</div>
									</div>`)	
		}else{

			this.precioAdicional = 0

			$("#confirmacion").html(`<div>
			                        	<a class="resp_div_a"> ¡Gracias por elegir al Estudio Contable Paris! <br><br> </a>
										<a> ${this.servicioConsultado} ${this.stringDuplicado}. <br><br> </a>
										<a> El presupuesto estimado de los servicios cotizados es de: $ ${this.precioServicio + this.precioDuplicado + this.precioAdicional} pesos. <br><br> </a>
										<a> Le enviaremos toda la información al email de contacto. <br><br> </a>
										<div class="btnConfirForm">
											<button class="btnNuevaCot" onclick="location.href='presupuesto.html'">Cotizar otro servicio</button>
											<button class="btnVolverHome" onclick="location.href='../index.html'">Volver a la Home</button>
										</div>
									</div>`)
		}
}
}

let confirmacion = document.getElementById("confirmacion")
let miFormulario = document.getElementById("cotizar")
let servicioConsultado = new Servicio({tarea:"",duplicado:"",adicional:""})
miFormulario.addEventListener("submit", validarFormulario);
let bienvenida = document.getElementById("bienvenida")
$("#bienvenida").on("mouseover",colorBienvenida)
$("#bienvenida").on("mouseleave",colorBienvenida)
$("#bienvenida").on("click",colorBienvenida)



function colorBienvenida(e){

	if(e.type == "mouseover"){

		bienvenida.className = "fondoBlanco"
	}else if(e.type == "mouseleave"){

		bienvenida.className = "fondoGris"
	}else{
      
       bienvenida.className = "fondoGrisOscuro"
	}


     switch(bienvenida.className){


     	case "fondoBlanco":
     	bienvenida.className = "fondoGris"
     	break;
     	case "fondoGris":
     	bienvenida.className = "fondoGrisOscuro"
     	break;
     	case "fondoGrisOscuro":
     	bienvenida.className = "fondoBlanco"
     	break;
     	default:
     	bienvenida.className = "fondoBlanco"
     	break
     }
}

function validarFormulario(e){
	e.preventDefault()
     let error = document.getElementById("error")
     error.innerHTML= "";
     error.style.color = "red"
	
	if(document.getElementById("nombreApellido").value != ""){
		servicioConsultado["nombreApellido"] = document.getElementById("nombreApellido").value
	}else{
		$("#error").html("Debe completar un nombre y apellido de contacto. </br>")
	}
	
	if(document.getElementById("email").value != ""){
		servicioConsultado["email"] = document.getElementById("email").value
	}else{
		$("#error").append("Debe completar una casilla de e-mail válida. </br>")
	}
	
	if(document.getElementById("tarea").value != "seleccion"){

		servicioConsultado["tarea"] = document.getElementById("tarea").value
	}else{

		$("#error").append("Debe seleccionar el servicio que desea consultar. </br>") 
	}

	if(document.getElementById("duplicado").value != "seleccion"){

		servicioConsultado["duplicado"] = document.getElementById("duplicado").value
	
	}else{

		$("#error").append("Debe seleccionar si desea un duplicado del servicio o no. </br>") 
	}

	if(document.getElementById("adicional").value != "seleccion"){

		servicioConsultado["adicional"] = document.getElementById("adicional").value
	
	}else{

		$("#error").append("Debe seleccionar si desea algún servicio adicional o no. </br>") 
	}

	

	if(error.innerHTML == ""){

		miFormulario.style.display = "none"
        servicioConsultado.mostraMensaje()
	}
}




