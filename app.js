const app = {
    init: function(formSelector){
        document.querySelector(formSelector)
        .addEventListener("submit", this.handleSubmit)
    },

    handleSubmit: function(ev){
        ev.prevenDefault()
        const f= ev.target
        console.log(f.flickName.value)
    },
}



app.init()