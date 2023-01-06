function initMap() {
	const posicion = {
		lat: -25.363,
		lng: 131.044,
	};
	const posicion2 = {
		lat: -23.152,
		lng: 131.044,
	};
	const posicion3 = {
		lat: -16.678,
		lng: 131.044,
	};

	const map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: posicion,
	});
	const marker = new google.maps.Marker({
		position: posicion,
		map,
		title: 'Favorito 1',
	});
	const marker2 = new google.maps.Marker({
		position: posicion2,
		map,
		title: 'Favorito 2',
	});
	const marker3 = new google.maps.Marker({
		position: posicion3,
		map,
		title: 'Favorito 3',
	});
}
