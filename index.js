function aplicarDescontoTest(){
    return aplicarDesconto(10,2) === 8;
 }
 
 console.log('A aplicação de desconto está funcionando? ');
 console.log(aplicarDescontoTest());

 function aplicarDesconto(valor, desconto){
    if(desconto > valor) return 0;
    return valor - desconto;
 }
 function aplicarDescontoGrandeTest(){
    return aplicarDesconto(1,10) === 0;
 }
 
 console.log('A aplicação de desconto grande está funcionando? '); console.log(aplicarDescontoGrandeTest());

 