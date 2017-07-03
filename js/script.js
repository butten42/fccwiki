$(document).ready(function(){
    $("#btn").on("click",function(){
        var display=$('.article');
        var city=$('#city').val();
        display.text("");
    var wikiUrl='http://en.wikipedia.org/w/api.php?action=opensearch&search='
    +city+'&format=json&callback=wikiCallback';
    $.ajax({
        url: wikiUrl,
        dataType: 'jsonp'
    }).done(function(response){
        var items=response[1];
        var itemInner=response[2]
        for(var i=0;i<items.length;i++){
            item=items[i];
            inner=itemInner[i]
            var url='http://wikipedia.org/wiki/'+item;
            var title='<a href="'+url+'">'+item+'</a>';
            var p='<p>'+inner+'</p>';
            display.append('<li class="li">'+title+p+'</li>');
        }
    });
    });
});