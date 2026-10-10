touch controllers/productController.js
echo "const supabase = require('../supabase_config'); exports.getProducts = async (req, res) => { const { data, error } = await supabase.from('products').select('*'); if (error) return res.status(500).json({ error }); res.status(200).json(data); };" > controllers/productController.js
