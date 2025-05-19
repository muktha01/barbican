import Factory from "./Factory.js";
import User from "./User.js";
import Supplier from "./Supplier.js";
import Product from "./Product.js";
import Swap from "./Swap.js";
import PurchaseEntry from "./PurchaseEntry.js";
import Usage from "./Usage.js";

// 1️⃣ Factory has many Products
Factory.hasMany(Product, { foreignKey: "factory_id" });
Product.belongsTo(Factory, { foreignKey: "factory_id" });

// 2️⃣ Factory has many PurchaseEntries
Factory.hasMany(PurchaseEntry, { foreignKey: "factory_id" });
PurchaseEntry.belongsTo(Factory, { foreignKey: "factory_id" });

// 3️⃣ Product has many PurchaseEntries
Product.hasMany(PurchaseEntry, { foreignKey: "product_id" });
PurchaseEntry.belongsTo(Product, { foreignKey: "product_id" });

// 4️⃣ Supplier has many PurchaseEntries
Supplier.hasMany(PurchaseEntry, { foreignKey: "supplier_id" });
PurchaseEntry.belongsTo(Supplier, { foreignKey: "supplier_id" });

// 5️⃣ Factory has many Usage
Factory.hasMany(Usage, { foreignKey: "factory_id" });
Usage.belongsTo(Factory, { foreignKey: "factory_id" });

// 6️⃣ Product has many Usage
Product.hasMany(Usage, { foreignKey: "product_id" });
Usage.belongsTo(Product, { foreignKey: "product_id" });

// 7️⃣ Factory has many Swaps (From and To)
Factory.hasMany(Swap, { foreignKey: "from_factory_id", as: "swapsFrom" });
Factory.hasMany(Swap, { foreignKey: "to_factory_id", as: "swapsTo" });
Swap.belongsTo(Factory, { foreignKey: "from_factory_id", as: "fromFactory" });
Swap.belongsTo(Factory, { foreignKey: "to_factory_id", as: "toFactory" });

// 8️⃣ Product has many Swaps
Product.hasMany(Swap, { foreignKey: "product_id" });
Swap.belongsTo(Product, { foreignKey: "product_id" });

export { Factory, User, Supplier, Usage, Product, Swap, PurchaseEntry };
