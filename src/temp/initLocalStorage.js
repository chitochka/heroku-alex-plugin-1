(async function(ls){
    if (ls.isInitialized) return
    
    /* Data For SLovnik*/
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
   
    const res = await fetch(`http://data.fixer.io/api/latest?access_key=8578e8d026e18e8b31747d4eab656c01&symbols=USD,CZK,KZT`)
    const currency = await res.json()
    if (!currency.success) alert('Chyba stahovani kurza men !!')
    await ls.setItem('currency', JSON.stringify(currency))



    // ls.setItem('slovnikHeight', JSON.stringify({
    //     min:150,
    //     max:400,
    //     value:270,
    //     label : "Výška okna"
    // }))

    // alert('ls is Initialized')
    
    
    ls.isInitialized = true
    console.warn('\n\nls is Initialized\n')
})(localStorage)

/*
    docasne reseni, bylo by dobre LS udelat pres vue-ls
    nebo
    https://webdevblog.ru/kak-sdelat-localstorage-reaktivnym-vo-vue/
   
*/ 


//http://data.fixer.io/api/latest?access_key=8578e8d026e18e8b31747d4eab656c01&symbols=USD,CZK,KZT&format=1