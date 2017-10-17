import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Parte1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parte1',
  templateUrl: 'parte1.html',
})
export class Parte1Page {
 public a = 5;
 public b = 7;
 public c = 9;
 public d = 11;
 public e = 13;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidload Parte1Page");
  
    var max_cinco =  (a,b,c,d,e); 
    max_cinco.sort(function(a,b) {return b - a });
  
   console.log(max_cinco)
   console.log(max_cinco[2],max_cinco[1] , max_cinco[0]);
  }
  
  {
    var cuadratica = (a,b,c);
    var discriminante = (b*b - 4*a*c)

    if (discriminante < 0 ){
      console.log ("No tiene soluciones reales la ecuacion")
    }
    else {

       if (discriminante = 0){
             console.log ("tiene dos soluciones reales e iguales ")
             var x1=(-this.b-Math.sqrt(discriminante))/(2*this.a);

        }
       else{
             console.log ("Tiene dos soluciones reales distintas")
             var x1=(-this.b-Math.sqrt(discriminante))/(2*this.a);
             var x2=(-this.b+Math.sqrt(discriminante))/(2*this.a);
       }
    }
    console.log("Las soluciones son" ,x1.toFixed(3),x2.toFixed(3));
  }
}