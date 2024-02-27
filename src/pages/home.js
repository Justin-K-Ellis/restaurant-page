// Get root div
let content = document.querySelector("#content");

// Text content
const heroText = "The Best Yakisoba in Town";
const para1 = `Savor authentic flavors at Yakisoba Haven. Indulge in Japanese 
    culinary delights, where every dish is a delicious masterpiece of 
    tradition.`;
const para2 = `Embark on a culinary journey at Yakisoba Haven, where 
    Japanese tradition meets gastronomic delight. Relish the artistry of 
    authentic flavors meticulously crafted into each yakisoba dish. Our 
    restaurant is a celebration of culinary mastery, inviting you to savor 
    the rich tapestry of Japanese cuisine in every flavorful bite.`;
const para3 = `Nestled in a vibrant locale, Yakisoba Haven boasts a 
    warm, contemporary ambiance. A harmonious blend of modern design 
    and Japanese aesthetics welcomes you. Located at the heart of 
    Tokyo, our restaurant offers a serene escape, making it the 
    perfect destination for a delightful dining experience.`;
const address = `4-chōme-2-8 Shibakōen, Minato City, Tokyo 105-0011`;


const makeHomePage = () => {
    // Container
    let innerContainer = document.createElement("div");
    innerContainer.classList.add("inner-container");

    // Img
    let img = document.createElement("img");
    img.src = "../src/img/yakisoba_1.jpeg";
    img.setAttribute("alt");
    img.alt.value = "A closeup of a plate of yakisoba.";

    // Info
    let info = document.createElement("info");
    let h1 = document.createElement("h1");
    h1.textContent = heroText;
    let p1 = document.createElement("p");
    p1.textContent = para1;
    let p2 = document.createElement("p");
    p2.textContent = para2;
    let p3 = document.createElement("p");
    p3.textContent = para3;

    // Append elements
    content.appendChild(innerContainer);
    innerContainer.appendChild(img);
    info.appendChild(h1);
    info.appendChild(p1);
    info.appendChild(p2);
    info.appendChild(p3);
    innerContainer.appendChild(info);
}

export default makeHomePage;