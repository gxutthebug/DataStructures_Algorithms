/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./linklist/LinkedList.js":
/*!********************************!*\
  !*** ./linklist/LinkedList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkedList": () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _util_defaultEquals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/defaultEquals */ "./util/defaultEquals.js");
/* harmony import */ var _linked_list_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked-list-nodes */ "./linklist/linked-list-nodes.js");



class LinkedList {

    constructor(equalsFn = _util_defaultEquals__WEBPACK_IMPORTED_MODULE_0__.defaultEquals) { // ES6的默认参数
        this.count = 0  
        this.head = undefined  // 链表的结构容器就是一个头指针 , 用null也可以
        this.equalsFn = equalsFn
    }
   
    //  三个判断:
    //        ①当操作需要传入索引时,首先判断索引是否越界(index >= 0 && index < index < this.count)
    //        ② 链表是否为空 head === null   count === 0  (index < count 说明count不为0) ;链表为空直接结束操作(除了addion)
    //           ③ 若有元素：是否处理head结点;处理head结点时考虑是否单元素的差异(能处理非结点隐式说明了链表非单元素)
   
      
     // 两种遍历: ①while遍历 ②索引遍历

     //  简写优化： 找逻辑重复
    push(element) {
        const node = new _linked_list_nodes__WEBPACK_IMPORTED_MODULE_1__.Node(element) // JS的class用法跟构造函数一样
        let current
        if(this.head == null) {  // 这里改成用=== 就不等了
            this.head = node 
        } else {
            current =  this.head // current指向头,准备开始用current遍历到末节点
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    
    
    removeAt (index) {
        if (index >= 0 && index < this.count) { // index < this.count除了限制越界外 
            // 还限制了链表本身为空的情况 , 因为链表空了的话count ====0 , index能小于count说明count不能是0
            let current = this.head
          
            if(index===0) { // 删除首元素
                if (this.count == 1 ){
                    this.head = null
                }else {
                    this.head = this.head.next
                }
                // return head.element // 多余
                // 40-44 可合并为 this.head = current.next 
            }else{
                let previous // 链表删除的本质是'跨过',既然要跨过，找到index本身还不够,还要记录index前一个结点 

                for (let i = 0 ; i < index ; i++) {
                    previous = current
                    current = current.next
                }
                   
                previous.next = current.next
            }
            this.count--
            return current.element // 返回删除的值

        }
        return undefined // 越界返回undefind,空链表返回undefind
    }

    getElementAt (index) {

        if(index >= 0 && index <this.count) { 
            let current = this.head
                for(let i = 0 ; i<index ; i++){  
                    current = current.next
                return current
            }
        }
        return undefined
    }

    // 重写removeAt
    newremoveAt (index) {
        if (index >= 0 && index < this.count) { // 已经排除count==0了
            let current = this.head
          
            if(index===0) { // 
                if (this.count == 1 ){
                    this.head = null
                }else {
                    this.head = this.head.next
                }
                // return head.element // 多余
                // 40-44 可合并为 this.head = current.next 
            }else{
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
                
            }
            this.count--
            return current.element // 返回删除的值

        }
        return undefined // 越界返回undefind,空链表返回undefind
    }
  
    toString (){
        if (this.head == null) {
            return undefined
        }
        let current = this.head
        let objString = ``  // 用一个空字符串作为累积容器
        for(let i =0 ;i < this.count ; i++){
            objString = `${objString} ${current.element}` // 模版字符串可以实现字符串自增
            current = current.next
        }

        return objString
    }

    insert(element , index) {

        if(index === 0 ){  // 头部操作
          let old_head = this.head
          let node = new _linked_list_nodes__WEBPACK_IMPORTED_MODULE_1__.Node(element) 
          this.head = node
          this.head.next = old_head

          return true  
        }else if(index > 0 && index <=this.count) {  
            if(index === this.count){   // 尾部操作
                let node = new _linked_list_nodes__WEBPACK_IMPORTED_MODULE_1__.Node(element) 
                let tail = this.getElementAt(this.count-1)
                tail.next = node
            }else{   // 中间段操作
                   let node = new _linked_list_nodes__WEBPACK_IMPORTED_MODULE_1__.Node(element) 
                   let index_node = this.getElementAt(index)
                   let previous_node = this.getElementAt(index-1)
                   previous_node.next = node
                   node.next = index_node
            }
                 
          return true  
        }else{
            return false  // 链表为空
        }
    }

}




/***/ }),

/***/ "./linklist/linked-list-nodes.js":
/*!***************************************!*\
  !*** ./linklist/linked-list-nodes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
class Node {
 
    constructor (element) {
        this.element = element
        this.next = undefined
    }

}

/***/ }),

/***/ "./util/defaultEquals.js":
/*!*******************************!*\
  !*** ./util/defaultEquals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultEquals": () => (/* binding */ defaultEquals)
/* harmony export */ });
function defaultEquals (a, b) {
    return a===b
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linklist_LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../linklist/LinkedList */ "./linklist/LinkedList.js");



let aa = new _linklist_LinkedList__WEBPACK_IMPORTED_MODULE_0__.LinkedList()
aa.push(10)
aa.insert(20,1)
aa.insert(30,2)

console.log(aa.toString())

})();

/******/ })()
;
//# sourceMappingURL=main.js.map