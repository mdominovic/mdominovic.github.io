var a=prompt("Unesi iznos kuna koji želiš pretvoriti u eure:  ");
var iznos=parseFloat(a);
var eura=iznos/7.502545;
document.write("Za željeni iznos kuna dobiti ćeš: "+eura+" €. <br>");
document.write("Točnije: "+eura.toFixed(2)+" €. <br>");