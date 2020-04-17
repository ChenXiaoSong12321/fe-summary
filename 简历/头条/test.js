
// 自我介绍

// 箭头函数 与 普通函数区别

// EventLoop 宏任务 微任务

// peerDependencies

// Vdom的好处

// HTTPS 对称加密还是非对称加密

// webpack loaders作用

// plugins 和 loaders区别

// requestAnimationFrame

// 单元测试

// webpack 插件

// 遇阻弥坚


const add = num => num  + 10
const multiply = num => num * 2
const foo = compose(multiply, add)
// foo(5) => 30 


function compose() {
  let fns = [].shift.call(arguments)
  debugger
  let rs

  return function (x) {
    fns.reduceRight((res,item)=>{
      rs = item(x)
    }, null)
    return rs
  }
}