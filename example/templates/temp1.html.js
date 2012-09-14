define(function() { return function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="mod modTemp modTempView1">\r\n\r\n\t<div class="hd">Template1</div>\r\n\r\n\t<div class="bd">\r\n\t\t<ul class="list">\r\n\r\n\t\t\t';
 _.each(collection.models, function(model) { 
;__p+='\r\n\t\t\t\t<li class="item">'+
( model.name )+
'</li>\r\n\t\t\t';
 }); 
;__p+='\r\n\r\n\t\t</ul>\r\n\t</div>\r\n\r\n</div>';
}
return __p;
}; });