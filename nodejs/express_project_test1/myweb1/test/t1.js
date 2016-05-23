

function htmlPath(dir) {
  var curr = [];
  return dir.split('/').map(function(part){
    curr.push(encodeURIComponent(part));
    return part ? '<a href="' + curr.join('/') + '">' + part + '</a>' : '';
  }).join(' / ');
}

var path = './a/b/c/a.html';
var ret = htmlPath(path);

console.log(path.split('/'));
