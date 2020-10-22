function init (){
    app= new Vue ({
        el: '#app',
        data: {
            accessCode :''
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
            navtoTour1: function (){
                window.location ='./Tour1.html'
            },
        },
        created (){
            var searchCode= new URLSearchParams(window.location.search)
            this.accessCode = searchCode.get('code')
        },
    })
}

window.onload = init;