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
        category: "breakfast",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    },
    {
        id: 3,
        title: "pancakes",
        category: "breakfast",
        price: 15,
        img: "./images/pancakes.png",
        desc: "For the stick figure with a sweet tooth"
    },
    {
        id: 4,
        title: "pancakes",
        category: "breakfast",
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

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
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