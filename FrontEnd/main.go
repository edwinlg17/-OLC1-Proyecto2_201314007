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
	http.HandleFunc("/", index)
	fmt.Println("servidor activo")
	http.ListenAndServe(":8080",nil)
}