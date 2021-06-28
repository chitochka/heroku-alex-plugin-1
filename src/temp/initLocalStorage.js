(function(ls){
    if (ls.isInitialized) return
    

    ls.setItem('slovnikWidth', JSON.stringify({
        min:200,
        max:600,
        value:330,
        label : "Šířka  okna"
    }))
   
    ls.setItem('slovnikHeight', JSON.stringify({
        min:150,
        max:400,
        value:270,
        label : "Výška okna"
    }))
   
   alert('ls is Initialized')
    
   
    ls.isInitialized = true
})(localStorage)

/*
    docasne reseni, bylo by dobre LS udelat pres vue-ls
    nebo
    https://webdevblog.ru/kak-sdelat-localstorage-reaktivnym-vo-vue/
   
*/ 
