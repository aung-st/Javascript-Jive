// menu items
const menu = [
    {
        id: 1,
        title: "steak",
        category: "mains",
        price: 15,
        img: "./images/steak.png",
        desc: "For medium rare there is another restaurant next door"
    },
    {
        id: 2,
        title: "eggs",
        category: "mains",
        price: 15,
        img: "./images/eggs.png",
        desc: "eggs without a single crisp"
    },
    {
        id: 3,
        title: "chips",
        category: "sides",
        price: 15,
        img: "./images/chips.png",
        desc: "Widely spread chips. A classic stick meal"
    },
    {
        id: 4,
        title: "pancakes",
        category: "dessert",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    },
    {
        id: 5,
        title: "choco shake",
        category: "drinks",
        price: 15,
        img: "./images/chocoshake.png",
        desc: "An extremely sweet drink with a deceptively meaty appearance"
    },
    {
        id: 6,
        title: "special sip",
        category: "drinks",
        price: 15,
        img: "./images/specialsip.png",
        desc: "Whats in it? Even we don't know!"
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
                        <h4 class="price">£${item.price}</h4>
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