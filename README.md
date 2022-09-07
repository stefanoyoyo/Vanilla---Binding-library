
# FUNZIONAMENTO LIBRERIA 
Questa libreria consente di mappare gli elementi sulla DOM avere un certo id
con i campi di oggetto state (ispirazione a React) aventi nome corrispondente.

# ESEMPIO: il paragrafo sarà in binding con la variabile state.greet.
#          visualizzerà dunque 'Hello'. 
           Ogni cambiamento a tale variabile sarà immediatamente 
           notificato dal paragrafo.   
(1) <p id="greet"></p>
(2) const state = {
      greet: 'Hello'
    };