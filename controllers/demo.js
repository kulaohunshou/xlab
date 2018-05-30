
// module.exports = ctx => { hgggg
//   ctx.state.data = {
//     msg1: 'Hello World suzhenxiang you are the best belive you anyway'
//   }
// }
const { mysql } = require('../qcloud')
const debug = require('debug')('koa-weapp-demo')
module.exports = async (ctx, next) => {

  if (ctx.state.$wxInfo.loginState){
    const res = await mysql('aihao').select('*').where({ id:2 });
    ctx.state.data = res;
  } else {
    ctx.state.code = -1
  }
}
