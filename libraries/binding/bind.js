import AutoBind from './autoBind.js'
import ManualBind from './manualBind.js'
import CommonBind from './common.js'

class Bind {

  commonBind = new CommonBind();

  init(state = null) {
    if (state == null) new AutoBind(this.commonBind).init();
    const manual = new ManualBind(this.commonBind);
    manual.bindStateWithNodes(state);
  }
  
}

module.exports = Bind;