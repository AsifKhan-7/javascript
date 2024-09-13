document.addEventListener("DOMContentLoaded", () => {
  const resultElement = document.getElementById("result");

  // Local Storage
  document.getElementById("setLocalStorage").addEventListener("click", () => {
    localStorage.setItem("localKey", "localValue");
    resultElement.textContent = "Local Storage set!";
  });

  document.getElementById("getLocalStorage").addEventListener("click", () => {
    const value = localStorage.getItem("localKey");
    resultElement.textContent = `Local Storage value: ${value}`;
  });

  // Session Storage
  document.getElementById("setSessionStorage").addEventListener("click", () => {
    sessionStorage.setItem("sessionKey", "sessionValue");
    resultElement.textContent = "Session Storage set!";
  });

  document.getElementById("getSessionStorage").addEventListener("click", () => {
    const value = sessionStorage.getItem("sessionKey");
    resultElement.textContent = `Session Storage value: ${value}`;
  });
});
