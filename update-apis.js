/*
GitHub Copilot Prompt for TopTanour Frontend:

Objective:
Update all frontend JavaScript files to use the live PythonAnywhere backend API
instead of localhost or static URLs. Ensure the site fetches live menu and admin data.

Instructions for Copilot:

1️⃣ Define a global variable at the top:
   const BASE_API = "https://saleh.pythonanywhere.com";

2️⃣ Search all JS files in the frontend folder for any fetch(), axios(), or AJAX calls.

3️⃣ Replace any hardcoded URL with `${BASE_API}/...`. Examples:
   - fetch("/menu")            → fetch(`${BASE_API}/menu`) // API updated
   - fetch("/admin/items")     → fetch(`${BASE_API}/admin/items`) // API updated
   - axios.get("/menu")        → axios.get(`${BASE_API}/menu`) // API updated

4️⃣ Maintain all async/await, then/catch, and promise handling syntax intact.

5️⃣ Do not modify local frontend logic, DOM manipulation, or animation code.

6️⃣ If there are multiple files (app.js, admin.js, etc.), apply the same changes to all.

7️⃣ Comment each line you modify with "// API updated".

8️⃣ Ensure no URL remains pointing to localhost, 127.0.0.1, or other test domains.

9️⃣ If the fetch URL is dynamic (like using template strings), convert it to `${BASE_API}/...` format.

10️⃣ At the end, add a console.log confirming update:
   console.log("All API URLs updated to live backend at " + BASE_API);
*/
cd /home/saleh/toptanour/frontend
nano update-apis.js
# Paste the content, Ctrl+O, Ctrl+X
