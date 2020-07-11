document.getElementById ("shuffle").addEventListener ("click", shuffle, false);
document.getElementById ("sort").addEventListener ("click", sort, false);

function shuffle() {
             var parent = document.getElementById("list");
             var frag = document.createDocumentFragment();
             while (parent.children.length) {
                 frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
             }
             parent.appendChild(frag);
         }
         
         function sort(){
             var main = document.getElementById( 'list' );        
             [].map.call( main.children, Object ).sort( function ( a, b ) {
                 return +a.id.match( /\d+/ ) - +b.id.match( /\d+/ );
             }).forEach( function ( elem ) {
                 main.appendChild( elem );
             });        
         }