function Hoge(){
    this.instanceVal = 99;
    Hoge.prototype.val = 10;
}

var a = new Hoge();
var b = new Hoge();

console.log(a.val);
console.log(b.val);

// a.valを変更し、bと比較
a.val = 50;
console.log(a.val);
console.log(b.val);

// prototypeを書き換えてみる
var c = new Hoge();
Hoge.prototype.val = 150;
console.log(b.val);
console.log(c.val);

console.log(a instanceof Hoge);

function Foo(){
    Hoge.call(this);
}

var foo = new Foo();
console.log(foo.prototype instanceof Hoge);
console.log(foo.instanceVal);

foo.instanceVal = 150;
console.log(foo.instanceVal == a.instanceVal);
