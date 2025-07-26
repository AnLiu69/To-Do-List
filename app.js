const tarea = document.getElementById('busqueda');
const crearTarea = document.getElementById('crear-tarea');
const listaTareas = document.getElementById('lista-tareas');
const botonEliminar = document.querySelectorAll('.tarea-eliminada');
const contendor = document.getElementById('contenedor');
let estadoTarea;

crearTarea.addEventListener('click', (e) => {
    let valorTarea = tarea.value;
    if(valorTarea != ''){
        let newTarea = document.createElement('li');
        let newTexto = document.createElement('p');
        let newBtnSi = document.createElement('button');
        let imgSi = document.createElement('img');
        let newBtnNo = document.createElement('button');
        let imgNo = document.createElement('img');

    
        //Agregando contenido y clases
        newTarea.classList.add('tarea', 'contorno');
    
        newTexto.classList.add('texto-tarea', 'hijo');
        newTexto.innerText = valorTarea;
    
        newBtnSi.classList.add('tarea-completada', 'hijo');
        imgSi.alt = 'tarea realizada';
        imgSi.src = 'imgs/check.svg'
    
        newBtnNo.classList.add('tarea-eliminada', 'hijo');
        imgNo.alt = 'eliminar tarea';
        imgNo.src = 'imgs/trash.svg'
    
        //Agregando listeners
        newBtnNo.addEventListener('click', () =>{
            console.log("Tarea Removida");
            newTarea.remove();
        })
    
        newBtnSi.addEventListener('click', () =>{
            newTarea.classList.toggle('completada');
            newTexto.classList.toggle('texto-completado');
            newBtnSi.classList.toggle('boton-realizado');
        })
    
        //Agregando nodo al DOM
        newTarea.append(newTexto);
        newBtnSi.append(imgSi);
        newTarea.append(newBtnSi);
        newBtnNo.append(imgNo);
        newTarea.append(newBtnNo);
        listaTareas.append(newTarea);
    
        tarea.value = '';
    }
})

