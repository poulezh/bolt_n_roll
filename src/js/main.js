let reload = document.querySelector('.btn_reload')
let inp_thread = document.querySelector('.inp_thread')
let inp_length = document.querySelector('.inp_length')
let liste = document.querySelector('.liste')
let res = document.querySelector('.res')
let form = document.querySelector('.form')
let btn_save = document.querySelector('.btn_save')

reload.addEventListener('click', ()=>{
    location.reload()
})

function selectChangeOne() {
    let select = document.querySelector('.select_one').value   
    return select
}
function selectChangeTwo() {
    let select = document.querySelector('.select_two').value
    return select
}
function selectChangeThree() {
    let select = document.querySelector('.select_three').value
    return select
}
function selectChangeFour() {
    let select = document.querySelector('.four').value
    return select
}

function num_one() {
    let num1 = Number(inp_thread.value);
    let num2 = Number(inp_length.value)
    let m = 'M'
    let name = m.concat(num1).concat('x').concat(num2)
    let arr_table = {
        'name': name,
        'thread': num1,
        'length': num2,
    }
    if (num1 > 0 && num2 > 0) {
        res.innerHTML = name
        // reload.classList.add('hidden')
        btn_save.classList.remove('hidden')
        return arr_table
    }
}

function save(event) {
    let target = event.target
    if (target) {
        liste.classList.add('hidden')
        form.classList.remove('hidden')

        let select = {
            'standart': selectChangeOne(),
            'coating': selectChangeTwo(),
            'steel': selectChangeThree(),
            'strength': selectChangeFour()
        }
        let data = num_one()
        if (data == undefined) {
            data.name = 'нет названия'
            data.length = '0 mm'
            data.thread = '0 mm'
        }
        document.querySelector('.name_title').innerHTML = data.name
        document.querySelector('.thread').innerHTML = data.thread + 'mm'
        document.querySelector('.length').innerHTML = data.length + 'mm'
        document.querySelector('.standart').innerHTML = select.standart
        document.querySelector('.strength').innerHTML = select.strength
        document.querySelector('.steel').innerHTML = select.steel
        document.querySelector('.coating').innerHTML = select.coating
    }
}


liste.addEventListener('input', num_one)
btn_save.addEventListener('click', save)


