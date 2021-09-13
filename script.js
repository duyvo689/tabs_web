const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab__name')
const panes = $$('.tab__pane')

const tabActive = $('.tab__name.active')
const line = $('.tab .line')

console.log(line)

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach((tab, index)=>{
    const pane = panes[index]

    tab.onclick = function () {
        $('.tab__name.active').classList.remove('active')
        $('.tab__pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.with = this.offsetWidth + 'px'

        this.classList.add('active')
        pane.classList.add('active')

    }
})