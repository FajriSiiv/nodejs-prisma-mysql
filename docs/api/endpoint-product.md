# Dokumentasi Product Endpoint API

Berikut adalah daftar endpoint API yang tersedia:

### Login terlebih dahulu

```json
{
  "message": "Unauthorized"
}
```

## 1. \*\*GET `/v1/api/product` Mendapatkan daftar semua product.

```json
[
  {
    "id": "0bd7ea8f-e616-4efa-a713-f0d158b4816d",
    "name": "Cola Cola",
    "category": "Minuman",
    "description": "Cola cola",
    "price": 7000
  }
]
```

## 2. \*\*POST `/v1/api/product` Membuat Product Baru.

```json
{
  "name": "Cola Cola",
  "category": "Minuman",
  "description": "Cola cola",
  "price": 7000
}
```

## 3. \*\*PATCH `/v1/api/product/:id` Mengedit/update Product.

```json
{
  "message": "Successfully create product",
  "newProduct": {
    "name": "Cola Cola",
    "category": "Minuman",
    "description": "Cola cola",
    "price": 7000
  }
}
```

## 4. \*\*DELETE `/v1/api/product/:id` Menghapus Product.

```json
{
  "message": "Successfully deleted product"
}
```
