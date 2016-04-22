/**ignore at merge**/
//:import sdk.releases.Current

/*
 * Universal Variable Template
 */

/* Please uncomment this block after you adjust values, this is only example */

window.universal_variable = {
	"page": {
		"type": "Product",
		"breadcrumb": [
			"suits",
			"single breasted suits",
			"oxford"
		]
	},
	"user": {
		"name": "John Doe",
		"username": "jdoe",
		"user_id": "12134124",
		"email": "jdoe@example.com",
		"language": "en-gb",
		"returning": true,
		"facebook_id": 1234566778,
		"twitter_id": "johnthedoe",
		"has_transacted": true
	},
	"product": {
		"id": "1234567890",
		"url": "product.html",
		"name": "Sparkly Shoes",
		"description": "Description about this product",
		"manufacturer": "The Shoe Co",
		"category": "Shoe",
		"subcategory": "Heels",
		"currency": "GBP",
		"unit_price": 130,
		"unit_sale_price": 125,
		"sku_code": "1234567890red",
		"stock": 21,
		"voucher": "MYVOUCHER1",
		"color": "Red",
		"size": "M"
	},
	"transaction": {
		"order_id": "BASKET2203",
		"currency": "GBP",
		"subtotal": 380,
		"subtotal_include_tax": "",
		"vouchers": [
			"MYVOUCHER1"
		],
		"voucher_discount": 15,
		"promotions": [
			"MYPROMOTION"
		],
		"promotion_discount": 15,
		"tax": 5,
		"shipping_cost": 4.5,
		"shipping_method": "Royal Mail 1st Class",
		"total": 369.5,
		"line_items": [
			{
				"product": {
					"id": "1234567890",
					"url": "product.html",
					"name": "Sparkly Shoes",
					"description": "Description about this product",
					"manufacturer": "The Shoe Co",
					"category": "Shoe",
					"subcategory": "Heels",
					"currency": "GBP",
					"unit_price": 130,
					"unit_sale_price": 125,
					"sku_code": "1234567890red",
					"stock": 21,
					"voucher": "MYVOUCHER1",
					"color": "Red",
					"size": "M"
				},
				"quantity": 1,
				"subtotal": 130,
				"total_discount": 5
			},
			{
				"product": {
					"id": "1234567890",
					"url": "product.html",
					"name": "Sparkly Shoes",
					"description": "Description about this product",
					"manufacturer": "The Shoe Co",
					"category": "Shoe",
					"subcategory": "Heels",
					"currency": "GBP",
					"unit_price": 130,
					"unit_sale_price": 125,
					"sku_code": "1234567890red",
					"stock": 21,
					"voucher": "MYVOUCHER1",
					"color": "Red",
					"size": "M"
				},
				"quantity": 1,
				"subtotal": 130,
				"total_discount": 5
			}
		]
	}
};
