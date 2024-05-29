for (var i = 0; i < 3; i++) {
	var div = document.createElement('div');
	div.setAttribute('class', 'icon-holder');
	setTimeout(function () {}, 1000);
	for (var j = 0; j < 30; j++) {
		var randomNumber = Math.floor(Math.random() * 100);
		var imageSrc = '/brand-identity/iconography/Logo/Quill.svg';
		/**
		 * `https://source.unsplash.com/random?mountain?sig=${randomNumber}`
		 * `https://loremflickr.com/640/480/nature,mountain,river,tree?random=${randomNumber}`
		 */
		var img = document.createElement('img');
		img.setAttribute('class', 'icon');
		img.setAttribute('src', imageSrc);
		div.appendChild(img);
	}

	var innerview = document.getElementsByClassName('icon-section')[0];
	innerview.appendChild(div);
}
