# 💱 Currency Converter  
A simple and responsive currency converter built with **React**, using a custom hook `useCurrencyInfo` and reusable `InputBox` components.  
The app fetches live exchange rates from a free & reliable open-API and converts amounts between different currencies.

---

## 🚀 Features
- 🔁 Convert between any two currencies  
- 🌐 Fetches live exchange rates via a public API  
- ⚛️ Built with reusable React components  
- 🎣 Custom hook `useCurrencyInfo` for API data  
- 📱 Fully responsive UI (TailwindCSS)  
- ⚡ Fast & minimal design  

---
## 🔧 Technologies Used
- **React (Vite)**
- **TailwindCSS**
- **Fetch API**
- **JavaScript ES6+**

---

## 🧩 How It Works

### 🔹 Custom Hook: `useCurrencyInfo()`
Fetches latest exchange rates from free API

Returns:
- All conversion rates for the selected base currency

### 🔹 InputBox Component
A controlled input UI for:
- Entering amount
- Selecting currency type  
Used twice: “From” and “To”

---

