import './style.css';
import Bind from './libraries/binding/bind.js'

class app {

    main(){
        const binding = new Bind();
        binding.init();
    }

}
module.export = app;

main();
