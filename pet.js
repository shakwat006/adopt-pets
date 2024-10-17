const loadcategorise = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await res.json()
    displaycategories(data.categories)

}

const loadallpets = async () => {
    spiner(true)
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json()
    setTimeout(() => {
        displaypets(data.pets)
        storepetdata=data.pets;
        spiner(false);

    }, 2000)

}

const loadpetcategory = async category => {
    removebtn();
    addbtn(category);
    spiner(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    const data = await res.json()

    setTimeout(() => {
        displaypets(data.data)
        storepetdata=data.data;
        spiner(false);

    }, 2000)

}

const displaycategories = (data) => {
    const categoryContainer = document.getElementById("pet-categories")
    data.forEach(category => {
        const buttoncontainer = document.createElement("div");
        buttoncontainer.innerHTML = `
        <button onclick="loadpetcategory('${category.category}')" id="btn-${category.category}" class="btn  text-2xl gap-6 px-7 btn-remove "><img class="w-8" src=${category.category_icon} alt=""> ${category.category}</button>
        `
        categoryContainer.append(buttoncontainer)
    });
}

const displaypets = (pets) => {
    const cardcontainer = document.getElementById('all-pets')
    cardcontainer.innerHTML = ""
    if (pets.length == 0) {
        cardcontainer.classList.remove("grid")
        cardcontainer.innerHTML = `
         <div class="w-7/12 mx-auto flex flex-col items-center">
            <img src="./img/error.webp" alt="">
            <h1 class="text-3xl text-[#131313] font-bold py-7">No Information Available</h1>
            <p class="text-xl text-[#131313B3] font-medium pb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
    `

        return;
    } else {
        cardcontainer.classList.add("grid")
    }
    pets.forEach(pet => {
        const card = document.createElement('div')
        card.classList = "card bg-base-100 border-solid border-2 border-[#1313131A]";
        card.innerHTML = `
             <figure class="px-10 pt-10">
                <img
                src=${pet.image}
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-left text-left">
                <h2 class="card-title text-2xl font-bold text-[#131313]">${pet.pet_name}</h2>
                 <p class="text-xl text-[#131313B3]">breed : ${pet.breed ? pet.breed : 'n/A'}</p>
                 <p class="text-xl text-[#131313B3]">date_of_birth : ${pet.date_of_birth ? pet.date_of_birth : 'N/a'}</p>
                 <p class="text-xl text-[#131313B3]">Gender : ${pet.gender ? pet.gender : 'N/A'}</p>
                 <p class="text-xl text-[#131313B3]"> price : ${pet.price ? '$' + pet.price : 'N/A'}</p>
                <div class="card-actions">
                    <button onclick="like('${pet.image}')" class=" btn border-solid border-2 border-[#0E7A8126] py-2 rounded-lg"><img src="https://img.icons8.com/?size=24&id=82788&format=png" alt=""></button>
                    <button onclick="adopted(this)" id="dis" class=" btn border-solid border-2 border-[#0E7A8126] py-2 rounded-lg">Adopt</button>
                    <button onclick="loaddetails('${pet.petId}')" class=" btn border-solid border-2 border-[#0E7A8126] py-2 rounded-lg">Details</button>
                </div>
            </div>`

        cardcontainer.append(card)

    });
}

const adopted = event =>{
    
    let count =3
    const countcontainer = document.getElementById('countdwon')
    countcontainer.innerText = count 
    my_modal_4.showModal()
    const interval=setInterval(()=>{
        count --
        countcontainer.innerText = count
        if(count<1){
            clearInterval(interval)
            my_modal_4.close() 
            event.textContent = 'adopted'
            event.disabled = true

        }
    },1000)
}

loadallpets()
loadcategorise()