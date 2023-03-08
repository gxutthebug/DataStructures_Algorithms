/*Set()的用法就简单啦(没有Map这么花里胡哨),就是和数组相互转换去重 ,方便做一些集合运算*/
let a =[1,3]
let obj2 = {
    n:4
}
let setA = new Set()
setA.add(obj2)
setA.add(a)
setA.add("yfm")


console.log(setA) // Set(3) 一个集合对象

// Set其实有key 也有 value , 只不过都一样
console.log(setA.values()) // SetIterator {{…}, Array(2), 'yfm'}
console.log(setA.keys()) // SetIterator {{…}, Array(2), 'yfm'}

// 可以直接以引用类型查询
console.log(setA.has(obj2)) // true


// 可以forEach
setA.forEach(item =>{
    console.log(item)
})
// {n: 4}
//  [1, 3]
//  yfm

// 可以 for of
for(let i of setA){
    console.log(i)  // 打印结果跟上面一样
}

// 可以跟map 一样遍历迭代器 , [key,value] 结构接收 同时接收key value
for(let [key,value] of setA.entries()){
  console.log( [key,value] )
}
//  [{…}, {…}]
//  [Array(2), Array(2)]
//  ['yfm', 'yfm']