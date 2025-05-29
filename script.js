const content = {
  es: `
    <section><h2>🟢 Agregado [+]</h2><ul><li>End</li><li>Cactus</li><li>AntiPearl</li><li>Cocaine</li><li>SnakeBite</li><li>/falltrap</li><li>/skybase</li></ul></section>
    <section><h2>🔴 Removido [-]</h2><ul><li>TimeStone</li><li>Werid Luck</li><li>Size Ability</li><li>Webber</li><li>RiskyMode</li></ul></section>
    <section><h2>🟡 Nerf [-!]</h2><ul><li><strong>Recall</strong>: Ahora solo podrás usarla si el último enemigo que te golpeó en los últimos 10 segundos está a una distancia de 8 bloques o menos.</li></ul></section>
    <section><h2>🔵 Buff [+!]</h2><ul><li><strong>HogRaider</strong>: Ahora le da efectos a los compañeros de faction que estén en un radio de 10 bloques.<br>Antes, cuando moría daba un efecto aleatorio por 4 segundos.<br>Ahora: da efectos por 6 segundos, pero se redujo su tiempo de vida.</li></ul></section>
    <section><h2>🔄 Cambios</h2><ul><li><strong>/f camp</strong>: En el spawn, ahora tiene un timer de 7 segundos.</li><li><strong>/base, /falltrap y /skybase</strong>: Ahora muestran un sistema de corners (esquinas) para previsualizar cómo se verá la estructura antes de construirla.</li><li><strong>Kills Stats Sword</strong>: Ahora solo mostrará las últimas 5 kills y se cambió el diseño para hacerlo más limpio.</li></ul></section>
    <section><h2>🏷️ Cambios en Rangos [+]</h2><ul><li><strong>Rank Jupiter</strong>: Acceso a /base</li><li><strong>Rank Neptune</strong>: Acceso a /base y /falltrap</li><li><strong>Rank Neptune+</strong>: Acceso a /base, /falltrap, /skybase y End Portal en su base</li></ul></section>
  `,
  en: `
    <section><h2>🟢 Added [+]</h2><ul><li>End</li><li>Cactus</li><li>AntiPearl</li><li>Cocaine</li><li>SnakeBite</li><li>/falltrap</li><li>/skybase</li></ul></section>
    <section><h2>🔴 Removed [-]</h2><ul><li>TimeStone</li><li>Werid Luck</li><li>Size Ability</li><li>Webber</li><li>RiskyMode</li></ul></section>
    <section><h2>🟡 Nerf [-!]</h2><ul><li><strong>Recall</strong>: You can now only use it if the last enemy that hit you in the last 10 seconds is within 8 blocks.</li></ul></section>
    <section><h2>🔵 Buff [+!]</h2><ul><li><strong>HogRaider</strong>: Now gives effects to faction teammates within a 10-block radius.<br>Previously gave a random effect on death for 4 seconds.<br>Now: effects last 6 seconds, but its lifetime has been reduced.</li></ul></section>
    <section><h2>🔄 Changes</h2><ul><li><strong>/f camp</strong>: Now has a 7-second timer in spawn.</li><li><strong>/base, /falltrap, and /skybase</strong>: Now preview corner system before building.</li><li><strong>Kills Stats Sword</strong>: Now it will only show the last 5 kills and the design has been changed to make it cleaner.</li></ul></section>
    <section><h2>🏷️ Rank Changes [+]</h2><ul><li><strong>Rank Jupiter</strong>: Access to /base</li><li><strong>Rank Neptune</strong>: Access to /base and /falltrap</li><li><strong>Rank Neptune+</strong>: Access to /base, /falltrap, /skybase, and End Portal in base</li></ul></section>
  `
};

function updateContent(lang) {
  document.getElementById("content").innerHTML = content[lang];
}

document.getElementById("language-select").addEventListener("change", (e) => {
  updateContent(e.target.value);
});

window.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updateContent("es");
