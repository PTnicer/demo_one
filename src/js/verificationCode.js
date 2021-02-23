import random from './random'
function verificationCode(canvasName,codeList) {
  var canvas=$(canvasName)
  var width=canvas.width
  var height=canvas.height
  var ctx= canvas.getContext('2d')


  ctx.textBaseline = "middle"
  ctx.fillStyle = randomColor(180, 240)
  ctx.fillRect(0, 0,width, height); //清空画布

  //渲染验证码
  for(var i=0;i<codeList.length;i++){
      var x=1
      var y=1
      var edg= 1
  }
} 
export default verificationCode