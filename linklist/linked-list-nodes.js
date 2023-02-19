export class Node {
    constructor (element) {
        this.element = element
        this.next = null
    }
}

export class DoublyNode extends Node {
    constructor (element , next ,prev) { 
        super(element , next)
        this.prev = prev // 双向列表结点新增的previous指针
    }
} 

// 子类继承父类后构造函数传参,传入的是子 父类参数的并集 , 只不过属于父类那部分得用super()赋值
//  子类(本质构造函数)的原型对象是空对象 , 但是这个空对象的__peoto__是父类(本质构造函数)的原型对象------->装着父类的所有方法