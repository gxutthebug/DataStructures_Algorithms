import { defaultEquals } from "../util/defaultEquals"
import { Node } from "./linked-list-nodes"

export class LinkedListpro {

    constructor(equalsFn = defaultEquals) { // ES6的默认参数
        this.count = 0  
        this.head = new Node(444)  // 哨兵头结点 无所谓存的啥
        this.equalsFn = equalsFn
    }
   

    getlastnode() {  // 不用判断head为null的情况了
        let cur 

        for(cur = this.head.next ; cur !=null ; cur = cur.next) {}

        return cur
    }

    push(element) {  // 不用判断head为null的情况了
        const node = new Node(element)
        let lastnode = this.getlastnode()

        lastnode.next = node
    }
    

    getElementAt (index) {
        let i = -1  // 把 0 改成 -1
        // 这里偷懒就不验证 index 是否越界啦 ;详细看上面
        let cur 
        for(cur = this.head ; cur !=null ; cur = cur.next , i++){
            if (i === index) {
               return cur
            }
        }
        return null
    }

    insert(element , index) { 

        // if(index == 0 ) {
        //   this.addfrist(element)  //  不用特殊处理index为0 的情况了 ，因为index为0时 getElementAt()能成功处理了(返回哨兵)
        //   return
        // }

        let prev = this.getElementAt(index-1)

        if(prev == null){  // 这个是防止用户瞎几把输入了一个index  -999 999 这种
           return "找不到"
        }
        
        let node = new Node(element)
        node.next = prev.next
        prev.next  = node
   }

   
   remove(index) { 

    //  不用特殊处理index为0 的情况了 ，因为index为0时 getElementAt()能成功处理了(返回哨兵)
 
    let prev = this.getElementAt(index-1)

    if(prev == null){  // 这个是防止用户瞎几把输入了一个index  -999 999 这种
        return "找不到"
     }
     
    let remove = prev.next

    if(remove  == null){  // 这个是防止用户瞎几把输入了一个index  -999 999 这种
        return "找不到"
     }

     prev.next = remove.next
}
  
}