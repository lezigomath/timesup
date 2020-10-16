function init(){
    app= new Vue({
        el : "#app",
        data: {
            accesCode:''
        },
        methods: {
            navToMain: function(){
                window.location='./TimesUp.html'
            },
            navToLink: function(link){
                window.location='./Credits.html'
            },
            navToHelp: function (){
                window.location ='./Help.html'
            },
        }

    });
}

var app;    
    

window.onload = init;

