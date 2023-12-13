import "./style.css";

const palyer1: HTMLInputElement = document.querySelector(".input1");
const palyer2: HTMLInputElement = document.querySelector(".input2");
const newGame: HTMLButtonElement = document.querySelector(".btn");
const createElemBtn: HTMLButtonElement = document.querySelector(".button");
const onePG: HTMLDivElement = document.querySelector(".first_page_games");
const twoPG: HTMLDivElement = document.querySelector(".second_pages_games");
const treePG: HTMLDivElement = document.querySelector(".third_page_games");
const fffas: HTMLDivElement = document.querySelector(".mmm");
const a: HTMLFormElement = document.querySelector(".a")!;
const userName: HTMLDivElement = document.querySelector(".inner");
const url: string = "http://localhost:4000/api/tic-tac-toe";
function errorCheck() {
 if(palyer1.value !== "") {
  return;

 } else {
 console.log("Error")
 }
 if(palyer2.value !== "") {
  return;

 } else {
 console.log("Error2")
 }
}
function clicked() {

 a.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  createElemBtn.addEventListener("click", (e) =>{
   onePG.style.display = "block";
   twoPG.style.display = "none";
  })
  newGame.addEventListener("click", async () => {
   treePG.style.display = "block";
   onePG.style.display = "none";
   const gamer1 = document.createElement("p")
   const gamer2 = document.createElement("p")
   gamer1.innerText = `𝓕𝓲𝓻𝓼𝓽 𝓹𝓵𝓪𝔂𝓮𝓻 ${palyer1.value}`
   gamer2.innerText = `𝓢𝓮𝓬𝓸𝓷𝓭  𝓹𝓵𝓪𝔂𝓮𝓻 ${palyer2.value}`
   userName.appendChild(gamer1);
   userName.appendChild(gamer2);
 const data = {
  player1: palyer1.value,
  player2: palyer2.value
};
palyer1.value = ""
palyer2.value = ""
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
     }

     const responseData = await response.json();
     console.log("jonadi", responseData);
    } catch (error) {
     console.error("Error sending POST request:", error);
     errorCheck();
    }
});

}

async function fff(data:any) {
for (let i = 0; i < data.length; i++) {
 const box = document.createElement("div")
 box.className = "box";
 box.innerHTML = `<p>${data[i].player1} vs ${data[i].player2}</p>`;
 fffas.appendChild(box);
}
}
async function AllData() {
	try {
		const response = await fetch("http://localhost:4000/api/tic-tac-toe");

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const da = await response.json();
		// console.log(da);
		fff(da.data);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
async function gameId() {
 const data = {
  player1: palyer1.value,
  player2: palyer2.value
};
 try {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const responseData = await response.json();
  console.log("jonadi", responseData);
} catch (error) {
  console.error("Error sending POST request:", error);
}

}

function init() {
 errorCheck();
 gameId()
 AllData()
 clicked();
}
init();