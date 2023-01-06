const parrafo = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.section');
const clearParrafo = document.querySelectorAll('.clear--parrafo');

parrafo.forEach((parrafo) => {
	//inicio del arrastre
	parrafo.addEventListener('dragstart', (event) => {
		console.log('inicio de arrastre');
		// console.log(parrafo.innerText);
		parrafo.classList.add('dragging');
		event.dataTransfer.setData('id', parrafo.id);
	});
	parrafo.addEventListener('dragend', (event) => {
		console.log('He terminado de arrastre');
		parrafo.classList.remove('dragging');

		event.dataTransfer.setData('id', parrafo.id);
	});
});

secciones.forEach((seccion) => {
	seccion.addEventListener('dragover', (event) => {
		console.log('drag over');
		event.preventDefault();
	});

	seccion.addEventListener('drop', (event) => {
		const id_parrafo = event.dataTransfer.getData('id');
		console.log('parrafo id: ' + id_parrafo);

		const parrafo = document.getElementById(id_parrafo);
		seccion.appendChild(parrafo);
		// const borrar = event.dataTransfer.clearData();

		if (parrafo == clearParrafo) {
			// parrafo.parentNode.removeChild(parrafo);
			parrafo.remove(parrafo);
		}
	});
});
