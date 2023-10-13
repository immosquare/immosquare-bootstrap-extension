import * as bootstrap from "bootstrap"



getBrowserMode = () => (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

document.addEventListener("DOMContentLoaded", () => {

  //= ===========================================================##
  // Au chargement de theme
  //= ===========================================================##
  document.querySelectorAll("[data-theme-mode]").forEach((el) => {
    el.addEventListener("click", () => {
      const { themeMode } = el.dataset
      currentMode                              = themeMode === "auto" ? getBrowserMode() : themeMode
      document.documentElement.dataset.bsTheme = currentMode
      document.querySelectorAll("[data-theme-mode]").forEach((el2) => { el2.querySelector(".data-mode-check").classList.toggle("d-none", el2 == el) })
    })
  })

  //= ===========================================================##
  // Au chargement de la page, si on est en mode automatique
  //= ===========================================================##
  if (document.documentElement.dataset.bsTheme === "auto") {
    document.documentElement.dataset.bsTheme = getBrowserMode()
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      document.documentElement.dataset.bsTheme = getBrowserMode()
    })
  }

})
