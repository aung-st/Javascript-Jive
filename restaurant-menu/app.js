// menu items
const menu = [
    {
        id: 1,
        title: "pancakes",
        category: "breakfast",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    },
    {
        id: 2,
        title: "pancakes",
        category: "sweet",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    },
    {
        id: 3,
        title: "pancakes",
        category: "savoury",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    },
    {
        id: 4,
        title: "pancakes",
        category: "drinks",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    },
    {
        id: 5,
        title: "pancakes",
        category: "breakfast",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    },
    {
        id: 6,
        title: "pancakes",
        category: "breakfast",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    }
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems){

    let displayMenu = menuItems.map(function (item){
        
        return `<article class="menu-item">
                <img src=${item.img} class="photo"
                alt=${item.title}/>
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class=$${item.price}</h4>
                    </header>
                    <p class="item-test">
                        ${item.desc}
                    </p>
                </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons(){
    const categories = menu.reduce(
        function (values,item){
            if (!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
            },
        ["all"]
);
const categoryBtns = categories.map(
    function(category){
        return `<button type="button" class="filter-btn"
        data-id=${category}>
            ${category}
        </button>`;
})
.join("");

btnContainer.innerHTML = categoryBtns;
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn){
    btn.addEventListener("click", function(event){

        const category = event.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem){
            if (menuItem.category === category){
                console.log(menuItem.category);
                return menuItem;
                }
            });
            
        if (category === "all"){
            console.log(category);
            displayMenuItems(menu);
        } else{
            displayMenuItems(menuCategory);
        }
    });
});
}