const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'm1.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'm1.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: 'intel.png'
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]


let box = document.querySelector('.box')
for (let item of data) {
    let macbook = document.createElement('div')
    let first_box = document.createElement('div')
    let img_mac = document.createElement('img')
    let color_change = document.createElement('div')
    let mac_info = document.createElement('div')
    let mac_info_ct = document.createElement('div')
    let h1 = document.createElement('h1')
    let buy_button = document.createElement('button')
    let mac_name = document.createElement('h2')
    let info = document.createElement('div')
    let elem_box = document.createElement('div')
    let elem = document.createElement('div')
    let elem_img = document.createElement('img')
    let p = document.createElement('p')
    let display = document.createElement("div")
    let display_h1 = document.createElement("h1")
    let display_span = document.createElement("span")
    let cpu = document.createElement("div")
    let cpu_img = document.createElement("img")
    let cpu_span = document.createElement("span")
    let ram = document.createElement("div")
    let ram_img = document.createElement("img")
    let ram_span = document.createElement("span")
    let hhd = document.createElement("div")
    let hhd_h1 = document.createElement("h1")
    let hhd_span = document.createElement("span")
    let battery = document.createElement("div")
    let battery_img = document.createElement("img")
    let battery_span = document.createElement("span")
    let cam = document.createElement("div")
    let cam_img = document.createElement("img")
    let cam_span = document.createElement("span")
    let weight = document.createElement("div")
    let weight_h1 = document.createElement("h1")
    let weight_span = document.createElement("span")
    let touch = document.createElement("div")
    let touch_img = document.createElement("img")
    let touch_span = document.createElement("span")
    let price = document.createElement('p')

    price.classList.add('price')
    info.classList.add('info')
    elem_box.classList.add('elem_box')
    elem.classList.add('elem')
    elem_img.classList.add('elem_img')
    p.classList.add('p')
    macbook.classList.add('macbook')
    first_box.classList.add('first_box')
    img_mac.classList.add('img_mac')
    color_change.classList.add('color_change')
    
    mac_info.classList.add('mac_info')
    mac_info_ct.classList.add('mac_info_ct')
    h1.classList.add('h1')
    buy_button.classList.add('buy_button')
    mac_name.classList.add('mac_name')
    display.classList.add('display')
    cpu.classList.add('cpu')
    ram.classList.add('ram')
    hhd.classList.add('hhd')
    battery.classList.add('battery')
    cam.classList.add('cam')
    weight.classList.add('weight')
    touch.classList.add('touch')

    img_mac.src = `img/${item.img}`
    mac_name.innerHTML = item.title
    price.innerHTML = `from $${item.price}`
    item.battery_img = 'battery.png'
    item.specs.camera.img = 'video.png'
    item.specs.touch = 'touch.svg'
    buy_button.innerHTML = 'Buy'

    cpu_img.src = `img/${item.specs.chip.description}`
    ram_img.src = `img/${item.specs.ram.description}`
    battery_img.src = `img/${item.battery_img}`
    cam_img.src = `img/${item.specs.camera.img}`
    touch_img.src = `img/${item.specs.touch}`
    display_h1.innerHTML = item.specs.display.size
    display_span.innerHTML = item.specs.display.title

    cpu_span.innerHTML = item.specs.chip.title
    ram_span.innerHTML = item.specs.ram.title
    hhd_h1.innerHTML = item.specs.memory.size
    hhd_span.innerHTML = item.specs.memory.type
    battery_span.innerHTML = `Up to ${item.specs.battery} hours battery life3`
    cam_span.innerHTML = item.specs.camera.title
    weight_h1.innerHTML = item.specs.weight
    weight_span.innerHTML = 'Weight'
    touch_span.innerHTML = item.specs.other


    for (let colors of item.colors) {
        let color = document.createElement('div')
        color.classList.add('color')
        color.style.background = colors
        color_change.append(color)

  
    }


    box.append(macbook)
    macbook.append(first_box)
    first_box.prepend(img_mac,color_change,mac_name,price,buy_button,mac_info,elem_box)
    
    elem_box.append(display,cpu,hhd,battery,cam,weight,touch)
    
    display.append(display_h1,display_span)
    cpu.append(cpu_img,cpu_span)
    ram.append(ram_img,ram_span)
    hhd.append(hhd_h1,hhd_span)
    battery.append(battery_img,battery_span)
    cam.append(cam_img,cam_span)
    weight.append(weight_h1,weight_span)
    touch.append(touch_img,touch_span)


}
