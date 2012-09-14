define(function() { return function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="mod modTemp modTempView1"> <div class="hd">Template1</div> <div class="bd"> <ul class="list"> ';
 _.each(collection.models, function(model) { 
;__p+=' <li class="item">'+
( model.name )+
'</li> ';
 }); 
;__p+=' </ul> </div> </div>';
}
return __p;
}; });