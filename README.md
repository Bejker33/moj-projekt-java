# 🌟 Mój Projekt Node.js

![Node.js](https://img.shields.io/badge/node-%5E18.x-brightgreen)
![npm](https://img.shields.io/badge/npm-%5E9.x-blue)
![Build](https://img.shields.io/badge/build-passing-success)
![License](https://img.shields.io/badge/license-MIT-yellow)
![Version](https://img.shields.io/badge/version-1.2.0-blue)

Aplikacja demonstracyjna Node.js z przykładowymi endpointami, testami jednostkowymi i integracyjnymi.

![Screenshot](screenshot.png)

---

## 🚀 Funkcjonalności

✅ Strona główna i kontaktowa  
✅ System nawigacji między stronami  
✅ Walidacja formularza kontaktowego  
✅ Endpoint logowania użytkownika  
✅ Testy jednostkowe i integracyjne  
✅ Semantic versioning z tagami wersji  

---

## 🛠️ Instalacja

```bash
git clone https://github.com/Bejker33/moj-projekt-java.git
cd twoje-repozytorium
npm install

🧭 Dokumentacja zmian – Semantic Versioning
Wersja	Typ	Opis
v1.0.0	MAJOR	Wersja początkowa: strona główna i kontakt
v1.1.0	MINOR	Dodanie stylów CSS, nawigacji
v1.1.1	PATCH	Poprawka walidacji formularza
v1.2.0	MINOR	Endpoint logowania, testy integracyjne

## Endpoint logowania

**POST /login**

**Body:**
```json
{
  "email": "user@example.com",
  "password": "Secret123"
}
Sukces:

Status: 200

Body:

json
Kopiuj
Edytuj
{
  "message": "Zalogowano pomyślnie"
}
Błąd:

Status: 401

Body:

json
Kopiuj
Edytuj
{
  "error": "Nieprawidłowe dane logowania"
}
