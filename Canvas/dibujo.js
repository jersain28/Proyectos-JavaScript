const lienzo = document.querySelector("#lienzo");
      const ctx = lienzo.getContext("2d");

      // Dibuja el cuerpo del extraterrestre
      ctx.fillStyle = "green";
      const x = lienzo.width / 2;
      const y = lienzo.height / 2;
      const radioCuerpo = 100;
      ctx.beginPath();
      ctx.arc(x, y, radioCuerpo, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();

      // Dibuja los ojos
      ctx.fillStyle = "white";
      const radioOjos = 20;
      const distanciaOjos = 30;
      ctx.beginPath();
      ctx.arc(x - distanciaOjos, y - 30, radioOjos, 0, Math.PI * 2);
      ctx.arc(x + distanciaOjos, y - 30, radioOjos, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();

      // Dibuja la boca
      const radioBoca = 40;
      ctx.beginPath();
      ctx.arc(x, y + 30, radioBoca, 0, Math.PI);
      ctx.stroke();
      ctx.closePath();

      // Dibuja las antenas
      ctx.beginPath();
      ctx.moveTo(x - 5, y - radioCuerpo);
      ctx.lineTo(x - 10, y - radioCuerpo - 20);
      ctx.lineTo(x - 15, y - radioCuerpo);
      ctx.moveTo(x + 5, y - radioCuerpo);
      ctx.lineTo(x + 10, y - radioCuerpo - 20);
      ctx.lineTo(x + 15, y - radioCuerpo);
      ctx.stroke();
      ctx.closePath();