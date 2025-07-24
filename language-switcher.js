document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("LanguageSwitcher");

  function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
      .then((res) => res.json())
      .then((translations) => {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.getAttribute("data-i18n");
          if (translations[key]) {
            el.textContent = translations[key];
          }
        });
      });
  }

  // Initial load
  loadLanguage(switcher.value);

  switcher.addEventListener("change", () => {
    loadLanguage(switcher.value);
  });
});
