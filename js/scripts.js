const letters = {
    a: {
        type: 'rectangle',
        width: 45,
        height: 25,
        color: '#D6EAF8' ,
        bgColor: '#5DADE2'
    },
    b:{
        type: 'triangle',
        width: 30,
        height: 25,
        color: '#F4D03F' ,
        bgColor: '#FCF3CF'
    },
    c:{
        type: 'circle',
        width: 25,
        height: 25,
        color: '#EBDEF0' ,
        bgColor: '#C39BD3'  
    },
    d:{
        type: 'circle',
        width: 25,
        height: 25,
        color: '#EBDEF0' ,
        bgColor: '#C39BD3' 
    },
    e:{
        type: 'rectangle',
        width: 25,
        height: 40,
        color: '#ABEBC6' ,
        bgColor: '#2ECC71'  
    },
    f:{
        type: 'rectangle',
        width: 25,
        height: 40,
        color: '#FADBD8' ,
        bgColor: '#E74C3C'  
    },
    g:{
        type: 'circle',
        width: 25,
        height: 25,
        color: '#F9E79F' ,
        bgColor: '#F4D03F'  
    },
    h:{
        type: 'triangle',
        width: 30,
        height: 25,
        color: '#FDEDEC' ,
        bgColor: '#C0392B'  
    },
    i:{
        type: 'rectangle',
        width: 15,
        height: 40,
        color: '#D7DBDD' ,
        bgColor: '#7F8C8D'  
    },
    j:{
        type: 'rectangle',
        width: 25,
        height: 40,
        color: '#F9E79F' ,
        bgColor: '#F4D03F'  
    },
    k:{
        type: 'triangle',
        width: 30,
        height: 25,
        color: '#E8DAEF' ,
        bgColor: '#8E44AD'  
    },
    l:{
        type: 'rectangle',
        width: 25,
        height: 40,
        color: '#D1F2EB' ,
        bgColor: '#17A589'  
    },
    m:{
        type: 'rectangle',
        width: 40,
        height: 25,
        color: '#F5EEF8' ,
        bgColor: '#9B59B6'  
    },
    n:{
        type: 'rectangle',
        width: 40,
        height: 25,
        color: '#D6DBDF' ,
        bgColor: '#566573'  
    },
    o:{
        type: 'circle',
        width: 25,
        height: 25,
        color: '#F9E79F' ,
        bgColor: '#F4D03F'  
    },
    p:{
        type: 'triangle',
        width: 30,
        height: 25,
        color: '#FDEBD0' ,
        bgColor: '#E67E22'  
    },
    q:{
        type: 'circle',
        width: 25,
        height: 25,
        color: '#AF26E5' ,
        bgColor: '##7A1BA0 '
    },
    r:{
    type: 'rectangle',
    width: 23,
    height: 25,
    color: '#B3ED2D ' ,
    bgColor: '#7EA721'  
    },
    s:{
    type: 'circle',
    width: 15,
    height: 18,
    color: '#A191E8' ,
    bgColor: '#7266A7'  
    },
    t:{
    type: 'rectangle',
    width: 16,
    height: 21,
    color: '#EAAFC0' ,
    bgColor: '#D23864'  
    },
    u:{
    type: 'triangle',
    width: 10,
    height: 20,
    color: '#9C9F47 ' ,
    bgColor: '#5BB54B '
    },
    v:{
    type: 'triangle',
    width: 12,
    height: 12,
    color: '#B5A34B' ,
    bgColor: '#FC3B08 '
    },
    w:{
    type: 'circle',
    width: 16,
    height: 16,
    color: '#08BDFC' ,
    bgColor: '#28515F'
    },
    x:{
        type: 'triangle',
        width: 15,
        height: 30,
        color: '#79BE6B' ,
        bgColor: '#2D751F'
    },
    y:{
        type: 'rectangle',
        width: 27,
        height: 30,
        color: '#D1D6B5' ,
        bgColor: '#2D751F'
    },
    z:{
        type: 'circle',
        width: 20,
        height: 21,
        color: '#0896FF' ,
        bgColor: '#A2C5DE'
    }


}

  
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 9000;
  canvas.height = 9000;
  // Agregar un event listener al formulario para que dibuje la frase en el canvas cuando se envía
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir que se envíe el formulario
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Obtener el título ingresado en el formulario y convertirlo a minúsculas
    const title = event.target.elements['title-input'].value.toLowerCase();
  
    // Ciclo for para recorrer la frase letra por letra y dibujar la forma correspondiente
    for (let i = 0; i < title.length; i++) {
      const letter = title.charAt(i);
      const letterObj = letters[letter];
    
      if (letter === ' ') { // Si es un espacio, dibujar un cuadrado blanco
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(i * letterObj.width, 0, letterObj.width, letterObj.height);
      } else { // Si no es un espacio, dibujar la letra correspondiente
        switch (letterObj.type) {
          case 'rectangle':
            ctx.fillStyle = letterObj.bgColor;
            ctx.fillRect(i * letterObj.width, 0, letterObj.width, letterObj.height);
            ctx.strokeStyle = letterObj.color;
            ctx.strokeRect(i * letterObj.width, 0, letterObj.width, letterObj.height);
            break;
          case 'circle':
            ctx.beginPath();
            ctx.arc(i * letterObj.width + letterObj.width / 2, letterObj.height / 2, letterObj.width / 2, 0, 2 * Math.PI);
            ctx.fillStyle = letterObj.bgColor;
            ctx.fill();
            ctx.strokeStyle = letterObj.color;
            ctx.stroke();
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(i * letterObj.width, letterObj.height);
            ctx.lineTo(i * letterObj.width + letterObj.width, letterObj.height);
            ctx.lineTo(i * letterObj.width + letterObj.width / 2, 0);
            ctx.closePath();
            ctx.fillStyle = letterObj.bgColor;
            ctx.fill();
            ctx.strokeStyle = letterObj.color;
            ctx.stroke();
            break;
        }
      }
    }
  });
