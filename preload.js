/*!
 * JavaScript preload() function – http://mths.be/preload
 * Preload images, CSS and JavaScript files without executing them
 * Script by Stoyan Stefanov – http://www.phpied.com/preload-cssjavascript-without-execution/
 * Slightly rewritten by DaMontana – https://damontana.com.au/
 */
 // first, declare function:

function preload(array) {
	var length = array.length,
	    document = window.document,
	    body = document.body,
	    isIE = 'fileSize' in document,
	    object;
	while (length--) {
		if (isIE) {
			new Image().src = array[length];
			continue;
		}
		object = document.createElement('object');
		object.data = array[length];
		object.width = object.height = 0;
		body.appendChild(object);
	}
}

// and then, preload:

preload([
	'https://klay.com.au/wp-content/plugins/revslider/public/assets/fonts/revicons/revicons.woff?5510888',
	'https://klay.com.au/wp-content/themes/woodmart/fonts/fontawesome-webfont.woff2?v=4.7.0',
]);