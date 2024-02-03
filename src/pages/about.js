// Get root div
let content = document.querySelector("#content");

// Text content

const title = "About Us";

const para1 = `Founded on the belief that exceptional dining experiences 
    are crafted from dedication and authenticity, our philosophy 
    centers on delivering the true essence of Japanese cuisine to our guests.`;

const para2 = `Established in 1900, our journey began with a vision to 
    create a haven for food enthusiasts seeking an immersive encounter 
    with the flavors of Japan. Each dish reflects our commitment to 
    using premium ingredients and traditional techniques, ensuring an 
    unparalleled dining adventure.`;

const para3 = `As stewards of Japanese culinary heritage, we take pride 
    in bridging the gap between tradition and innovation. Our chefs, 
    steeped in expertise, curate a menu that pays homage to classic 
    yakisoba while embracing contemporary culinary trends.`;

const makeAboutPage = () => {
        // Container
        let innerContainer = document.createElement("div");
        innerContainer.classList.add("inner-container");
    
        // Img
        let img = document.createElement("img");
        img.src = "../src/img/yakisoba_2.jpeg";
    
        // Info
        let info = document.createElement("info");
        let h2 = document.createElement("h2");
        h2.textContent = title;
        let p1 = document.createElement("p");
        p1.textContent = para1;
        let p2 = document.createElement("p");
        p2.textContent = para2;
        let p3 = document.createElement("p");
        p3.textContent = para3;
    
        // Append elements
        content.appendChild(innerContainer);
        innerContainer.appendChild(img);
        info.appendChild(h2);
        info.appendChild(p1);
        info.appendChild(p2);
        info.appendChild(p3);
        innerContainer.appendChild(info);
}

export default makeAboutPage;