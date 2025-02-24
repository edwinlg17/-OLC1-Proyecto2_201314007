np = 0;

// archivo
function btnAna1() {
    con = document.getElementsByClassName("tab-pane active");
    ele = con[0];
    ide = ele.id;
    tex = document.getElementById("t" + ide).value;

    var url = 'http://localhost:8000/api/analizar/archivo1';

    var data = ({ val: tex });

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response.var));

    // errores lexicos
    var tLex = document.getElementById('tabLex');

    var url = 'http://localhost:8000/api/analizar/errLexCon';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            tLex.innerHTML = obtErr(data); //JSON.stringify(data, null, 2);
        })
        .catch(function (error) {
            alert('Hubo un problema con la petición Fetch:' + error.message);
        });

    // errores sintacticos
    var tSin = document.getElementById('tabSin');

    var url = 'http://localhost:8000/api/analizar/errSinCon';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            tSin.innerHTML = obtErr(data);
        })
        .catch(function (error) {
            alert('Hubo un problema con la petición Fetch:' + error.message);
        });

}

function btnAna2() {
    con = document.getElementsByClassName("tab-pane active");
    ele = con[0];
    ide = ele.id;
    tex = document.getElementById("t" + ide).value;

    var url = 'http://localhost:8000/api/analizar/archivo2';

    var data = ({ val: tex });

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert(response.var));
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

function btnNuePes() {
    np++;
    crePes("nuevo " + np + " ", "", np);
}

// reportes
function btnRepHTML() {

    var url = 'http://localhost:8000/api/analizar/repHTML';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            genHTML(data);
        })
        .catch(function (error) {
            alert('Hubo un problema con la petición Fetch:' + error.message);
        });


}

function btnRepClaCop() {
    var url = 'http://localhost:8000/api/analizar/repClaCop';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            genRepClaCop(data.rep);
        })
        .catch(function (error) {
            alert('Hubo un problema con la petición Fetch:' + error.message);
        });
}

function btnRepFunCop() {
    var url = 'http://localhost:8000/api/analizar/repFunCop';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            genRepFunCop(data.rep);
        })
        .catch(function (error) {
            alert('Hubo un problema con la petición Fetch:' + error.message);
        });
}

function btnRepVarCop() {
    var url = 'http://localhost:8000/api/analizar/repVarCop';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            genRepVarCop(data.rep);
        })
        .catch(function (error) {
            alert('Hubo un problema con la petición Fetch:' + error.message);
        });
}

function obtAST() {
    var tex = document.getElementById('tSal');

    var url = 'http://localhost:8000/api/analizar/repAST';

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            crearAST(data);
        })
        .catch(function (error) {
            alert('Hubo un problema con la petición Fetch:' + error.message);
        });
}

// otras funciones
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
    ntex.setAttribute("rows", "20");
    ntex.setAttribute("class", "input-block-level");
    ntex.setAttribute("type", "email");
    ntex.setAttribute("wrap", "off");
    ntex.setAttribute("placeholder", "* Codigo...");
    ntex.innerHTML = cont;

    ndiv.appendChild(ntex);
    con.appendChild(ndiv);

}

function crearAST(varJson) {
    // limpio el arbol
    $('#arbAST').jstree("destroy").empty();
    // asigno la data
    $('#arbAST').jstree({
        'core': {
            "themes": {
                "name": "default-dark",
                "dots": true,
                "icons": true
            },
            'data': varJson
        }
    });
}

function obtErr(lisJSON) {
    var tex = '';
    var con = 0;
    lisJSON.forEach(varJSON => {
        //tex += varJSON.err + ' ' + varJSON.lex + ' en la linea: ' + varJSON.lin + ' en la columna: ' + varJSON.col + '\n';
        tex += '<tr>\n';
        tex += '<th scope="col">' + con++ + '</th>\n';
        tex += '<th>' + varJSON.err + '</th>\n';
        tex += '<th>' + varJSON.lex + '</th>\n';
        tex += '<th>' + varJSON.lin + '</th>\n';
        tex += '<th>' + varJSON.col + '</th>\n';
        tex += '</tr>\n';
    });
    return tex;
}

function genHTML(lisJSON) {
    var tex = '', tab = '', inc = 1;

    lisJSON.forEach(varJSON => {
        tab += '<tr>' + '<td>' + inc + '</td>' + '<td>' + varJSON.err + '</td>' + '<td>' + varJSON.lex + '</td>' + '<td>' + varJSON.lin + '</td>' + '<td>' + varJSON.col + '</td>' + '</tr >';
        inc++;
    });

    tex += '<!DOCTYPE html>'
        + '<html>'
        + '<head>'
        + '<title>Tabla de Errores</title>'
        + '<style>'
        + 'table { border-collapse: collapse; width: 100%; }'
        + 'th, td { text-align: left; padding: 8px; }'
        + 'tr:nth-child(even) { background-color: #f2f2f2; }'
        + 'th { background-color: #333333; color: white; }'
        + '</style>'
        + '</head>'
        + '<body>'
        + '<h2>Reporte de Errores</h2>'
        + '<table>'
        + '<tr>'
        + '<th>No.</th>'
        + '<th>Tipo</th>'
        + '<th>Lexema</th>'
        + '<th>Fila</th>'
        + '<th>Columna</th>'
        + '</tr>'
        + tab
        + '</table>'
        + '</body>'
        + '</html>';



    let nom = "Reporte_HTML.html";
    let elem = document.getElementById('repHTML');
    elem.download = nom;
    elem.href = "data:application/octet-stream," + encodeURIComponent(tex);
}

function genRepClaCop(datos) {
    var titSal = document.getElementById('titSal');
    var tabSal = document.getElementById('tabSal');

    var tit = '<th scope="col">#</th>\n';
    tit += '<th scope="col">Clase</th>\n';
    tit += '<th scope="col">Main</th>\n';
    tit += '<th scope="col">Metodos</th>\n';
    tit += '<th scope="col">Funciones</th>\n';

    titSal.innerHTML = tit;

    var tab = '';
    datos.forEach(dato => {
        tab += '<tr>\n';
        tab += '<th scope="row">' + dato.no + '</th>\n';
        tab += '<td>' + dato.cla + '</td>\n';
        tab += '<td>' + dato.cmai + '</td>\n';
        tab += '<td>' + dato.cmet + '</td>\n';
        tab += '<td>' + dato.cfun + '</td>\n';
        tab += '</tr>\n';
    });


    tabSal.innerHTML = tab;
}

function genRepFunCop(datos) {
    var titSal = document.getElementById('titSal');
    var tabSal = document.getElementById('tabSal');

    var tit = '<th scope="col">#</th>\n';
    tit += '<th scope="col">Tipo</th>\n';
    tit += '<th scope="col">Retorno</th>\n';
    tit += '<th scope="col">Nombre</th>\n';
    tit += '<th scope="col">Parametros</th>\n';
    tit += '<th scope="col">Clase</th>\n';

    titSal.innerHTML = tit;

    var tab = '';
    datos.forEach(dato => {
        tab += '<tr>\n';
        tab += '<th scope="row">' + dato.no + '</th>\n';
        tab += '<td>' + dato.tip + '</td>\n';
        tab += '<td>' + dato.ret + '</td>\n';
        tab += '<td>' + dato.nom + '</td>\n';
        tab += '<td>' + dato.par + '</td>\n';
        tab += '<td>' + dato.cla + '</td>\n';
        tab += '</tr>\n';
    });


    tabSal.innerHTML = tab;
}

function genRepVarCop(datos) {
    var titSal = document.getElementById('titSal');
    var tabSal = document.getElementById('tabSal');

    var tit = '<th scope="col">#</th>\n';
    tit += '<th scope="col">Tipo</th>\n';
    tit += '<th scope="col">Nombre</th>\n';
    tit += '<th scope="col">Mai/Met/Fun</th>\n';
    tit += '<th scope="col">Clase</th>\n';

    titSal.innerHTML = tit;

    var tab = '';
    datos.forEach(dato => {
        tab += '<tr>\n';
        tab += '<th scope="row">' + dato.no + '</th>\n';
        tab += '<td>' + dato.tip + '</td>\n';
        tab += '<td>' + dato.nom + '</td>\n';
        tab += '<td>' + dato.mmf + '</td>\n';
        tab += '<td>' + dato.cla + '</td>\n';
        tab += '</tr>\n';
    });


    tabSal.innerHTML = tab;
}