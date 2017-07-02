const app = {
  init: function(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)

    document.querySelector(selectors.formSelector)
      .addEventListener('submit',this.handleSubmit.bind(this))
  },

  favFlick: function(flick,ev) {
    const listItem = ev.target.closest('.flick')
    flick.fav = listItem.classList.toggle('fav')
  },

  removeFlick: function(flick,ev) {
    // remove from the DOM
    const listItem = ev.target.closest('.flick')
    listItem.remove()

    // remove from the array
    const i = this.flicks.indexOf(flick)
    this.flicks.splice(i, 1)
  },

  moveUp: function(flick,ev) {
    const listItem = ev.target.closest('flick')
  },

  moveDown: function(flick,ev) {
    const listItem = ev.target.closest('flick')

  },

  renderListItem: function(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item.querySelector('.flick-name').textContent = flick.name

    item.querySelector('button.delete')
      .addEventListener('click', this.removeFlick.bind(this, flick))

    item.querySelector('button.fav')
      .addEventListener('click', this.favFlick.bind(this, flick))
    
    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
      fav: false,
    }

    this.flicks.unshift(flick)

    const listItem = this.renderListItem(flick)
    this.list.insertBefore(listItem, this.list.firstElementChild)

    this.max ++
    f.reset()
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template',
})


/*
MOVE DOWN
nextSibling > insertBefore
*/