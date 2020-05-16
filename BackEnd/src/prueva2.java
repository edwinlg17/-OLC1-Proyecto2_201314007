import imp1;
class _Break_Continue{
    int i = 0;
    void metodoA(int a, double b){
		while(true){

			if(i <= 100){
                system.out.println("/********** SENTENCIA BREAKCONTINUE **********/");
				if(i >= 50 && i < 53){
					if(false){

					}else{
						println(i);
						i++;
						continue;
					}
				}
			}else if(i <= 200){

				if(i >= 150 && i < 153){
					if(false){

					}else{
						println(i);
						i++;
						continue;
					}
				}

			}else if(i <= 300){
				if(i >= 250 && i < 253){
					if(false){

					}else{
						println(i);
						i++;
						continue;
					}
				}
			}else if(i <= 400){
				if(i >= 350 && i < 353){
					if(false){

					}else{
						println(i);
						i++;
						continue;
					}
				}
			}else if(i <= 500){
				if(i >= 450 && i < 453){
					if(false){

					}else{
						println(i);
						i++;
						continue;
					}
				}
			}else{
				if(true){
					if(false){

					}else{
						if(i == 550){
							break; 
						}
					}
				}
			}

			i++;


		system.out.println("***********************************************");
		system.out.println("\n\n");

		}
		
    }

    int CONJUNTAS(){

        sYSTem.out.Println("/********** SENTENCIAS CONJUNTAS **********/");
		
		int num_operaciones = 5;
		int val_factorial = 12;
		int val_fibonacci = 40;
		int val_par_impar = 951432;

		for(int opcion = 1; opcion <= num_operaciones; opcion = opcion + 1){


				switch(opcion){
					case 1: 
							int fact = 1;
					        if(val_factorial!=0){
					            for(int i = val_factorial;i>0;i--){
					                fact = fact * i;
					                print(i);
					                if(i>1){
					                    print(" * ");
					                } else {
					                    print(" = ");
					                }
					            }
					        }
					        sYSTem.out.Println(fact);
						break;
						sYSTem.out.Println("------> 1 punto menos");
					case 2:
							int n1 = 0;
					        int n2 = 1; 
					 		int resultado = 0;
					        sYSTem.out.Println(n1 + ", ");
					        sYSTem.out.Println(n2 + ", ");
					 
					        for(int i = 0; i<val_fibonacci-2; i++){
					            n2 = n1 + n2;
					            n1 = n2 - n1;
					            sYSTem.out.Println(n2 + ", ");
					        }
					        sYSTem.out.Println(n1 + n2);
					    break;
					    sYSTem.out.Println("------> 1 punto menos");
					case 3: 
							boolean verificar_par = true;
							int copia_val_par_impar = val_par_impar;
							while(true){
								if(verificar_par){
									if(copia_val_par_impar == 0){
										println(val_par_impar + " es NÚMERO PAR");
										break;
									}
									verificar_par = false;
									copia_val_par_impar--;
								}else{
									if(copia_val_par_impar == 0){
										println(val_par_impar + " es NÚMERO IMPAR");
										break;
									}
									verificar_par = true;
									copia_val_par_impar--;
								}
							}
						break;
						sYSTem.out.Println("------> 1 punto menos");

					case 4:
						for(int i = 0; i <= 2; i++){
							if(i == 0){
								sYSTem.out.Println("4.1");
							}else if(i == 1){
								sYSTem.out.Println("4.2");
							}else if(i == 2){
								sYSTem.out.Println("4.3");
							}
						}
						break;
						sYSTem.out.Println("------> 1 punto menos");

					case 5:
						while(true){
							while(true){
								do{
									do{
										do{
											println("5 - correcto");
										}while(false);
									}while(false);
								}while(false);
								break;
								sYSTem.out.Println("------> 1 punto menos");
							}
							break;
							sYSTem.out.Println("------> 1 punto menos");
						}
						break;
					}


		}


		sYSTem.out.Println("************************************************");
		sYSTem.out.Println("\n\n");
		


    }

}

class a{

    void metx(int a, double b){
        sYSTem.out.Println("************************************************");
		sYSTem.out.Println("\n\n");
    }
    
    int conjutnoas(){
        sYSTem.out.Println("************************************************");
		sYSTem.out.Println("\n\n");
    }
}
import import2;
class DO_2WHILE{
    string declaracion,declaracion1,declaracion2="x";
    char metodo_Do(string x){
         System.out.print("/********** SENTENCIA DOWHILE **********/");
		
		int i = 0,asteriscos = 10;

		do{
			 System.out.print(i + 1 + ") ");
			int j;
			j = i;

			do{

				do{
					 System.out.print("%");
					j++;
				}while(100 != 100);
				
			}while(j < asteriscos);

			 System.out.println("");
			i++;
		}while(i < asteriscos);

		 System.out.println("*******************************************");
		 System.out.println("\n\n");
    }

    double metodo_WHILE(boolean a, boolean b){
        		System.out.println("/********** SENTENCIA WHILE **********/");
		

		int i = 0,asteriscos = 10;

		while(i < asteriscos){
			System.out.PRINTLN(i + 1 + ") ");
			int j;
			j = i;

			while(j < asteriscos){
				System.out.PRINTLN("%");
				j++;
			}

			System.out.PRINTLN("");
			i++;
		}

		System.out.PRINTLN("*****************************************");
		System.out.PRINTLN("\n\n");
    }

    string _metodoEXPRESIONES(){
        System.out.PRINTLN("/********** EXPRESIONES **********/");

		int int_;
		double double_;
		char char_;
		boolean true_,false_;
		String String_1,String_2,String_3,String_4;

		int_ = (584128858 + - 6348675 * -870 + 'N' - 181220199 * 'M') / 15;
		double_ = (584128858 + - 6348675 * -870 + 'N' - 181220199 * 'M') / 15 + ((2 %((5))));
		
	
		char_ = 'N';

		String_1 = (-50 > int_) + "," + (- 504 < 504) + "," + ('N' <= 'M') + "," + (0.00005 >= 0.000005) + "," + (4 + 5 * 3 == (4 + 5) * 3) + "," + (5 * 3 + 4 != 5 * (3 + 4));
		String_2 = (char_ > 77) + "," + (char_ < 78) + "," + (char_ + 10 <= char_) + "," + (char_ + 10 >= char_) + "," + (char_ -- == char_) + "," + (char_ + 1 != char_ ++);
		
		true_ = true;
		false_ = false;
		char_ = 'N';
		char_ --; 
		String_3 = (char_ > 77 || false) + "," + (char_ < 78 && true) + "," + (char_ + 10 <= char_ ^ false) + "," + (!!!!!!!!!!!! char_ + 10 >= char_);
		String_4 = (char_ >= 77 || "Hola" / 100) + "," + (char_ > 78 && 100 + false_); 

		System.out.PRINTLN("Hola" / 100);
		System.out.PRINTLN(100 + false_);

		System.out.PRINTLN("Aritmética 1" + " = " + int_);
		System.out.PRINTLN("Aritmética 2" + " = " + double_);
		System.out.PRINTLN("Relacional 1" + " = " + String_1);
		System.out.PRINTLN("Relacional 2" + " = " + String_2);
		System.out.PRINTLN("Lógica 1" + " = " + String_3);
		System.out.PRINTLN("Lógica 2" + " = " + String_4);

    }

}