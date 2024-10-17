




const loadlike = async (id) => {
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayshowpic(data.petData);
}

const displayshowpic = (petdata) => {


    const showpic = document.getElementById('showPic');
    const div = document.createElement('div')
    div.classList.add("p-3")
    div.innerHTML = `
        <img class=" rounded-lg" src=${petdata.image}  />
        `
    showpic.append(div)

}



const displaydetails = (petdata) => {

    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <img src=${petdata.image}  />
        <h2 class="card-title text-2xl font-bold text-[#131313]">${petdata.pet_name}</h2>
        <p class="text-xl text-[#131313B3]">breed : ${petdata.breed}</p>
        <p class="text-xl text-[#131313B3]">date_of_birth : ${petdata.date_of_birth}</p>
        <p class="text-xl text-[#131313B3]">Gender : ${petdata.gender}</p>
        <p class="text-xl text-[#131313B3]"> price : ${petdata.price}</p>
        <p class="text-xl text-[#131313B3]"> Vaccinated status : ${petdata.vaccinated_status}</p>
        <p class="text-2xl font-semibold text-[#131313B3] py-5">Details Information</p>
        <p class="text-xl text-[#131313B3]">${petdata.pet_details}</p>
        <div class="modal-action">
                    <form method="dialog">
                        
                        <button class="btn active px-7 ">Close</button>
                    </form>
                </div>
    
    `
    document.getElementById('modal').showModal()
}

const removebtnactive = () => {
    const buttonremove = document.getElementsByClassName("btn-remove");
    for (let btn of buttonremove) {
        btn.classList.remove("active")
    }

}
const displayCard = (pets) => {
    const cardcontainer = document.getElementById('cards')
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
                 <p class="text-xl text-[#131313B3]">breed : ${pet.breed}</p>
                 <p class="text-xl text-[#131313B3]">date_of_birth : ${pet.date_of_birth}</p>
                 <p class="text-xl text-[#131313B3]">Gender : ${pet.gender}</p>
                 <p class="text-xl text-[#131313B3]"> price : ${pet.price}</p>
                <div class="card-actions">
                    <button onclick="loadlike('${pet.petId}')" class=" btn border-solid border-2 border-[#0E7A8126] py-2 rounded-lg"><img src="https://img.icons8.com/?size=24&id=82788&format=png" alt=""></button>
                    <button onclick="loadAdopt('${pet.petId}')" id="dis" class=" btn border-solid border-2 border-[#0E7A8126] py-2 rounded-lg">Adopt</button>
                    <button onclick="loaddetails('${pet.petId}')" class=" btn border-solid border-2 border-[#0E7A8126] py-2 rounded-lg">Details</button>
                </div>
            </div>`

        cardcontainer.append(card)

    });
}


const displaycategories = (data) => {
    const categoryContainer = document.getElementById("category")
    data.forEach(item => {
        const buttoncontainer = document.createElement("div");
        buttoncontainer.innerHTML = `
        <button id="btn-${item.category}" onclick="loadcategorycard('${item.category}')" class="btn  text-2xl gap-6 px-7 btn-remove "><img class="w-8" src=${item.category_icon} alt=""> ${item.category}</button>
        `
        categoryContainer.append(buttoncontainer)
    });
}

loadcategories();
loadCard()