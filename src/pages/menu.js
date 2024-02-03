// Get root div
let content = document.querySelector("#content");

// Text content
const h2 = "Our Menu";

const yakisobaTitle = "Yakisoba";
const yakisobaDesc = `Our feature meal. Enjoy our delicious 
    wheat-flour noodes stir-fried with vetetables and sliced pork and 
    flavored with the finest yakisoba sauce.`;

const hiroshimaYakiTitle = "Hiroshima-yaki";
const hiroshimaYakiDesc = `Try our Hiroshima-style okonomiyaki, a 
    traditional pancake-like dish make with fresh vegetables and 
    yakisoba noodles.`;

const sobaTitle = "Soba";
const sobaDesc = `Refreshing bucketwheat noodles served chilled.`;

const makeMenuPage = () => {
    // Menu container
    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // Yakisoba
    let yakisobaDiv = document.createElement("div");
    yakisobaDiv.classList.add("menu-item");
    let yakisoba_h3 =document.createElement("h3");
    yakisoba_h3.textContent = yakisobaTitle;
    let yakisoba_p = document.createElement("p");
    yakisoba_p.textContent = yakisobaDesc;
    yakisobaDiv.appendChild(yakisoba_h3);
    yakisobaDiv.appendChild(yakisoba_p);

    // Hiroshima-yaki
    let hiroshimayakiDiv = document.createElement("div");
    hiroshimayakiDiv.classList.add("menu-item");
    let hiroshimayaki_h3 =document.createElement("h3");
    hiroshimayaki_h3.textContent = hiroshimaYakiTitle;
    let hiroshimayaki_p = document.createElement("p");
    hiroshimayaki_p.textContent = hiroshimaYakiDesc;
    hiroshimayakiDiv.appendChild(hiroshimayaki_h3);
    hiroshimayakiDiv.appendChild(hiroshimayaki_p);

    // Soba
    let sobaDiv = document.createElement("div");
    sobaDiv.classList.add("menu-item");
    let soba_h3 =document.createElement("h3");
    soba_h3.textContent = sobaTitle;
    let soba_p = document.createElement("p");
    soba_p.textContent = sobaDesc;
    sobaDiv.appendChild(soba_h3);
    sobaDiv.appendChild(soba_p);

    menuContainer.appendChild(yakisobaDiv);
    menuContainer.appendChild(hiroshimayakiDiv);
    menuContainer.appendChild(sobaDiv);

    content.appendChild(menuContainer);
}

export default makeMenuPage;

