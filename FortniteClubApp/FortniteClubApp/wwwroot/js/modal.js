// Functions for modla managment
function Rick() {
    const modal = document.getElementById("modal"); //find element with id modals
    const modal_content = document.getElementById("modal-content"); //find element with id modal-content

    if (modal.classList.contains("display-none")) {
        modal.classList.remove("display-none");
        modal_content.innerHTML = `
        <img class="gif-image" src="gif/dance.gif" alt="Rick Roll">
        <div class="frame2"> <img class="c-img" src="img/rick.jpg" alt="Rick Roll"></div>
        <div class="frame"> <img class="c-img" src="img/rick.jpg" alt="Rick Roll"></div>
        `;
        var snd = new Audio("../sound/rick.mp3");
        snd.play();

    }
    else {
        modal.classList.add("display-none");
    }
}

function Choomah() {
    const modal = document.getElementById("modal"); //find element with id modals
    const modal_content = document.getElementById("modal-content"); //find element with id modal-content

    if (modal.classList.contains("display-none")) {
        modal.classList.remove("display-none");
        modal_content.innerHTML = ` <img class="gif-image" src="gif/choomah.gif" alt="Rick Roll">
         <div class="frame2"> <img class="c1-img" src="img/coke.jpg" alt="Rick Roll"></div>
         <div class="frame"> <img class="c1-img" src="img/coke.jpg" alt="Rick Roll"></div>
        `
        var snd = new Audio("../sound/choomah.mp3");
        snd.play();
    }
    else {
        modal.classList.add("display-none");
    }
}

function Sassy() {
    const modal = document.getElementById("modal"); //find element with id modals
    const modal_content = document.getElementById("modal-content"); //find element with id modal-content

    if (modal.classList.contains("display-none")) {
        modal.classList.remove("display-none");
        modal_content.innerHTML = `
        <img class="gif-image" src="gif/sassy.gif" alt="Rick Roll">
        <div class="frame2"> <img class="c1-img" src="img/kina.jpeg" alt="Rick Roll"></div>
        <div class="frame"> <img class="c1-img" src="img/kina.jpeg" alt="Rick Roll"></div>

        `;
        var snd = new Audio("../sound/sassy.mp3");
        snd.play();
    }
    else {
        modal.classList.add("display-none");
    }
}


function Cricket() {
    const modal = document.getElementById("modal"); //find element with id modals
    const modal_content = document.getElementById("modal-content"); //find element with id modal-content

    if (modal.classList.contains("display-none")) {
        modal.classList.remove("display-none");
        modal_content.innerHTML = `
        <img class="gif-image" src="gif/cricket.gif" alt="Rick Roll">
        <div class="frame2"> <img class="c-img" src="img/navdeep.jpg" alt="Rick Roll"></div>
        <div class="frame"> <img class="c-img" src="img/navdeep.jpg" alt="Rick Roll"></div>
        `;
        var snd = new Audio("../sound/cheering.mp3");
        snd.play();
    }
    else {
        modal.classList.add("display-none");
    }
}


function Donny() {
    const modal = document.getElementById("modal"); //find element with id modals
    const modal_content = document.getElementById("modal-content"); //find element with id modal-content

    if (modal.classList.contains("display-none")) {
        modal.classList.remove("display-none");
        modal_content.innerHTML = `
         <img class="gif-image" src="gif/donny.gif" alt="Rick Roll">
        <div class="frame"> <img class="c-img" src="img/caleb.png" alt="Rick Roll"></div>
        <div class="frame2"> <img class="c-img" src="img/caleb.png" alt="Rick Roll"></div>
        `
        var snd = new Audio("../sound/sassy.mp3");
        snd.play();
    }
    else {
        modal.classList.add("display-none");
    }
}


function Clarence() {
    const modal = document.getElementById("modal"); //find element with id modals
    const modal_content = document.getElementById("modal-content"); //find element with id modal-content

    if (modal.classList.contains("display-none")) {
        modal.classList.remove("display-none");
        modal_content.innerHTML = `<img class="gif-image" src="gif/clarence.gif" alt="Rick Roll">
        <div class="frame"> <img class="c-img" src="img/eminem.jpg" alt="Rick Roll"></div>
        <div class="frame2"> <img class="c-img" src="img/eminem.jpg" alt="Rick Roll"></div>
        `;
        var snd = new Audio("../sound/clarence.mp3");
        snd.play();
    }
    else {
        modal.classList.add("display-none");
    }
}


function VBucks() {
    const modal = document.getElementById("modal"); //find element with id modals
    const modal_content = document.getElementById("modal-content"); //find element with id modal-content

    if (modal.classList.contains("display-none")) {
        modal.classList.remove("display-none");
        modal_content.innerHTML = `
            <img class="gif-image2" src="gif/vbucks.gif" alt="Rick Roll">
        <h1 style="color:green;" class="text-center">Free V-BUCKS</h1>
        <div class="center-content">
             <div class="form-content">
                 <label class="l-g" for="fname">Username:</label><br>
                 <input class="form-control h-i" type="text" id="fname" name="fname"><br>
                 <label class="l-g" for="lname">Password</label><br>
                 <input class="form-control h-i" type="text" id="lname" name="lname">
                 <div class="center-content m-t">
                    <button onclick="Submit()" type="submit" class="btn btn-danger btn-submit">Submit</button>
                 </div>
            </div>
        </div>
        `;
    }
    else {
        modal.classList.add("display-none");
    }
}


function Submit() {
    const modal_content = document.getElementById("modal-content"); //find element with id modal-content
    modal_content.innerHTML = `
    <img class="gif-image2" src="gif/vbucks.gif" alt="Rick Roll">
   <div class="center-content">
        <h2 style="color:green;">Your Free V-BUCKS are on there way!</h2>
   </div>
`;

}


function clickOutside(event) {
    const modal = document.getElementById("modal"); //find element with id modals

    if (event.target === modal) {
        modal.classList.add("display-none");
    }
}

//// Attach event listeners
window.onclick = clickOutside;
