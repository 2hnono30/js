function convert() {
    let dauvao = document.getElementById('dauvao').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    let result
    if (select1 == select2) {
        result = dauvao;
    };
    if (select1 == "vietNam" && select2 == "USD") {
        result = 'result:' + dauvao / 24000;
    }
    if (select1 == "USD" && select2 == "vietNam") {
        result = 'result:' + dauvao * 24000;
    }
    document.getElementById('result').innerHTML = result;
}