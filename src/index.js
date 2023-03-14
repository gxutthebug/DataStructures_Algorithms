import {LinkedList} from '../linklist/LinkedList'
import { my_set } from '../set/set'
// import "./object_function"
// import {map } from "../map/map"
// import  "../Algoritjms/middle"
// import "../mapANDobject/test"
// import "../setANDarr/test"


// let aa = new LinkedList()
// aa.push(10)
// aa.insert(20,1)
// aa.insert(30,2)
// aa.insert(50,1)

// aa.newremoveAt(3)

// console.log(aa.toString())

// aa.newremoveAt(2)
// console.log(aa.toString())

// aa.newremoveAt(0)
// console.log(aa.toString())

// console.log(aa.indexOf(20))

console.log('-------------------------------------------------------------')
// let aa = new my_set()
// aa.add("a")
// aa.add("b")
// aa.add("c")
// aa.add("d")

// console.log(aa.values())
// aa.delete("b")
// console.log(aa.values())
// console.log(aa.size())
// console.log(aa.sizeLegacy())
// console.log(aa.valuesLegacy())

// let bb = new my_set()
// bb.add("c")
// bb.add("d")
// bb.add("e")
// bb.add("f")

// console.log(aa.union(bb))
// console.log(aa.unionLegacy(bb))


// console.log(aa.intersection(bb))
// console.log(aa.intersection_faster(bb))

// console.log(aa.inSubsetof(bb))
console.log('-------------------------------------------------------------')


   
// let aa = [1,2]
// let bb = []
// bb.push(aa)
// console.log(bb)
// bb.push([3,4])
// aa[0]= 5
// aa[1]=6
// bb.push(aa)
// console.log(bb)
// bb.push(7,8)
// console.log(bb)


console.log('-------------------------------------------------------------')

var removeElement = function(nums, val) {
     
    // let newarr = nums.filter( item =>{
    //     return  item != val
    //  })
      for(let i of nums){
          if(i===val){
              nums.remove(i)
          }
      }

    return news

};

console.log(removeElement([0,1,2,2,3,0,4,2],2))
