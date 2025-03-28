import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
