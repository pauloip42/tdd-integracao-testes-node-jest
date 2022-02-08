function aplicarDescontoTest(){
    return aplicarDesconto(10,2) === 8;
 }
 
 console.log('A aplicação de desconto está funcionando? ');
 console.log(aplicarDescontoTest());

 function aplicarDesconto(valor, desconto){
    try {
       if(desconto > valor) return 0;
       return valor - desconto;
    } catch (error) {
       console.log('ERROR', error)
    }
 }

 
 function aplicarDescontoGrandeTest(){
    return aplicarDesconto(1,10) === 0;
   }
   
   console.log('A aplicação de desconto grande está funcionando? '); console.log(aplicarDescontoGrandeTest());
   module.exports = {aplicarDesconto, aplicarDescontoGrandeTest};

 