// Creamos una const para guardar el valor del color , y va a recibir como parametro el valor del color.
const saveColor = ( value ) => {
colorList.push(value);
    localStorage.setItem("colorValue", JSON.stringify(value));
    localStorage.setItem("colorList", JSON.stringify(colorList));
    if(color.value === saveColor.value){
        console.log('jhdfjg')
    }
  
    getColors();
}
