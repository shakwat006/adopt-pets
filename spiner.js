let storepetdata =[]

const spiner= (show)=>{
    const loadspiner= document.getElementById('spiner')
    if(show){
        loadspiner.classList.remove('hidden')
        document.getElementById('all-pets').innerHTML=""
    }else{
        loadspiner.classList.add('hidden')
    }

}

const removebtn =()=>{
    const allremovedbtn =document.getElementsByClassName('btn-remove')
    for(btn of allremovedbtn){
        btn.classList.remove(
            'border-2'
            ,'rounded-full'
            ,'border-teal-800'
            ,'bg-emerald-100'
        )
    }
}

const addbtn= (category)=>{
    const addedbtn=document.getElementById(`btn-${category}`)
    addedbtn.classList.add(
        'border-2'
        ,'rounded-full'
        ,'border-teal-800'
        ,'bg-emerald-100'
    )
}

const like = (img) =>{
    const likepic= document.getElementById('showpic')
    const div = document.createElement('div')
        div.classList.add("p-3")
        div.innerHTML = `
            <img class=" rounded-lg" src=${img} />
            `
        likepic.append(div)
}

const sort=()=>{
    const sortedata =storepetdata.sort((a,b)=>b.price -a.price)
    spiner(true)
    setTimeout(()=>{
        spiner(false)
      displaypets(sortedata)  
    },500)

}