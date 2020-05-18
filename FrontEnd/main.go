package main

import(
	"fmt"
	"net/http"
	"html/template"
)

func index(w http.ResponseWriter, r *http.Request){
	template, err := template.ParseFiles("templates/index.html")
	if err != nil{
		fmt.Fprintf(w, "pagina no encontrada")
	}else{
		template.Execute(w,nil)
	}
}

func main(){
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("templates/css/"))))
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("templates/img/"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("templates/js/"))))
	http.Handle("/fonts/", http.StripPrefix("/fonts/", http.FileServer(http.Dir("templates/fonts/"))))
	http.Handle("/color/", http.StripPrefix("/color/", http.FileServer(http.Dir("templates/color/"))))
	http.Handle("/ico/", http.StripPrefix("/ico/", http.FileServer(http.Dir("templates/ico/"))))
	http.Handle("/js/dist/", http.StripPrefix("/js/dist/", http.FileServer(http.Dir("templates/js/dist/"))))
	http.Handle("/js/dist/themes/default/", http.StripPrefix("/js/dist/themes/default/", http.FileServer(http.Dir("templates/js/dist/themes/default//"))))
	http.Handle("/js/dist/themes/default-dark/", http.StripPrefix("/js/dist/themes/default-dark/", http.FileServer(http.Dir("templates/js/dist/themes/default-dark/"))))

	http.HandleFunc("/", index)
	fmt.Println("servidor activo")
	http.ListenAndServe(":8080",nil)
}