// 用于测试，condition不为true 则打印message
export const ensure = function(condition, message) {
  if(!condition) {
    console.log(message + '：测试失败')
  } else {
    console.log(message + '：测试通过')
  }
}