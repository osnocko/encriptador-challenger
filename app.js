function encriptar(){
    let texto = document.getElementById("texto").value;
    //let titulomensaje= document.getElementById("titulo_mensaje");
    //let parrafo =document.getElementById("parrafo");
    //let muñeco = document.getElementById("imagen_texto");
    let textocifrado = texto
                        .replace(/e/gi,"enter")
                        .replace(/i/gi,"imes")
                        .replace(/a/gi,"ai")
                        .replace(/o/gi,"ober")
                        .replace(/u/gi,"ufat");
                        if(texto.length != 0){
                            //document.getElementById("texto").Value = textocifrado;
                            mostrarTextarea();
                            document.getElementById("textarea_oculto").value= textocifrado;
                            document.getElementById("parrafo").textContent=" ";
                            document.getElementById("titulo_mensaje").textContent=" ";
                            document.getElementById("imagen_texto").style.display = "none";
                           cambiarStyle();
                        }else{
                            prompt("no ah ingresado nada");
                        };
};
function desencriptar(){
    let adesifrar=document.getElementById("texto").value;
    let desifrado= adesifrar
                            .replace(/ai/gi,"a")   
                            .replace(/enter/gi,"e")
                            .replace(/imes/gi,"i")
                            .replace(/ober/gi,"o")
                            .replace(/ufat/gi,"u");
                            if(adesifrar.length !=0){
                                mostrarTextarea();
                            document.getElementById("textarea_oculto").value= desifrado;
                            document.getElementById("parrafo").textContent=" ";
                            document.getElementById("titulo_mensaje").textContent=" ";
                            document.getElementById("imagen_texto").style.display = "none";
                           cambiarStyle();
                            }else{
                                prompt("no ah ingresado nada");
                            };


}
function mostrarTextarea() {
    document.getElementById("textarea_oculto").style.display= "inline";
    document.getElementById("textarea_oculto").readonly = true;
};
function cambiarStyle(){
    let div = document.getElementById("mensaje_encriptado");
    div.classList.toggle("mensaje_encriptado_segundo");
};