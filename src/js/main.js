
let inp_rezba = document.querySelector('.inp_rezba')
let inp_length = document.querySelector('.inp_length')
let liste = document.querySelector('.liste')
let res = document.querySelector('.res')
let form = document.querySelector('.form')

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
    let num1 = Number(inp_rezba.value);
    let num2 = Number(inp_length.value)
    let m = 'M'
    let name = m.concat(num1).concat('x').concat(num2)
    let arr_table = {
        'name': name,
        'thread': num1,
        'length': num2,
    }
    // if (num2  1) {
    //     console.log('введите длину');
    // } else {
    //     res.innerHTML = name
    // }
    if (num1 > 0 && num2 > 0) {
        res.innerHTML = name
        btn_save.classList.remove('hidden')
        return arr_table
    }
}

function save(event) {
    let target = event.target
    if (target) {
        liste.classList.add('hidden')
        form.classList.remove('hidden')

        let name_title = document.querySelector('.name_title')
        let length = document.querySelector('.length')
        let thread = document.querySelector('.thread')
        let standart = document.querySelector('.standart')
        let strength = document.querySelector('.strength')
        let steel = document.querySelector('.steel')
        let coating = document.querySelector('.coating')
        let standart_select = selectChangeOne()
        let coating_select = selectChangeTwo()
        let strength_select = selectChangeFour()
        let steel_select = selectChangeThree()
        if (standart_select === 'standart'){
            standart.innerHTML = 'неопределено'
        }
        let data = num_one()
        if (data == undefined) {
            data.name = 'нет названия'
            data.length = '0 mm'
            data.thread = '0 mm'
        }
        name_title.innerHTML = data.name
        thread.innerHTML = data.thread + 'mm'
        length.innerHTML = data.length + 'mm'
        standart.innerHTML = standart_select
        strength.innerHTML = strength_select
        steel.innerHTML = steel_select
        coating.innerHTML = coating_select
    }
}

let btn_save = document.querySelector('.btn_save')
liste.addEventListener('input', num_one)
btn_save.addEventListener('click', save)


