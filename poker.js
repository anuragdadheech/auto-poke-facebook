
window.setInterval(function(){
	poke();
}, 5000);

//main poke function called after an interval
function poke(){
	pokeList(document.getElementsByClassName("_42ft"));
}

//iterating through list to poke each
function pokeList(list){
	for(var i=0; i<list.length; i++) {
		var e = list[i];
		if ( (e.getAttribute('rel') == 'async-post') && (e.getAttribute("ajaxify").substring(0,13) == "/pokes/inline") && !(e.getAttribute("ajaxify").indexOf("suggestion") > -1) && !(e.getAttribute("ajaxify").indexOf("is_hide=1") > -1) ) {
				click = document.createEvent('MouseEvents');
				click.initEvent( 'click', true, true );
				e.dispatchEvent(click);
		}
	}
}
