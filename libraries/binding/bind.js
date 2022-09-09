import './autoBind.js'
import './manualBind.js'

class Bind {
  init(state = null) {
    if (state == null) new AutoBind().init();
    const manual = new ManualBind(state);
    manual.init();
  }
}

module.exports = Bind;