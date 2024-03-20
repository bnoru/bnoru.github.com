function gerarCor() {
    var x = document.getElementById("formCPF").elements[0].value;
    var r = Number.parseInt(x.slice(0, 3)) % 255;
    var g = Number.parseInt(x.slice(3, 6)) % 255;
    var b = Number.parseInt(x.slice(6, 9)) % 255;
    if (x.length == 9) {
    document.getElementById("outputCor").style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    document.getElementById("outputCor").innerHTML = `RGB: ${r}, ${g}, ${b}<br>Hex: #${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    event.preventDefault()
    }
  }