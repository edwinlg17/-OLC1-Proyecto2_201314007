np = 0;

function btnAna() {
    alert("alerta");

    $(document).ready(function () {
        alert("jQuery esta funcionando !!");
    });
}

function btnAbr() {
    var input = document.createElement('input');
    input.type = 'file';
    input.id = 'archivo';
    input.accept = '.java'; // extencion a permitir

    input.onchange = e => {

        var file = e.target.files[0];

        var reader = new FileReader();
        reader.readAsText(file);

        reader.onload = readerEvent => {
            var contenido = readerEvent.target.result;

            np++;
            crePes(file.name.replace(".java", "") + " ", contenido, np);
        }
    }

    input.click();
}

function btnGua() {
    con = document.getElementsByClassName("tab-pane active");
    ele = con[0];
    ide = ele.getAttribute('id');

    ttex = document.getElementById("t" + ide).value;
    tnom = document.getElementById("p" + ide).innerHTML;

    if (tnom.endsWith(".java")) {
        //alert("si termina");
    } else {
        tnom += ".java";
    }

    tnom = tnom.replace(" <i class=\"icon-edit\"></i>", "");

    var elem = document.getElementById('guardar');
    elem.download = tnom;
    elem.href = "data:application/octet-stream," + encodeURIComponent(ttex);
}

function btnGuaCom() {
    tnom = prompt("Nombre del archivo", "");

    if (tnom.valueOf() != "") {
        con = document.getElementsByClassName("tab-pane active");
        ele = con[0];
        ide = ele.getAttribute('id');

        ttex = document.getElementById("t" + ide).value;
        na = document.getElementById("p" + ide);
        na.innerHTML = tnom + " ";

        ni = document.createElement('i');
        ni.setAttribute("class", "icon-edit");

        na.appendChild(ni);

        if (tnom.endsWith(".java")) {
            //alert("si termina");
        } else {
            tnom += ".java";
        }

        var elem = document.getElementById('guardarComo');
        elem.download = tnom;
        elem.href = "data:application/octet-stream," + encodeURIComponent(ttex);
    }
}

function btnRepLex() {

}

function btnRepSin() {

}

function btnNuePes() {
    np++;
    crePes("nuevo " + np + " ", "", np);
}

function crePes(nom, cont, nps) {
    // titulo etiqueta
    pes = document.getElementById("pes");

    nli = document.createElement('li');
    na = document.createElement('a');
    na.setAttribute("href", "#" + nps);
    na.setAttribute("data-toggle", "tab");
    na.setAttribute("id", "p" + nps);
    na.innerHTML = nom;

    ni = document.createElement('i');
    ni.setAttribute("class", "icon-edit");

    na.appendChild(ni);
    nli.appendChild(na);
    pes.appendChild(nli);

    // contenido etiqueta 
    con = document.getElementById("con");

    ndiv = document.createElement('div');
    ndiv.setAttribute("class", "tab-pane");
    ndiv.setAttribute("id", nps);

    ntex = document.createElement('textarea');
    ntex.setAttribute("id", "t" + nps);
    ntex.setAttribute("name", "texto");
    ntex.setAttribute("rows", "10");
    ntex.setAttribute("class", "input-block-level");
    ntex.setAttribute("type", "email");
    ntex.setAttribute("wrap", "off");
    ntex.setAttribute("placeholder", "* Codigo...");
    ntex.innerHTML = cont;

    ndiv.appendChild(ntex);
    con.appendChild(ndiv);

}

