$(document).ready(function () {


});

function SwalMensaje(title, text, icon, url) {
    swal.fire({
	  title: title,
	  text: text,
	  icon: icon,
	  confirmButtonText: 'OK',
	  timer: 2500,
	  timerProgressBar: true
	}).then((result) => {

		//window.location.reload();
	});
}

function ValidarRUT(){

		let inputData = $("#inputData").val();
        $.ajax({
            url: './validar_rut.php',
            type: 'post',
            dataType: 'json',
            data: {"rut": inputData},
            success: function(data) {
				console.log(data);

				if(data){
					setTimeout(function () {
						SwalMensaje('RUT Válido', 'El RUT '+ inputData +' es Válido.', 'success');
					}, 100);
				}else{
					SwalMensaje('RUT no es Válido', 'El RUT '+ inputData +' no es Válido.', 'error');
				}
            },
            error: function(jqXHR, status, error) {
				SwalMensaje('Error', 'Error al intentar Validar el RUT.', 'error');
            }
        });
	
}