function mostrarMotivo() {
    document.getElementById("textoMotivo").innerHTML =
     "Escolhi desenvolver este site porque muitas pessoas sonham em fazer intercâmbio, mas não sabem por onde começar. A tecnologia pode organizar informações e tornar esse processo mais acessível.";
}

function calcular() {
    let valor = document.getElementById("destino").value;
    document.getElementById("resultado").innerHTML =
    "O custo médio estimado é de R$ " + valor;
} 

