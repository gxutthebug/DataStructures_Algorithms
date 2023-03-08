 let a =[1,3]
 let b = [9,9]
 let obj = {
     n:4,
     b:6
 }

 obj[a] = 4444  //  ① 引用类型a当做key存储进obj时 会被自动toSring
 console.log(a in obj) // true   
 console.log('a' in obj) // false 
 // ② 这说明 a in obj中的a 在参与 in 运算前先toSring了 ; in 运算符需要字符串类型

 console.log("[9,9]" in obj) // false
 console.log('b' in obj) // true 
 // ③ 这说明在{b:xxx}这个b表示字符串 (相当于obj.b=xxx) !! ; obj[b]=xxx (也相当于{[b]:xxx}) 这样赋值b才表示变量,但是变量会被toString()


 // ④ 这说明了你以什么方式放进去,就要以什么方式访问
console.log(obj.a) // undefined   此时a是字符串
console.log(obj.b) // 6

console.log(obj[a]) // 4444
console.log(obj[b]) // undefined   此时b是变量toString()


console.log(Object.keys(obj)) //  ['n', 'b', '1,3']
console.log("------------------------------------------Map的好处---------------------------------------------------------------------------")

// ① map 可以解决object的key不能是引用类型的问题
let map = new Map()

map.set(a,44)
map.set(b,55)

for(let i of map){
    console.log(i)
}
//  [Array(2), 44]  打印的是[key , value]的格式 , 我们可以看到key位置上是数组对象并没有被toString
//  [Array(2), 55]
console.log(map.get(a)) // 44  确实可以引用类型存储加读取

// 注意：引用类型如果你不用第三方变量接收,那么你存进去后没办法通过get()读取
map.set([1,2,3])
console.log(map.get([1,2,3])) // undefined  此时[1,2,3]已经不是上面那个[1,2,3]了..........


// map 可以使用forEach ; Object不行
const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"],
  ]);
  
  m.forEach((value, key, map) => {
    console.log(key, value, map);
  });
  // key1 val1 Map(3) { 'key1' => 'val1', 'key2' => 'val2', 'key3' => 'val3' }
// key2 val2 Map(3) { 'key1' => 'val1', 'key2' => 'val2', 'key3' => 'val3' }
// key3 val3 Map(3) { 'key1' => 'val1', 'key2' => 'val2', 'key3' => 'val3' }



console.log("------------------------------------------WeakMap的好处------------------------------------------------------------------------------")
// const key = {arr:'demo'}
// const map2 = new Map()
// map.set(key, new Array(1000000).fill(0).map((item, index) => index))


let key2 = {arr:'demo'}
const wm = new WeakMap()
wm.set(key2,new Array(1000000).fill(0).map((item, index) => index))

key2.arr1 = 'demo2'  // 此时key2的地址值没有被改变 , 那个大数组的的内存没有被释放
key2 = {...key2}   // 此时key2的地址值改变,那个大数组自动被释放
// 如果用的是map 即使key2的地址值改变了 , 那个大数组还是不会被释放 , 这就是强引用关系

console.log(wm.key2) //undefined key是无法枚举的


/*
①键只能是对象
②WeakMap 的键名(key)所引用的对象是弱引用,一旦key引用值被修改就会立马释放这个空间
如果你用的是Map的话,即使你在外部把key = null , key的原空间还是会被锁在Map内不被释放,需要map.delete(key)才释放
所以用WeakMap 以DOM作为key值时 ,只要DOM结点在外部被移除时就会自动释放空间
③因为是弱引用，所以它的key是无法枚举的，看他的方法就知道，只有has、set、get、delete
weakmap.set(this , 构造实参) 此时只能通过 weakmap.get() 访问 ; weakmap.set() 设置
这只是ES6多种实现私有化的方式种的一种
*/


