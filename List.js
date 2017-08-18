var Node = function(value){
  this.value = value;
  this.next = null;
}

var List = function(){
  this.length = 0;
  this.head = null;
}

List.prototype.add = function(input){
  var node = new Node(input),
      currentNode = this.head;

      
      if(!currentNode){
        this.head = node;
        this.length++;
        return;
      }

      while(currentNode.next){
        currentNode = currentNode.next;
      }

     
      currentNode.next = node;
      this.length++;

      return node;
};

function print (List) {
var tmp = List.head;
for(var i = 0; i < List.length; i++){
        console.log(tmp);
	tmp=tmp.next;
            }
return;
}  

var List = new List();

while(1){
var input = prompt("Введите элемент списка","");
if(!input) break;
List.add(input);
}

print(List);