const categoriaMotorista =  prompt('Qual a sua categoria da carteira de motorista?').toLocaleUpperCase();

switch (categoriaMotorista) {
  case 'A':
    alert ('Você pode conduzir motos e triciclos');
    break
  case 'B':   
    alert ('Você pode conduzir apenas carro de passeios ');
    break 
  case 'AB':
    alert ('Você pode conduzir motos, triciclos e carro de passeio');
    break
  case 'C': 
    alert('Você pode conduzir veículos de carga acima de 3,5 toneladas ');
    break
  case 'D':
    alert('Você pode conduzir veículos com mais de 8 passageiros');
    break
  case 'E':
    alert('Você pode conduzir veículos com unidade acoplada acima de 6 toneladas');
    break
  default:
    alert('Dado inserido inválido');
}