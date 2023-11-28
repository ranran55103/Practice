"use strict";
const num = 10;
const winner = Math.floor(Math.random() * num);
for (let i = 0; i < num; i++) {
  const div = document.createElement("div"); //定数のdivを定義
  div.classList.add("box"); //divにboxクラスを追加

  div.addEventListener("click", () => {
    //divをクリックしたら
    if (i === winner) {
      div.textContent = "win!";
      div.classList.add("win");
    } else {
      div.textContent = "lose!";
      div.classList.add("lose");
    }
  });

  document.body.appendChild(div); //bodyにdivを追加
}
