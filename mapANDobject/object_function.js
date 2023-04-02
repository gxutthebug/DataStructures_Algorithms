// Object.prototype的属性特性是:不可写、不可枚举、不可配置
//Object.prototype有7个方法，分别是： constructor()  hasOwnProperty() isPrototypeOf() propertyIsEnumerable() valueOf() toString() toLocalString() 
let aa = {
    a :1,
    b:2,
    c:3,
}

Object.prototype.d=4
Object.prototype.my_function = function () { console.log("啦啦啦")}

console.log(aa.__proto__)  // a b c d my_function



for(let a in aa) { // 注意这里如果不用let 定义这个a ; a 会变成全局变量污染全局 ;解释在外部访问a的值是my_function(最后一个遍历到的东西)
    console.log(a) // a b c d my_function
}

console.log("------------------")

//console.log(a in aa) // a is not defined
console.log("a" in aa)// true
console.log("d" in aa) // true
console.log(d in aa) // false ; 这里没有显示d is not defined是因为 ,Object.prototype上的属性可以全局访问
console.log(window.__proto__) // window的原型链上可以找到d


Object.myname = "yfm"  
console.dir(Object) // values() keys() create()等方法都在Object构造函数上 ; 不会遍历到原型上 只收集对象本身的
console.log(Object.values(aa)) //  [1, 2, 3]
console.log(Object.keys(aa)) //  ['a', 'b', 'c']


/*总结:
    ① 构造函数可以直接自定义添加属性方法,构造函数.xxx直接访问相当于静态属性 方法

    ② 构造函数.prototyper上面的方法虽然也可以不用实例化直接:  类名.prototype.方法名.call(obj,xxx)调用,但是本质上还是传入了一个obj实例对象;
      本质还是对象调用不是类调用, 这只是 obj.方法名 这种调用方式的一种提高安全性的优化写法(防止该方法被重写)

    ③ xxx in obj : in 运算符坚持的是该属性是否在obj对象上 或者 在obj原型链上的"自定义属性里" , 所以用for( in )循环遍历对象
    自然也会遍历到原型链上 ; 所以如果我们想要遍历obj对象上本身的属性我们要用for( in )循环结合hasOwnProperty() 检查。

    ④ for( in )循环遍历数组有同样的缺陷：所以遍历数组我们通常用 for ( of ) , foreach等方式代替

*/






















// A instanceof B : 如果B在A的原型链上就返回TRUE
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);
//   // Expected output: true
  
//   console.log(auto instanceof Object);
//   // Expected output: true
  





