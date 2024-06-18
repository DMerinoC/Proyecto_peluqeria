const URI_Variables_Listar = "http://localhost/app/services/variables/listar.php";
const URI_Variables_Guardar = "http://localhost/app/services/variables/guardar.php";
const URI_Variables_Eliminar = "http://localhost/app/services/variables/eliminar.php";
const URI_Variables_Actualizar = "http://localhost/app/services/variables/actualizar.php";
const URI_Login_Validar_Usuario = "http://localhost/app/services/login/validarUsuario.php";
const URI_Login_Verificar_Usuario = "http://localhost/app/services/login/verificarToken.php";
const URI_Usuarios_Listar = "http://localhost/app/services/usuarios/listar.php";
const URI_Usuarios_Guardar = "http://localhost/app/services/usuarios/guardar.php";
const URI_Usuarios_Eliminar = "http://localhost/app/services/usuarios/eliminar.php";
const URI_Usuarios_Actualizar = "http://localhost/app/services/usuarios/actualizar.php";
const URI_Usuario_VerificarTok = "http://localhost/app/services/usuarios/VerificarTok.php";
const URI_Local_Guardar = "http://localhost/app/services/perfiles/guardar.php";
const URI_Servicios_Listar = "http://localhost/app/services/servicios/listar.php";
const URI_Servicios_Actualizar = "http://localhost/app/services/servicios/actualizar.php";
const URI_Servicios_Eliminar = "http://localhost/app/services/servicios/eliminar.php";
const URI_Servicios_Guardar = "http://localhost/app/services/servicios/guardar.php";
const URI_Citas_Listar = "http://localhost/app/services/citas/listar.php";
const URI_Citas_ListarCitaUsuario = "http://localhost/app/services/citas/listarCitaCliente.php";
const URI_Citas_Eliminar = "http://localhost/app/services/citas/eliminar.php";
const URI_Citas_GuardarCitasAdmin = "http://localhost/app/services/citas/guardar.php";
const URI_Citas_Actualizar = "http://localhost/app/services/citas/actualizar.php";
const URI_Citas_GuardarCitaUsuario = "http://localhost/app/services/citas/guardarCitaUsuario.php";
const URI_Citas_Reporte = "http://localhost/app/services/citas/reporte.php";

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// V    V   AAA   RRRRR   III  AAA   BBBB   L     EEEE   SSS
//  V  V   A   A  R    R   I  A   A  B   B  L     E     S
//  V  V   AAAAA  RRRRR    I  AAAAA  BBBB   L     EEEE   SSS
//  V  V   A   A  R   R    I  A   A  B   B  L     E         S
//   VV    A   A  R    R  III  A   A  BBBB   LLLL  EEEE  SSS
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
function CargarVariables() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            responseJson = JSON.parse(this.response)
            for (let index = 0; index < responseJson.length; index++) {
                const element = responseJson[index];
                // console.log(element);
                CambiarContenido(element.llave, element.valor);
            };
        }
    });
    xhr.open("GET", URI_Variables_Listar);
    xhr.send();
}

function GuardarVariable() {
    var frm = document.getElementById("frmGuardarVariable");
    var llave = document.getElementById("llave").value;
    var valor = document.getElementById("valor").value;
    if (llave == "" || llave == null) {
        Swal.fire("Ingrese un dato válido para el llave");
        return;
    } else if (llave.startsWith(' ') && llave.endsWith(' ')) {
        Swal.fire('La llave no debe comenzar ni terminar con espacios.');
        return;
    }
    if (valor == "" || valor == null) {
        Swal.fire("Ingrese un dato válido para el valor");
        return;
    } else if (valor.startsWith(' ') && valor.endsWith(' ')) {
        Swal.fire('El valor no debe comenzar ni terminar con espacios.');
        return;
    }
    var formData = new FormData(frm);

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    formData.append("token", usuario.token);
    formData.append("nombreUsuario", usuario.NombreUsuario);

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.response == "true") {
                Swal.fire({
                    icon: "info",
                    title: "Mantenimiento de variables",
                    text: "Proceso desarrollado correctamente",
                    footer: '<p>Variables del sistema</p>'
                });

                setTimeout(function () {
                    window.location.href = "http://localhost/admin/variables/index.html";
                }, 3000);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Error de contenido...",
                    text: "Ocurrio un error durante el proceso de guardado",
                    footer: '<p>Volver a intentar</p>'
                });
            }
        }
    });
    xhr.open("POST", URI_Variables_Guardar, true);
    xhr.send(formData);
}

function ListarVariables() {
    let htmlResultado = "";

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario != null) {
        var data = new FormData();
        data.append("token", usuario.token);
        data.append("nombreUsuario", usuario.NombreUsuario);

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                responseJson = JSON.parse(this.response)
                for (let index = 0; index < responseJson.length; index++) {
                    const element = responseJson[index];
                    let html = "<tr><td>" + element.codigo + "</td>" +
                        "<td>" + element.llave + "</td>" +
                        "<td>" + element.valor + "</td>" +
                        "<td>" +
                        "<button class='btn btn-primary' onclick='ActualizarVariable(" + element.codigo + ")' >Editar</button>" +
                        "<button class='btn btn-danger' onclick='EliminarVariable(" + element.codigo + ")' >Eliminar</button>" +
                        "</td></tr>";
                    htmlResultado = htmlResultado + html;
                };
                document.getElementById("tblVariables").innerHTML = htmlResultado;
            }
        });
        xhr.open("POST", URI_Variables_Listar, true);
        xhr.send(data);
    }
}

function CambiarContenido(idElemento, textElemento) {
    // let usuario = JSON.parse(localStorage.getItem("usuario"));

    // console.log(usuario.token);
    var elementoHTML = document.getElementById(idElemento);
    if (elementoHTML != null) {
        document.getElementById(idElemento).innerHTML = textElemento;
    }
}
function EliminarVariable(codigoVariable) {
    Swal.fire({
        title: "Desea eliminar la variable?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `cancelar`
    }).then((result) => {
        if (result.isConfirmed) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var response = JSON.parse(this.responseText);
                    if (response == true) {
                        Swal.fire("Variable " + codigoVariable + " Eliminado!", "", "success");
                        // ListarVariables();
                    }
                }
            });
            xhr.open("POST", URI_Variables_Eliminar);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("codigo=" + codigoVariable);
        }
    });
}
async function ActualizarVariable(codigoVariable) {
    const { value: variable } = await Swal.fire({
        title: "Vas a cambiar el valor de la variable:",
        html: `
          <h4>Valor de la Variable</h4>
          <input id="swal-input1" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
            ];
        }
    });

    if (variable) {
        const campo = variable[0];
        if (campo == null || campo == "") {
            alert("Rellena el campo solicitado.");
            return;
        } else if (campo.startsWith(' ') && campo.endsWith(' ')) {
            alert('El campo no debe comenzar ni terminar con espacios.');
            return;
        }

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                try {
                    var response = JSON.parse(this.responseText);
                    if (response === true) {
                        Swal.fire("Variable " + codigoVariable + " Actualizado!", "", "success");
                        // ListarVariables();
                    } else {
                        Swal.fire("Error al actualizar la variable.", "", "error");
                    }
                } catch (e) {
                    Swal.fire("Error en la respuesta del servidor.", "", "error");
                }
            }
        });

        xhr.open("POST", URI_Variables_Actualizar);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("codigo=" + codigoVariable + "&valor=" + encodeURIComponent(campo));
    }
}

function CargarControlesSesion() {
    let usuarioToken = localStorage.getItem("usuario");
    if (usuarioToken != null) {
        let usuario = (JSON.parse(usuarioToken));
        let elementoHTML = document.getElementById("navOpciones");
        let elementoHTML2 = document.getElementById("opcionalidadGuardado");
        if (usuario.CodigoTipoPerfil == 1) {
            let nuevoHTML2 = "<button class='btn btn-success' type=button onclick=GuardarCitaAdmin();>GRABAR</button>"
            let nuevoHTML = "<ul class='navbar-nav ml-auto'>" +
                "<li class='nav-item'>" +
                "<h4>" + usuario.NombreUsuario + "</h4>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<a href='/admin/variables'>Variables</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<a href='/admin/usuarios'>Usuarios</a>" +
                "</li>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<a href='/admin/serviciosAdmin/serviciosAdmin.html'>Servicios</a>" +
                "</li>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<a href='/admin/citasAdmin/index.html'>Citas</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<button class='btn btn-danger' onclick='EliminarToken();'>Cerrar sesión</button>" +
                "</li>" +
                "</ul>";
            if (elementoHTML) {
                elementoHTML.innerHTML = nuevoHTML;
            }
            if (elementoHTML2) {
                elementoHTML2.innerHTML = nuevoHTML2;
            }
        } else if (usuario.CodigoTipoPerfil == 2) {
            let nuevoHTML2 = "<button class='btn btn-success' type=button onclick=GuardarCitaUsuario();>GRABAR</button>"
            let nuevoHTML = "<ul class='navbar-nav ml-auto'>" +
                "<li class='nav-item'>" +
                "<h4>" + usuario.NombreUsuario + "</h4>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<a href='../../admin/clientes/index.html'>Servicios</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<a href='../../admin/clientes/agendarCitas.html'>Generar Cita</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<a href='../../admin/clientes/verCitas.html'>Ver mis Citas</a>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<button class='btn btn-danger' onclick='EliminarToken();'>Cerrar sesión</button>" +
                "</li>" +
                "</ul>";
            if (elementoHTML) {
                elementoHTML.innerHTML = nuevoHTML;
            }
            if (elementoHTML2) {
                elementoHTML2.innerHTML = nuevoHTML2;
            }
        } else if (usuario.CodigoTipoPerfil == 3) {
            let elementoHTML = document.getElementById("navOpciones");
            let nuevoHTML = "<ul class='navbar-nav ml-auto'>" +
                "<li class='nav-item'>" +
                "<h4>" + usuario.NombreUsuario + "</h4>" +
                "</li>" +
                "<li class='nav-item'>" +
                "<a href='/admin/valida/valida.html'>VALIDA TU CUENTA</a>" +
                "</li>" +
                "<button class='btn btn-danger' onclick='EliminarToken();'>Cerrar sesión</button>" +
                "</li>" +
                "</ul>";
            elementoHTML.innerHTML = nuevoHTML;
        }
        // se le agregó un else if por si se necesita agregar otro tipo de usuario aparte de admin y cliente
    }
}
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// V    V   AAA   RRRRR   III  AAA   BBBB   L     EEEE   SSS
//  V  V   A   A  R    R   I  A   A  B   B  L     E     S
//  V  V   AAAAA  RRRRR    I  AAAAA  BBBB   L     EEEE   SSS
//  V  V   A   A  R   R    I  A   A  B   B  L     E         S
//   VV    A   A  R    R  III  A   A  BBBB   LLLL  EEEE  SSS
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------



// -------------------------------
// -------------------------------
// -------------------------------
// TTTTT  OOO  K  K  EEEE  N   N
//   T   O   O K K   E     NN  N
//   T   O   O KK    EEE   N N N
//   T   O   O K K   E     N  NN
//   T    OOO  K  K  EEEE  N   N
// -------------------------------
// -------------------------------
// -------------------------------

function EliminarToken() {
    localStorage.removeItem("usuario");
    window.location.href = "http://localhost/";
}

function ValidarToken() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let validado = false;
    if (usuario == null) {
        window.location.href = "/";
    }
    if (usuario != null) {
        var data = new FormData();
        data.append("token", usuario.token);
        data.append("nombreUsuario", usuario.NombreUsuario);
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                validado = this.responseText == "1";
                if (!validado) {
                    window.location.href = "/";
                }
            }
        });
        xhr.open("POST", URI_Login_Verificar_Usuario);
        xhr.send(data);
    }
}
function VerificandoTokenDB() {
    var frm = document.getElementById("frmVerificarse");
    let usuario = document.getElementById("usuario");
    let token = document.getElementById("token");
    if (usuario.value == "" || usuario.value == null) {
        alert("Rellene correctamente su código");
        return;
    } else if (usuario.value == " ") {
        alert("No se admite espacios en blanco");
        return;
    }
    if (token.value == "" || token.value == null) {
        alert("Rellene correctamente su token");
        return;
    } else if (token.value == " ") {
        alert("No se admite espacios en blanco");
        return;
    }
    var formData = new FormData(frm);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            if (this.response == 'true') {
                Swal.fire({
                    icon: "info",
                    title: "Cuenta verificada",
                    text: "INICIA SESIÓN",
                    footer: '<p>Usuarios del sistema</p>'
                });

                setTimeout(function () {
                    EliminarToken();
                    window.location.href = "http://localhost/index.html";
                }, 2000);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Error de contenido...",
                    text: "Ocurrio un error durante el proceso de guardado",
                    footer: '<p>Volver a intentar</p>'
                });
            }
        }
    });
    xhr.open("POST", URI_Usuario_VerificarTok, true);
    xhr.send(formData);
}

function generarKey() {
    let verificador = parseInt(Math.random() * 100) + 10;
    console.log(verificador);
}

function ValidarLogin() {
    var usuario = document.getElementById("UsuarioLog").value;
    var contraseña = document.getElementById("ContraLog").value;

    if (contraseña.includes(" ")) {
        alert("La contraseña no puede contener espacios en blanco.");
        return;
    }

    if (usuario === "" || contraseña === "") {
        alert("Complete todos los campos.");
        return;
    }

    var frm = document.getElementById("frmLogin");
    var formData = new FormData(frm);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let jsonResponse = JSON.parse(this.response);
            if (jsonResponse.CodigoUsuario == 0) {
                Swal.fire({
                    icon: "error",
                    title: "Error de contenido...",
                    text: "Las credenciales ingresadas son incorrectas",
                    footer: '<p>Volver a intentar</p>'
                });
            }
            else {
                localStorage.setItem("usuario", JSON.stringify(jsonResponse));
                window.location.href = "http://localhost/";
            }
        }
    });
    xhr.open("POST", URI_Login_Validar_Usuario, true);
    xhr.send(formData);
}
// -------------------------------
// -------------------------------
// -------------------------------
// TTTTT  OOO  K  K  EEEE  N   N
//   T   O   O K K   E     NN  N
//   T   O   O KK    EEE   N N N
//   T   O   O K K   E     N  NN
//   T    OOO  K  K  EEEE  N   N
// -------------------------------
// -------------------------------
// -------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// U   U  SSS   U   U   AAA   RRRR   III  OOO  SSS
// U   U  S     U   U  A   A  R   R   I  O   O S
// U   U   SS   U   U  AAAAA  RRRR    I  O   O  SS
// U   U     S  U   U  A   A  R  R    I  O   O    S
//  UUU   SSS    UUU   A   A  R   R  III  OOO  SSS
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
function ListarUsuarios() {
    let htmlResultado = "";
    /*let usuario = JSON.parse(localStorage.getItem("usuario"));*/
    /*if(usuario != null){*/
    /*var data = new FormData();
    data.append("token", usuario.token);
    data.append("nombreUsuario", usuario.NombreUsuario);*/
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            responseJson = JSON.parse(this.response);
            for (let index = 0; index < responseJson.length; index++) {
                const element = responseJson[index];
                let html = "<tr><td>" + element.CodigoUsuario + "</td>" +
                    "<td id='NombreUsuario" + element.CodigoUsuario + "'>" + element.NombreUsuario + "</td>" +
                    "<td id='Clave" + element.CodigoUsuario + "'>" + element.Clave + "</td>" +
                    "<td id='DescripcionUsuario" + element.CodigoUsuario + "'>" + element.DescripcionTipoPerfil + "</td>" +
                    "<td>" +
                    "<button id='btnEditar" + element.CodigoUsuario + "' class='btn btn-primary' onclick='ActualizarUsuario(" + element.CodigoUsuario + "); editarDatos(" + element.CodigoUsuario + ");' >Editar</button>" +
                    "<button class='btn btn-danger' onclick='EliminarUsuario(" + element.CodigoUsuario + ")' >Eliminar</button>" +
                    "</td></tr>";
                htmlResultado = htmlResultado + html;
            };
            document.getElementById("tblUsuarios").innerHTML = htmlResultado;
        }
    });
    xhr.open("GET", URI_Usuarios_Listar, true);
    xhr.send(/*data*/);
    /*}*/
    xhr.onerror = function () {
        console.error('Error de red al intentar enviar la solicitud');
    };
}
function editarDatos(CodigoUsuario) {
    var nombre = document.getElementById("NombreUsuario" + CodigoUsuario).textContent;
    var contra = document.getElementById("Clave" + CodigoUsuario).textContent;
    var Descripcion = document.getElementById("DescripcionUsuario" + CodigoUsuario).textContent;
    if (Descripcion == "Administrador") {
        Descripcion = "1";
    } else if (Descripcion == "Usuario") {
        Descripcion = "2";
    } else if (Descripcion == "No-cliente") {
        Descripcion = "3";
    }
    document.getElementById("swal-input1").value = nombre;
    document.getElementById("swal-input2").value = contra;
    document.getElementById("swal-input3").value = Descripcion;
}

async function ActualizarUsuario(CodigoUsuario) {
    const { value: formValues } = await Swal.fire({
        title: "Ingresa tu usuario a actualizar:",
        html: `
          <h4>Nombre del usuario</h4>
          <input id="swal-input1" class="swal2-input">
          <h4>Contraseña del usuario</h4>
          <input id="swal-input2" class="swal2-input">
          <h4>Perfíl del usuario</h4>
          <input id="swal-input3" class="swal2-input">
          <ul>
          <h5>En perfíl del usuario digitar 1, 2 o 3</h5>
          <li>1 para Administrador</li>
          <li>2 para Cliente</li>
          <li>3 para No-Cliente</li>
          </ul>
        `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value
            ];
        }
    });
    if (formValues) {
        const usuario = formValues[0];
        const contra = formValues[1];
        const perfil = parseInt(formValues[2]);
        if (usuario == null || usuario == "") {
            Swal.fire("Rellena el usuario solicitado.");
            return;
        } else if (usuario.startsWith(' ') && usuario.endsWith(' ')) {
            Swal.fire('El usuario no debe comenzar ni terminar con espacios.');
            return;
        }
        if (contra == null || contra == "") {
            Swal.fire("Rellena el campo solicitado.");
            return;
        } else if (contra.startsWith(' ') && contra.endsWith(' ')) {
            Swal.fire('El campo no debe comenzar ni terminar con espacios.');
            return;
        }
        if (perfil < 1 || perfil > 3 || isNaN(perfil)) {
            Swal.fire("Por favor, ingresa un perfil válido (1, 2 o 3).");
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var response = JSON.parse(this.responseText);
                if (response == true) {
                    Swal.fire("Usuario " + CodigoUsuario + " Actualizado!", "", "success");
                    // ListarUsuarios();
                }
            }
        });
        xhr.open("POST", URI_Usuarios_Actualizar);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // el encodeURIComponent se pone para que reemplace caracteres con significados en URL como : o /; forma segura de mandar datos mediante POST.
        xhr.send("CodigoUsuario=" + CodigoUsuario + "&NombreUsuario=" + encodeURIComponent(formValues[0]) + "&Clave=" + encodeURIComponent(formValues[1]) + "&CodigoTipoPerfil=" + encodeURIComponent(formValues[2]));
        Swal.fire("Usuario actualizado: " + formValues[0]);
    }
}
function AbrirModal() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState = XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (this.readyState === 4) {
                    var formModal = document.getElementById("modalFormGuardar");
                    formModal.innerHTML = xhr.responseText;
                }
            }
        }
    }
    xhr.open('GET', 'http://localhost/admin/usuarios/guardar.html');
    xhr.send();
    var modal = new bootstrap.Modal(document.getElementById("modalGuardar"));
    modal.show();
}

function GuardarUsuario() {
    var frm = document.getElementById("frmGuardarUsuario");
    var inputs = frm.getElementsByTagName('input');
    var codigoUsuarioInput = inputs[0];
    var nombreUsuarioInput = inputs[1];
    var claveInput = inputs[2];
    if (nombreUsuarioInput.value.includes(' ')) {
        alert('El usuario no debe contener espacios.');
        return;
    } else if (nombreUsuarioInput.value.includes(null) || nombreUsuarioInput.value == "") {
        alert('Rellene el campo.');
        return;
    }
    if (claveInput.value.includes(' ')) {
        alert('La contraseña no debe contener espacios.');
        return;
    } else if (claveInput.value.includes(null) || claveInput.value == "") {
        alert('Rellene el campo.');
        return;
    }
    var formData = new FormData(frm);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.response == "true") {
                Swal.fire({
                    icon: "info",
                    title: "Mantenimiento de usuarios",
                    text: "Proceso desarrollado correctamente",
                    footer: '<p>Usuarios del sistema</p>'
                });

                // setTimeout(function () {
                //     window.location.href = "http://localhost/admin/usuarios/index.html";
                // }, 3000);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Error de contenido...",
                    text: "Ocurrio un error durante el proceso de guardado",
                    footer: '<p>Volver a intentar</p>'
                });
            }
        }
    });
    xhr.open("POST", URI_Usuarios_Guardar, true);
    xhr.send(formData);
}
function GuardarUsuarioReg() {
    document.getElementById("btnResitrandose").disabled = true;
    var frm = document.getElementById("frmGuardarUsuario");
    var nombreUsuario = frm.elements["NombreUsuario"].value;
    var correo = frm.elements["Correo"].value;
    var clave = frm.elements["Clave"].value;

    // Validar que los campos no estén vacíos
    if (nombreUsuario.trim() === "" || correo.trim() === "" || clave.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Error de contenido...",
            text: "Por favor, complete todos los campos",
            footer: '<p>Volver a intentar</p>'
        });
        document.getElementById("btnResitrandose").disabled = false;
        return;
    }

    // Validar que no haya espacios en blanco en el nombre de usuario
    if (nombreUsuario.includes(" ")) {
        Swal.fire({
            icon: "error",
            title: "Error de contenido...",
            text: "El nombre de usuario no puede contener espacios en blanco",
            footer: '<p>Volver a intentar</p>'
        });
        document.getElementById("btnResitrandose").disabled = false;
        return;
    }

    // Validar que no haya espacios en blanco en el correo electrónico
    if (correo.includes(" ")) {
        Swal.fire({
            icon: "error",
            title: "Error de contenido...",
            text: "El correo electrónico no puede contener espacios en blanco",
            footer: '<p>Volver a intentar</p>'
        });
        document.getElementById("btnResitrandose").disabled = false;
        return;
    }
    if (!correo.includes("@gmail.com")) {
        Swal.fire({
            icon: "error",
            title: "Error de contenido...",
            text: "El correo electrónico debe tener la terminación '@gmail.com'",
            footer: '<p>Volver a intentar</p>'
        });
        document.getElementById("btnResitrandose").disabled = false;
        return;
    }
    // Validar que no haya espacios en blanco en la contraseña
    if (clave.includes(" ")) {
        Swal.fire({
            icon: "error",
            title: "Error de contenido...",
            text: "La contraseña no puede contener espacios en blanco",
            footer: '<p>Volver a intentar</p>'
        });
        document.getElementById("btnResitrandose").disabled = false;
        return;
    }

    // Validar formato de correo electrónico
    var correoRegex = /\S+@\S+\.\S+/;
    if (!correoRegex.test(correo)) {
        Swal.fire({
            icon: "error",
            title: "Error de contenido...",
            text: "Por favor, ingrese un correo electrónico válido",
            footer: '<p>Volver a intentar</p>'
        });
        document.getElementById("btnResitrandose").disabled = false;
        return;
    }

    // Validar si la contraseña contiene al menos un símbolo
    var simboloRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!simboloRegex.test(clave)) {
        Swal.fire({
            icon: "error",
            title: "Error de contenido...",
            text: "La contraseña debe contener al menos un símbolo",
            footer: '<p>Volver a intentar</p>'
        });
        document.getElementById("btnResitrandose").disabled = false;
        return;
    }

    // Validar longitud de la contraseña
    if (clave.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Error de contenido...",
            text: "La contraseña debe tener al menos 6 caracteres",
            footer: '<p>Volver a intentar</p>'
        });
        document.getElementById("btnResitrandose").disabled = false;
        return;
    }

    var frm = document.getElementById("frmGuardarUsuario");
    var formData = new FormData(frm);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.response == 'true') {
                document.getElementById("btnResitrandose").disabled = true;
                Swal.fire({
                    icon: "info",
                    title: "TOKEN ENVIADO",
                    text: "INICIA SESIÓN Y VUELVETE MIEMBRO",
                    footer: '<p>Usuarios del sistema</p>'
                });
                setTimeout(function () {
                    window.location.href = "http://localhost/index.html";
                }, 2000);
            } else if (this.response == 1) {
                Swal.fire({
                    icon: "error",
                    title: "Usuario Existente...",
                    text: "Ocurrio un error durante el proceso de guardado",
                    footer: '<p>Volver a intentar</p>'
                });
                document.getElementById("btnResitrandose").disabled = false;
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Error de contenido...",
                    text: "Ocurrio un error durante el proceso de guardado",
                    footer: '<p>Volver a intentar</p>'
                });
                document.getElementById("btnResitrandose").disabled = false;
            }
        }
    });
    xhr.open("POST", URI_Local_Guardar, true);
    xhr.send(formData);
}

function EliminarUsuario(CodigoUsuario) {
    Swal.fire({
        title: "Desea eliminar el usuario?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `cancelar`
    }).then((result) => {
        if (result.isConfirmed) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var response = JSON.parse(this.responseText);
                    console.log(response);
                    if (response == true) {
                        Swal.fire("Usuario " + CodigoUsuario + " Eliminado!", "", "success");
                        ListarUsuarios();
                    }
                }
            });
            xhr.open("POST", URI_Usuarios_Eliminar);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("CodigoUsuario=" + CodigoUsuario);
        }
    });
}
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// U   U  SSS  U   U    AAA   RRRR   III  OOO  SSS
// U   U  S    U   U   A   A  R   R   I  O   O S
// U   U   SS   U   U  AAAAA  RRRR    I  O   O  SS
// U   U     S  U   U  A   A  R  R    I  O   O    S
//  UUU   SSS    UUU   A   A  R   R  III  OOO  SSS
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// SSS  EEEEE  RRRR   V     V  III  CCCC  III  OOO  SSS
// S     E      R   R   V   V    I  C       I  O   O S
//  SS   EEEE   RRRR     V V     I  C       I  O   O  SS
//    S  E      R  R      V      I  C       I  O   O    S
// SSS   EEEEE  R   R     V     III  CCCC  III  OOO  SSS
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
function CargarServicios() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            responseJson = JSON.parse(this.response)
            for (let index = 0; index < responseJson.length; index++) {
                const element = responseJson[index];
                // console.log(element);
                CambiarContenidoServicios(element.tipoServicio, element.codigo, element.nombre, element.precio, element.descripcion, element.imagenes);
            };
        }
    });
    xhr.open("GET", URI_Servicios_Listar);
    xhr.send();
}
function CambiarContenidoServicios(tipoServicio, idElemento, nombre, precio, descripcion, imagenes) {
    if (tipoServicio == 1) {
        var elementoHTML = document.getElementById(tipoServicio);
        if (elementoHTML != null) {
            elementoHTML.innerHTML += `
            <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="${imagenes}" class="card-img-top" alt="Corte Varón">
                            <h5 class="card-title text-center">${nombre}</h5>
                            <p class="card-text text-center">${descripcion}</p>
                            <p class="card-text text-center">Precio: ${precio}</p>
                            <a href="#" class="btn btn-primary text-center">Lo quiero</a>
                        </div>
                    </div>
                </div>
            `;
        }
    } else {
        var elementoHTML = document.getElementById(tipoServicio);
        if (elementoHTML != null) {
            elementoHTML.innerHTML += `
        <div class="col-md-3">
                <div class="card">
                    <div class="card-body">
                        <img src="../../img/cortehombre1.jpeg" class="card-img-top" alt="Corte Varón">
                        <h5 class="card-title text-center">${nombre}</h5>
                        <p class="card-text text-center">${descripcion}</p>
                        <p class="card-text text-center">Precio: ${precio}</p>
                        <a href="#" class="btn btn-primary text-center">Lo quiero</a>
                    </div>
                </div>
            </div>
        `;
        }
    }
}
function ListarServicios() {
    let htmlResultado = "";

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario != null) {
        var data = new FormData();
        data.append("token", usuario.token);
        data.append("nombreUsuario", usuario.NombreUsuario);

        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                responseJson = JSON.parse(this.response)
                for (let index = 0; index < responseJson.length; index++) {
                    const element = responseJson[index];
                    let html = "<tr><td>" + element.codigo + "</td>" +
                        "<td id='nombreServicio" + element.codigo + "'>" + element.nombre + "</td>" +
                        "<td id='precioServicio" + element.codigo + "'>" + element.precio + "</td>" +
                        "<td id='descripcionServicio" + element.codigo + "'>" + element.descripcion + "</td>" +
                        "<td id='imagenServicio" + element.codigo + "'>" + element.imagenes + "</td>" +
                        "<td id='tipoServicio" + element.codigo + "'>" + element.tipoServicio + "</td>" +
                        "<td>" +
                        "<button class='btn btn-primary' onclick='ActualizarServicio(" + element.codigo + "); MostrarEditarDatosServicios(" + element.codigo + ");' >Editar</button>" +
                        "<button class='btn btn-danger' onclick='EliminarServicio(" + element.codigo + ")' >Eliminar</button>" +
                        "</td></tr>";
                    htmlResultado = htmlResultado + html;
                };
                document.getElementById("tblServicios").innerHTML = htmlResultado;
            }
        });
        xhr.open("POST", URI_Servicios_Listar, true);
        xhr.send(data);
    }
}

function MostrarEditarDatosServicios(CodigoServicio) {
    var nombre = document.getElementById("nombreServicio" + CodigoServicio).textContent;
    var precio = document.getElementById("precioServicio" + CodigoServicio).textContent;
    var descripcion = document.getElementById("descripcionServicio" + CodigoServicio).textContent;
    var imagenes = document.getElementById("imagenServicio" + CodigoServicio).textContent;
    var tipoServicio = document.getElementById("tipoServicio" + CodigoServicio).textContent;
    document.getElementById("swal-input1").value = nombre;
    document.getElementById("swal-input2").value = precio;
    document.getElementById("swal-input3").value = descripcion;
    document.getElementById("swal-input4").value = imagenes;
    document.getElementById("swal-input5").value = tipoServicio;
}


async function ActualizarServicio(CodigoServicio) {

    const { value: formValues } = await Swal.fire({
        title: "Ingresa tu Servicio a actualizar:",
        html: `
          <h4>Nombre del Servicio</h4>
          <input id="swal-input1" class="swal2-input">
          <h4>Precio del Servicio</h4>
          <input id="swal-input2" class="swal2-input">
          <h4>Descripcion del Servicio</h4>
          <input id="swal-input3" class="swal2-input">
          <h4>Imagen del Servicio</h4>
          <input id="swal-input4" class="swal2-input">
          <h4>Tipo del Servicio</h4>
          <input id="swal-input5" class="swal2-input">
          <ul>
          <h5>En Tipo del Servicio, digitar 1, 2 o 3</h5>
          <li>1 para Corte cabello</li>
          <li>2 para SPA</li>
          <li>3 para Servicios Extras</li>
          </ul>
        `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value,
                document.getElementById("swal-input4").value,
                document.getElementById("swal-input5").value
            ];
        }
    });
    if (formValues) {
        const nombre = formValues[0];
        const precio = parseInt(formValues[1]);
        const descripcion = formValues[2];
        const imagenes = formValues[3];
        const perfil = parseInt(formValues[4]);
        if (perfil < 1 || perfil > 3 || isNaN(perfil)) {
            Swal.fire("Por favor, ingresa un perfil válido (1, 2 o 3).");
            return;
        } else if (formValues[4].startsWith(' ') && formValues[4].endsWith(' ')) {
            Swal.fire('No debe contener espacios');
            return;
        }
        // --
        if (precio < 0 || isNaN(precio)) {
            Swal.fire("Ingrese un dato válido");
            return;
        } else if (formValues[1].startsWith(' ') && formValues[1].endsWith(' ')) {
            Swal.fire('No debe contener espacios');
            return;
        }
        // --
        if (nombre == "" || nombre == null) {
            Swal.fire("Ingrese un dato válido para el nombre");
            return;
        } else if (nombre.startsWith(' ') && nombre.endsWith(' ')) {
            Swal.fire('El nombre no debe comenzar ni terminar con espacios.');
            return;
        }
        // --
        if (descripcion == "" || descripcion == null) {
            Swal.fire("Ingrese un dato válido");
            return;
        } else if (descripcion.startsWith(' ') && descripcion.endsWith(' ')) {
            Swal.fire('La descripcion no debe comenzar ni terminar con espacios.');
            return;
        }
        // --
        if (imagenes == "" || imagenes == null) {
            Swal.fire("Ingrese un dato válido");
            return;
        } else if (imagenes.startsWith(' ') && imagenes.endsWith(' ')) {
            Swal.fire('Las imagenes no debe comenzar ni terminar con espacios.');
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var response = JSON.parse(this.responseText);
                if (response == true) {
                    Swal.fire("Servicio " + CodigoServicio + " Actualizado!", "", "success");
                    ListarServicios();
                }
            }
        });
        xhr.open("POST", URI_Servicios_Actualizar);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // el encodeURIComponent se pone para que reemplace caracteres con significados en URL como : o /; forma segura de mandar datos mediante POST.
        xhr.send("codigo=" + CodigoServicio + "&nombre=" + encodeURIComponent(formValues[0]) + "&precio=" + encodeURIComponent(formValues[1]) + "&descripcion=" + encodeURIComponent(formValues[2]) + "&imagenes=" + encodeURIComponent(formValues[3]) + "&tipoServicio=" + encodeURIComponent(formValues[4]));

        Swal.fire("Servicio actualizado: " + formValues[0]);
    }
}
function EliminarServicio(CodigoServicio) {
    Swal.fire({
        title: "Desea eliminar el servicio?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `cancelar`
    }).then((result) => {
        if (result.isConfirmed) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var response = JSON.parse(this.responseText);
                    console.log(response);
                    if (response == true) {
                        Swal.fire("Servicio " + CodigoServicio + " Eliminado!", "", "success");
                        ListarServicios();
                    }
                }
            });
            xhr.open("POST", URI_Servicios_Eliminar);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("codigo=" + CodigoServicio);
        }
    });
}
function GuardarServicio() {
    var frm = document.getElementById("frmGuardarServicio");
    var formData = new FormData(frm);
    var xhr = new XMLHttpRequest();
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagenes = document.getElementById("imagenes").value;
    let perfil = document.getElementById("tipoServicio").value;
    if (perfil < 1 || perfil > 3 || isNaN(perfil)) {
        Swal.fire("Por favor, ingresa un perfil válido (1, 2 o 3).");
        return;
    }
    // --
    if (precio < 0 || isNaN(precio)) {
        Swal.fire("Ingrese un dato válido");
        return;
    }
    // --
    if (nombre == "" || nombre == null) {
        Swal.fire("Ingrese un dato válido para el nombre");
        return;
    } else if (nombre.startsWith(' ') && nombre.endsWith(' ')) {
        Swal.fire('El nombre no debe comenzar ni terminar con espacios.');
        return;
    }
    // --
    if (descripcion == "" || descripcion == null) {
        Swal.fire("Ingrese un dato válido para la descripción");
        return;
    } else if (descripcion.startsWith(' ') && descripcion.endsWith(' ')) {
        Swal.fire('La descripcion no debe comenzar ni terminar con espacios.');
        return;
    }
    // --
    if (imagenes == "" || imagenes == null) {
        Swal.fire("Ingrese un dato válido para las imágenes");
        return;
    } else if (imagenes.startsWith(' ') && imagenes.endsWith(' ')) {
        Swal.fire('Las imagenes no debe comenzar ni terminar con espacios.');
        return;
    }
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.response == "true") {
                Swal.fire({
                    icon: "info",
                    title: "Mantenimiento de servicio",
                    text: "Proceso desarrollado correctamente",
                    footer: '<p>Servicio del sistema</p>'
                });

                setTimeout(function () {
                    window.location.href = "http://localhost/admin/serviciosAdmin/serviciosAdmin.html";
                }, 3000);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Error de contenido...",
                    text: "Ocurrio un error durante el proceso de guardado",
                    footer: '<p>Volver a intentar</p>'
                });
            }
        }
    });
    xhr.open("POST", URI_Servicios_Guardar, true);
    xhr.send(formData);
}

function AbrirModalServicio() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState = XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (this.readyState === 4) {
                    var formModal = document.getElementById("modalFormServicio");
                    formModal.innerHTML = xhr.responseText;
                }
            }
        }
    }
    xhr.open('GET', 'http://localhost/admin/serviciosAdmin/guardar.html');
    xhr.send();
    var modal = new bootstrap.Modal(document.getElementById("modalServicio"));
    modal.show();
}
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// SSS  EEEEE  RRRR   V     V  III  CCCC  III  OOO  SSS
// S     E      R   R   V   V    I  C       I  O   O S
//  SS   EEEE   RRRR     V V     I  C       I  O   O  SS
//    S  E      R  R      V      I  C       I  O   O    S
// SSS   EEEEE  R   R     V     III  CCCC  III  OOO  SSS
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// CCCC  IIIIII  TTTTT  AAA   SSSS
// C       I       T   A   A  S
// C       I       T   AAAAA   SS
// C       I       T   A   A     S
// CCCC  IIIIII    T   A   A  SSSS
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
function ListarCitas() {
    let htmlResultado = "";
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            responseJson = JSON.parse(this.response);
            for (let index = 0; index < responseJson.length; index++) {
                const element = responseJson[index];
                let html = "<tr><td>" + element.Codigo + "</td>" +
                    "<td id='NombreUsuario" + element.Codigo + "'>" + element.NombreUsuario + "</td>" +
                    "<td id='NombreServicio" + element.Codigo + "'>" + element.NombreServicio + "</td>" +
                    "<td id='PrecioServicio" + element.Codigo + "'>" + element.PrecioServicio + "</td>" +
                    "<td id='CodigoDescuento" + element.Codigo + "'>" + element.CodigoDescuento + "</td>" +
                    "<td id='Descuento" + element.Codigo + "'>" + element.Descuento + "</td>" +
                    "<td id='Descripcion" + element.Codigo + "'>" + element.Descripcion + "</td>" +
                    "<td id='Fecha" + element.Codigo + "'>" + element.Fecha + "</td>" +
                    "<td id='Estado" + element.Codigo + "'>" + element.Estado + "</td>" +
                    "<td>" +
                    "<button id='btnEditar" + element.Codigo + "' class='btn btn-primary' onclick='ActualizarCita(" + element.Codigo + "); MostrarGuardarCitas(); hoy();' >Editar</button>" +
                    "<button class='btn btn-danger' onclick='EliminarCita(" + element.Codigo + ")' >Eliminar</button>" +
                    "</td></tr>";
                htmlResultado = htmlResultado + html;
            };
            document.getElementById("tblCitas").innerHTML = htmlResultado;
        }
    });
    xhr.open("GET", URI_Citas_Listar, true);
    xhr.send(/*data*/);
    /*}*/
    xhr.onerror = function () {
        console.error('Error de red al intentar enviar la solicitud');
    };
}
function EliminarCita(CodigoCita) {
    Swal.fire({
        title: "Desea eliminar la cita?",
        showDenyButton: true,
        confirmButtonText: "Eliminar",
        denyButtonText: `Cancelar`
    }).then((result) => {
        if (result.isConfirmed) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    var response = JSON.parse(this.responseText);
                    console.log(response);
                    if (response == true) {
                        Swal.fire("Cita " + CodigoCita + " Eliminado!", "", "success");
                    }
                }
            });
            xhr.open("POST", URI_Citas_Eliminar);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("Codigo=" + CodigoCita);
        }
    });
}
function MostrarGuardarCitas() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            responseJson = JSON.parse(this.response);
            let html = "";
            for (let index = 0; index < responseJson.length; index++) {
                const element = responseJson[index];
                html += "<option value='" + element.CodigoUsuario + "'>" + element.NombreUsuario + "</option>";
            }
            document.getElementById("CodigoUsuario").innerHTML = html;
        }
    });
    xhr.open("GET", URI_Usuarios_Listar, true);
    xhr.send(/*data*/);
    /*}*/
    xhr.onerror = function () {
        console.error('Error de red al intentar enviar la solicitud');
    };
    var xhr2 = new XMLHttpRequest();
    xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            responseJson = JSON.parse(this.response);
            let html = "";
            for (let index = 0; index < responseJson.length; index++) {
                const element = responseJson[index];
                html += "<option value='" + element.codigo + "'>" + element.nombre + "</option>";
            }
            document.getElementById("CodigoServicio").innerHTML = html;
        }
    });
    xhr2.open("GET", URI_Servicios_Listar, true);
    xhr2.send(/*data*/);
    /*}*/
    xhr2.onerror = function () {
        console.error('Error de red al intentar enviar la solicitud');
    };
}
function GuardarCitaAdmin() {
    var frm = document.getElementById("frmGuardarCita");
    var vacio = document.getElementById("Fecha").value;
    var vacio2 = document.getElementById("CodigoDescuento").value;
    if (vacio.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Seleccione una fecha y hora para la cita.",
            text: "Por favor, complete todos los campos",
            footer: '<p>Volver a intentar</p>'
        });
        return;
    }
    if (vacio2.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Si no tiene un descuento, digite cero(0).",
            text: "Por favor, complete todos los campos",
            footer: '<p>Volver a intentar</p>'
        });
        return;
    }
    var formData = new FormData(frm);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            if (this.response == "true") {
                Swal.fire({
                    icon: "info",
                    title: "Generar una Cita",
                    text: "Proceso desarrollado correctamente",
                    footer: '<p>Usuarios del sistema</p>'
                });
                setTimeout(function () {
                    window.location.href = "http://localhost/admin/citasAdmin/index.html";
                }, 1750);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "El código de descuento no es válido",
                    text: "Verifique su código",
                    footer: '<p>Volver a intentar</p>'
                });
                // console.log(this.response);
            }
        }
    });
    xhr.open("POST", URI_Citas_GuardarCitasAdmin, true);
    xhr.send(formData);
}
function GuardarCitaUsuario() {
    var frm = document.getElementById("frmGuardarCitaUsuario");
    var vacio = document.getElementById("Fecha").value;
    var vacio2 = document.getElementById("CodigoDescuento").value;

    if (vacio.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Seleccione una fecha y hora para la cita.",
            text: "Por favor, complete todos los campos",
            footer: '<p>Volver a intentar</p>'
        });
        return;
    }
    if (vacio2.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Si no tiene un descuento, digite cero(0).",
            text: "Por favor, complete todos los campos",
            footer: '<p>Volver a intentar</p>'
        });
        return;
    }
    var formData = new FormData(frm);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            if (this.response == "true") {
                Swal.fire({
                    icon: "info",
                    title: "Generar una Cita",
                    text: "Proceso desarrollado correctamente",
                    footer: '<p>Usuarios del sistema</p>'
                });
                setTimeout(function () {
                    window.location.href = "http://localhost/";
                }, 1750);
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "El código de descuento no es válido",
                    text: "Verifique su código",
                    footer: '<p>Volver a intentar</p>'
                });
                // console.log(this.response);
            }
        }
    });
    xhr.open("POST", URI_Citas_GuardarCitaUsuario, true);
    xhr.send(formData);
}
function reconocer() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario && usuario.CodigoUsuario) {
        document.getElementById("CodigoUsuario").value = usuario.CodigoUsuario;
    } else {
        console.error("No se pudo obtener el Código de Usuario del localStorage");
        return;
    }
}
function ListarCitasPropias() {
    let htmlResultado = "";
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        console.error("Usuario no encontrado en localStorage");
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let responseJson = JSON.parse(this.response);
                // Filtrar las citas del usuario actual
                let citasUsuario = responseJson.filter(element => element.CodigoUsuario == usuario.CodigoUsuario);
                if (citasUsuario.length === 0) {
                    htmlResultado = "<tr><td colspan='7'>No hay citas disponibles</td></tr>";
                } else {
                    for (let index = 0; index < citasUsuario.length; index++) {
                        const element = citasUsuario[index];
                        let html = "<tr>" +
                            "<td id='NombreServicio" + element.Codigo + "'>" + element.NombreServicio + "</td>" +
                            "<td id='PrecioServicio" + element.Codigo + "'>" + element.PrecioServicio + "</td>" +
                            "<td id='CodigoDescuento" + element.Codigo + "'>" + element.CodigoDescuento + "</td>" +
                            "<td id='Descuento" + element.Codigo + "'>" + element.Descuento + "</td>" +
                            "<td id='Descripcion" + element.Codigo + "'>" + element.Descripcion + "</td>" +
                            "<td id='Fecha" + element.Codigo + "'>" + element.Fecha + "</td>" +
                            "<td id='Estado" + element.Codigo + "'>" + element.Estado + "</td>" +
                            "</tr>";
                        htmlResultado += html;
                    }
                }

                document.getElementById("tblCitasUsuario").innerHTML = htmlResultado;
            } else {
                console.error('Error en la respuesta del servidor:', this.status, this.statusText);
            }
        }
    });

    xhr.open("GET", URI_Citas_ListarCitaUsuario, true);
    xhr.send();

    xhr.onerror = function () {
        console.error('Error de red al intentar enviar la solicitud');
    };
}
function hoy() {
    var auto = document.getElementById("Fecha");
    var now = new Date();

    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);

    var currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    // Calculate the date two months from now
    var futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 2);

    var futureYear = futureDate.getFullYear();
    var futureMonth = ('0' + (futureDate.getMonth() + 1)).slice(-2);
    var futureDay = ('0' + futureDate.getDate()).slice(-2);
    var futureHours = ('0' + futureDate.getHours()).slice(-2);
    var futureMinutes = ('0' + futureDate.getMinutes()).slice(-2);

    var maxDateTime = `${futureYear}-${futureMonth}-${futureDay}T${futureHours}:${futureMinutes}`;

    auto.setAttribute("min", currentDateTime);
    auto.setAttribute("max", maxDateTime);
    auto.value = currentDateTime;
}

async function ActualizarCita(CodigoCita) {

    const { value: formValues } = await Swal.fire({
        title: "Ingresa tu Servicio a actualizar:",
        html: `
          <h4>Nombre del Usuario</h4>
          <select aria-label=Default select example class=form-select name='CodigoUsuario'id='CodigoUsuario'></select>
          <h4>Nombre del Servicio</h4>
          <select aria-label=Default select example class=form-select name='CodigoServicio' id='CodigoServicio'></select>
          <h4>Código de Descuento</h4>
          <input value="0" id="CodigoDescuento" name="CodigoDescuento" type="number" class="form-control">
          <h4>Fecha de la Cita</h4>
          <input id="Fecha" name="Fecha" type="datetime-local" class="form-control">
          <h4>Estado de la Cita</h4>
          <input id="Estado" name="Estado" type="number" class="form-control">
          <ul>
          <h5>Estado de la Cita a digitar (0 o 1)</h5>
          <li>0 para "Cita Pendiente"</li>
          <li>1 para "Cita Finalizada"</li>
          </ul>
        `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("CodigoUsuario").value,
                document.getElementById("CodigoServicio").value,
                document.getElementById("CodigoDescuento").value,
                document.getElementById("Fecha").value,
                document.getElementById("Estado").value
            ];
        }
    });
    if (formValues) {
        const descuento = formValues[2];
        const fecha = formValues[3];
        const estado = formValues[4];
        if (descuento == "") {
            Swal.fire({
                icon: "error",
                title: "Si no tiene un descuento, digite cero(0).",
                text: "Por favor, complete todos los campos",
                footer: '<p>Volver a intentar</p>'
            });
            return;
        }
        if (fecha.trim() == "") {
            Swal.fire({
                icon: "error",
                title: "Seleccione una fecha y hora para la cita.",
                text: "Por favor, complete todos los campos",
                footer: '<p>Volver a intentar</p>'
            });
            return;
        }
        if (estado.trim() == "") {
            Swal.fire({
                icon: "error",
                title: "Coloque 1 si completó su cita o 0 para dejarlo pendiente.",
                text: "Por favor, complete todos los campos",
                footer: '<p>Volver a intentar</p>'
            });
            return;
        }
        if (estado < 0 || estado > 2) {
            Swal.fire("Por favor, ingresa un estado válido (0 o 1).");
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var response = JSON.parse(this.responseText);
                if (response == true) {
                    Swal.fire("Cita " + CodigoCita + " Actualizada!", "", "success");
                }
            }
        });
        xhr.open("POST", URI_Citas_Actualizar);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // el encodeURIComponent se pone para que reemplace caracteres con significados en URL como : o /; forma segura de mandar datos mediante POST.
        xhr.send("Codigo=" + CodigoCita + "&CodigoUsuario=" + encodeURIComponent(formValues[0]) + "&CodigoServicio=" + encodeURIComponent(formValues[1]) + "&CodigoDescuento=" + encodeURIComponent(formValues[2]) + "&Fecha=" + encodeURIComponent(formValues[3]) + "&Estado=" + encodeURIComponent(formValues[4]));

        Swal.fire("Cita actualizada: " + formValues[0]);
    }
}
function ReporteCita() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URI_Citas_Reporte, true);
    xhr.responseType = 'blob';  // Importante para manejar el archivo binario

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(this.response);
                a.href = url;
                a.download = "reporte_citas.csv";
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } else {
                console.error('Error al generar el reporte');
            }
        }
    });

    xhr.send();

    xhr.onerror = function () {
        console.error('Error de red al intentar enviar la solicitud');
    };
}

// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// EEEEE  x    x  TTTTT  RRRR    AAA     SSS
// E       x  x     T    R   R  A   A    S
// EEEE     x       T    RRRR   AAAAA     SS
// E       x  x     T    R  R   A   A       S
// EEEEE x     x    T    R   R  A   A    SSS
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
function verValorFecha(num) {
    var fecha = document.getElementById("fechin");
    var juntofecha = document.getElementById("Fecha");
    var btns = document.getElementById("btn" + num);
    fecha.addEventListener("change", () => {
        juntofecha.value = fecha.value + " " + btns.value;
    })
    juntofecha.value = fecha.value + " " + btns.value;
}
