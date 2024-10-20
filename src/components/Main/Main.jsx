import React, { useState } from "react";
import "./Main.css";

function Main() {
  const productContainers = [
    ...document.querySelectorAll(".product-container"),
  ];
  const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
  const preBtn = [...document.querySelectorAll(".pre-btn")];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });

  return (
    <>
    <section class="product">
    <div class="title2">
      <h2>
        JOGOS EM DESTAQUE
      </h2>
    </div>
    <button class="pre-btn"><img src="https://raw.githubusercontent.com/vingenesi/MoreGeeK/refs/heads/main/media/arrow.png" alt="icone de seta" /></button>
    <button class="nxt-btn"><img src="https://raw.githubusercontent.com/vingenesi/MoreGeeK/refs/heads/main/media/arrow.png" alt="icone de seta" /></button>
    <div class="product-container">
        <div class="product-card">
            <div class="product-image">
                <img src="https://www.galera.bet/library/Game%20Icons/PGSoft/pop_e13dd9b6_pgtprp.webp" alt="" class="product-thumb"/>
                <button class="card-btn"> Jogue Agora
                </button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">Fortune Tiger</h2>
                <span class="actual-price"><p>Bônus de 30%</p></span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://cdn.prod.website-files.com/63b3249466615535f76d4b4e/669512bcaebf6869f3675505_Aztec_Cluster_1020x1280.webp" alt="" class="product-thumb"/>
                <button class="card-btn"> Jogue Agora
                </button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">Astec Cluters</h2>
                <span class="actual-price"><p>Bônus de 45%</p></span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://cgp-cdn.safe-iplay.com/gamesImages/2351268_hybrid_icon.png" alt="" class="product-thumb"/>
                <button class="card-btn"> Jogue Agora
                </button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">Gold Blitz</h2>
                <span class="actual-price"><p>Bônus de 35%</p></span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://www.samuraisushi.com.ar/pgsoft/assets/images/winner/8.webp" alt="" class="product-thumb"/>
                <button class="card-btn"> Jogue Agora
                </button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">Lady Wolf</h2>
                <span class="actual-price"><p>Bônus de 50%</p></span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://ctnovaavatar.com.br/wp-content/uploads/2023/08/Sweet-Bonanza-2.webp" alt="" class="product-thumb"/>
                <button class="card-btn"> Jogue Agora
                </button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">Sweet Bonanza</h2>
                <span class="actual-price"><p>Bônus de 25%</p></span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://static-assets.lvbet.com/images/game-icons/playn-go/baron-lord-of-saturday-sm.webp" alt="" class="product-thumb"/>
                <button class="card-btn"> Jogue Agora
                </button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">Baron Lord</h2>
                <span class="actual-price"><p>Bônus de 15%</p></span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://img.rationalcdn.com/starsweb/prod/35361_0.jpg" alt="" class="product-thumb"/>
                <button class="card-btn"> Jogue Agora
                </button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">Cash Dead</h2>
                <span class="actual-price"><p>Bônus de 20%</p></span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                <img src="https://www.galera.bet/library/Game%20Icons/compressed/gpas_auncoil_pop.webp?siteid=2" alt="" class="product-thumb"/>
                <button class="card-btn"> Jogue Agora
                </button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">Anaconda</h2>
                <span class="actual-price"><p>Bônus de 35%</p></span>
            </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default Main;
