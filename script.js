    function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        alert("Por favor, digite um número!")          
    } else {
        var n = Number(num.value)  
    tab.innerHTML = ''     
    for(let i = 1; i <= 10; i++){
    let item = document.createElement('option')
    item.text = `${n} x ${i} = ${n * i}`
    item.value = `tab${n}`    
    tab.appendChild(item)
    }
  }
 }