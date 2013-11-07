// svg polyfill
if(!(!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect)){$('img').each(function(){ $(this).attr('src',($(this).attr('src')).replace(/\.svg/, '.png')); });}
