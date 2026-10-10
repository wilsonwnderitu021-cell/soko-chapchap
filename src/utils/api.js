touch utils/api.js
echo "const API_URL = process.env.API_URL; export const fetchProducts = async () => {const response = await fetch(\`\${API_URL}/products\`); return response.json();};" > utils/api.js
