import { Component,Input,OnInit } from '@angular/core';
import datos from 'src/assets/json/palabrasReservadas.json';
import { style } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.consolelog();
    
  }
  title = 'compilador';

  contador:number = 0;
  letra = [];



  dato:any = datos;
  palabrasReservadas:any  = this.dato.palabrasReservadas;
  letras:any []= [];
  reservado:any [] = [];



  
  consolelog(){
    for(let i = 0; i < this.palabrasReservadas.length; i++){
    this.reservado [i] = this.palabrasReservadas[i].valor;
    }

    for(let i = 0; i < this.dato.letras.length; i++){
      this.letras [i] = this.dato.letras[i];
      }

  }

  contadorpalabra:number = 0;

  comprobar:never[] = [];
  comprobarpalabra:never[] = [];
  pasos:number = 0;
  contadorpasos:number = 0;


  onkey(event:any){
    //convierte el string en un array
    this.comprobar = event.target.value.split("");
    this.comprobarpalabra = event.target.value.split(" ");
    //lleva el contador de la posicion del array
    this.letra.push(this.comprobar[this.contador]);

    if(this.pasos == 0){
    //comprueba si el incicio es una letra
    if(this.letras.includes(this.comprobar[this.contadorpalabra]) || this.comprobar[0] == " "){
      

      //comprueba si es una letra o no
      if(this.letras.includes(this.letra[this.contador])){
       

          //comprueba si es una palabra reservada
          if(this.reservado.includes(this.comprobarpalabra[this.contadorpalabra])){
            
          console.log("es reservada");
          this.pasos = 1;

          }else{
            console.log("no es reservada");
          }
      }else{
        console.log("no es una letra");
      }
     
      //adviete que no es una letra la del inicio
    }else{
      console.log("Inicio no valido");
     window.alert("Inicio no valido, el simbolo: " + this.comprobar[0] + " no es valido");
    }
  }

  

  

if( this.comprobar[this.contador] == " ")
{
  this.contadorpasos = this.contador;
}



  if(this.pasos == 1 && this.comprobar[this.contadorpasos] == " "){

    
    console.log("todo bien, entro");
        

      //comprueba si es una letra o no
      if(this.letras.includes(this.letra[this.contador])){

        if( this.comprobar[this.contadorpasos] == " ")
        {
          console.log("todo bien, es variable");
                    this.pasos = 2;
        
        } 

        }else{
          console.log("no es una letra");
        }
       
    } 


    if(this.pasos == 2){
      if(this.dato.asignacion.includes(this.comprobarpalabra[this.contadorpalabra])){
        console.log("es asignacion");
        this.pasos = 3;
      }else{
        console.log("no es asignacion");
      }
    }


    if(this.pasos == 3 && this.comprobar[this.contadorpasos] == " "){

    
      console.log("todo bien, entro");
          
  
        //comprueba si es una letra o no
        if(this.letras.includes(this.letra[this.contador])){
  
          if( this.comprobar[this.contadorpasos] == " ")
          {
            console.log("todo bien, es valor");
                      this.pasos = 4;
          
          } 
  
          }else{
            console.log("no es una letra");
          }
         
      }


      if(this.pasos == 4){
        if(this.dato.cierre.includes(this.comprobarpalabra[this.contadorpalabra])){
          console.log("finalizado");
        }else{
          console.log("no es finalizado");
        }
      }

    console.log (this.comprobarpalabra);
  }
    
    
  
}

  



