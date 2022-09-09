import AutoBind from './autoBind.js'
import ManualBind from './manualBind.js'

class Bind {
  init(state = null) {
    if (state == null) new AutoBind().init();
    const manual = new ManualBind(state);
    manual.bindStateWithNodes();
  }
}

module.exports = Bind;