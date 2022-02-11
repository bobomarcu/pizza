function done() {
    //pizaa
    var price = 0;
                    //marime
                        var marime = 0;
                        if(document.getElementById('m1').checked){
                            marime = 'mica';
                            price += 10
                        }
                        else if(document.getElementById('m2').checked){
                            marime = 'medie';
                            price += 15
                        }
                        else if(document.getElementById('m3').checked){
                            marime = 'mare';
                            price += 20
                        }
                    //blat
                        var blat1 = 0;
                            if(document.getElementById('b1').checked){
                                blat1 = 'pufos';
                                price += 2
                            }   
                            else if(document.getElementById('b2').checked){
                                blat1 = 'crocant';
                                price += 2
                            }
                            else if(document.getElementById('b3').checked){
                                blat1 = 'Mediu';
                                price += 2
                            }
                            else if(document.getElementById('b4').checked){
                                blat1 = 'Subtire';
                                price += 2
                            }
                        //sos

                        var sos1 = 0;
                            if(document.getElementById('s1').checked){
                                sos1 = 'dulce';
                                price += 1
                            }
                            else if(document.getElementById('s2').checked){
                                sos1 = 'picant';
                                price += 1
                            }

                        //branza 
                        var branza = 0;
                        if(document.getElementById('b1').checked){
                            branza = 'mozarela';
                            price += 0
                        }
                        //topping 
                        var toping = 0;
                            if(document.getElementById('t1').checked){
                                toping = 'Peperoni';
                                price += 3
                            }
                            else if(document.getElementById('t2').checked){
                                toping = 'Prosciuto';
                                price += 2
                            }
                            else if(document.getElementById('t3').checked){
                                toping = 'Gorgonzola, Parmezan, Fontina';
                                price += 4
                            }
                        //extra
                        var extra = 0
                            if(document.getElementById('e1').checked){
                                extra = 'Mushroooms';
                                price += 2
                                
                            }
                            else if(document.getElementById('e2').checked){
                                extra = 'Olives';
                                price += 2
                            }
                        var plus = document.getElementById('suggestions').value;
                    class pizza{
                            constructor( marime,blat,sos,branza,toping,extra,other,price){
                                this.marime = marime
                                this.blat = blat;
                                this.sos = sos;
                                this.branza = branza;
                                this.toping = toping;
                                this.extra = extra;
                                this.other = other;
                                this.price = price;

                            }
                    }
                    const pizzai = new pizza(marime,blat1,sos1,branza,toping,extra,plus,price) 
                
    //date 
   var num = document.getElementById('nume').value;
   var num1 = num.toString();
    var prenum = document.getElementById('prenume').value;
    var prenum1 =prenum.toString();
    var adresa = document.getElementById('adresa').value;
    var adresa1 = adresa.toString();
    var email = document.getElementById('email').value;
    var email1 = email.toString();
    var nrt = document.getElementById('nr').value;
    var nrt1 = nrt.toString();

     class date{
         constructor(nume , prenume, adresa,email,telefon){
             this.nume = nume;
             this.prenume = prenume;
             this.adresa = adresa;
             this.email = email;
             this.telefon = telefon;
         }
     }

     const data = new date(num1, prenum1, adresa1,email1,nrt1)

     var trim2  = JSON.stringify(data);
     var slic2 = trim2.replace(/{|}|"/gi," ")
     var slic3 = slic2.replace(/,/gi,"<br>")
     

   var trim= JSON.stringify(pizzai)
     console.log(trim)
    
    var slic = trim.replace(/{|}|"/gi," ")
    var slic1 = slic.replace(/,/gi,"<br>")
    
    console.log(email1);


     console.log(slic2);
     
    
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
      var comanda = getRandomIntInclusive(1000,9999);
      console.log(comanda)

      Email.send({
        SecureToken :"64c66561-1d42-4d59-bef7-9c7315d06795",
       
        To : email1+"site.pizza.example@gmail.com",
        From : "site.pizza.example@gmail.com",
        Subject : `Comanda pizza Exemplu #${comanda}`,
        Body : `<b>Comanda dumneavoastra:</b> <br><br> ${slic1} <br><br>  <b>Date de livrare:</b> <br><br> ${slic3}`,
    })
    .then(function(message){
        alert("order sent successfully")
    });

    
}
function next(){
    $(".rez").delay(500).fadeIn(900)
    $(".home1").fadeOut(500);
    
}
