import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import factoryRoutes from "./routes/factoryRoutes.js";
import swapRoutes from "./routes/swapRoutes.js";
import purchaseEntryRoutes from "./routes/purchaseEntryRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import usageRoutes from "./routes/usageRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", userRoutes);
app.use("/api/factories", factoryRoutes);
app.use("/api/swaps", swapRoutes);
app.use("/api/purchase-entries", purchaseEntryRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/products", productRoutes);
app.use("/api/usages", usageRoutes);

// Invalid route handler
app.use((req, res, next) => {
  res.status(404).json({
    message: `Route not found: ${req.originalUrl}`,
  });
});

app.use(errorHandler);

export default app;
