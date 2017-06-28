const app = {
    init: function(selectors){
        this.flicks = [//add flick id and all to array]
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)

        document.querySelector(selectors.listSelector)
        .addEventListener('submit', this.handleSubmit.bind(this))
    },

    renderListItem: function(flick) {
        const item = document.createElement('li')
        item.textContent = flick.name
        return item
    },


    handleSubmit: function(ev){
        ev.prevenDefault()
        const f= ev.target
        const flick = {
            id: this.max + 1,
            name: f.flickName.value,
        }

        const listItem = this.renderListItem(flick)
        this.list.appendChild(listItem)

        this.max ++

    },
}

app.init({
    formSelector: 'form#flick-form',
    listSelector: '#flick-list',
}
)