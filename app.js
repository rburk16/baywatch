const app = {
  init: function(selectors) {
    this.flicks = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document.querySelector(selectors.formSelector)
      .addEventListener('submit', this.handleSubmit.bind(this))
  },

  renderListItem: function(flick) {
    const item = document.createElement('li')
    item.textContent = flick.name

    const favButton = document.createElement('button')
    favButton.setAttribute('class','button')
    favButton.style.position = 'absolute'
    favButton.style.right = '300px'
    favButton.style.height = '25px'
    favButton.textContent = 'Fav'

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class','button')
    deleteButton.style.position = 'absolute'
    deleteButton.style.right = '260px'
    deleteButton.style.height = '25px'
    deleteButton.style.backgroundColor = 'red'
    deleteButton.textContent = 'X'

    favButton.addEventListener('click',this.handleFav.bind(this))
    deleteButton.addEventListener('click',this.handleDelete.bind(this))

    item.appendChild(deleteButton)
    item.appendChild(favButton)

    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)

    this.flicks.push(flick)
    
    this.max ++
  },
  
  handleFav: function(ev) {
    const currentItem = ev.target.parentElement
    currentItem.style.backgroundColor = 'gray'
  },

  handleDelete: function(ev) {
    const j = ev.target.parentElement
    j.remove(j)
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})