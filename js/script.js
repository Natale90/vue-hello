
// ----------------------ESERCITAZIONE POMERIDIANA-----------------

//GOAL: stampare a schermo il contenuto di una variabile dentro un h1
//BONUS: utilizzare un data come nome del file immagine in un tag img

function esVue1(){

  new Vue({

    el: '#app',

    data: {

      'value2': 'Welcome Vue',
      'imgVue': 'https://storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg',
      'showImg': 'hide',
      'btn': 'show img'
    },

    methods:{
      show: function (){

        if(this.showImg == 'hide'){

          this.btn = 'hide Img'
          this.showImg = 'active'
        } else if (this.showImg == 'active'){

          this.showImg = 'hide'
          this.btn = 'show Img'
        }
      }
    }

  })


}

function init(){
  esVue1();
}



$(init);
