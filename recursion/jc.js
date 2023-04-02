function yfm (n) {
     if (n==1) {
        return 1
     }
    return n*yfm(n-1)
}
console.log(yfm(5))