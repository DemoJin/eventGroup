var TBack = document.getElementById('tabBack'),
	TMark = document.getElementsByTagName('mark');
	THtml = document.getElementsByTagName('html')[0],
	TSection = document.getElementsByTagName('section')[0];

TBack.addEventListener('touchstart',function(){
	history.go(-1);
});

for (var i = 0; i < TMark.length; i++) {
    (function(j) {
    	TMark[j].addEventListener('touchstart',function(){
    		TMark[j].setAttribute('class', 'add');
    	});
    	TMark[j].addEventListener('touchend',function(){
    	 	TMark[j].setAttribute('class', '');
    	});
    }(i));
};               

function autoSize(){
	var docEl = document.documentElement,
		docElWidth = docEl.clientWidth,
		docElHeight = docEl.clientHeight;

	THtml.style.fontSize=docEl.clientWidth/750+'%';
	TSection.style.height=docElHeight-88+'px';
};

autoSize();

window.onresize=function(){
	autoSize();
};