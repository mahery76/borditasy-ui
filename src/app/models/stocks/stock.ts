import { Product } from '../products/product.model';

export interface Stock {
    id?: number;
    quantite_stock: number;      // Corresponds to quantite_stock
    prix_achat_dep: number;      // Corresponds to prix_achat_dep
    prix_vente?: number;         // Corresponds to prix_vente, optional
    produit?: Product;           // Corresponds to produit, optional
}


