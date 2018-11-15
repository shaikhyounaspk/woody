webpackJsonp([0],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Values = /** @class */ (function () {
    function Values() {
        this.count = 0;
        this.filter = 10;
        this.isLoggedIn = false;
        this.customerName = "";
        this.customerId = null;
        this.listview = false;
        this.cart = [];
        this.filterUpdate = false;
        this.currency = "USD";
        this.dir = 'left';
        this.wishlistId = [];
        this.filter = {};
        this.logoutUrl = "";
        this.avatar = "assets/image/menu_logo.png";
    }
    Values.prototype.updateCart = function (crt) {
        this.cartItem = crt.cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in crt.cart_contents) {
            this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
            this.count += parseInt(crt.cart_contents[item].quantity);
        }
    };
    Values.prototype.updateCartTwo = function (crt) {
        this.cart = [];
        this.count = 0;
        this.cartItem = crt;
        for (var item in crt) {
            this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
            this.count += parseInt(crt[item].quantity);
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutService = /** @class */ (function () {
    function CheckoutService(http, config) {
        this.http = http;
        this.config = config;
    }
    CheckoutService.prototype.updateOrderReview = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("security", form.nonce.update_order_review_nonce);
        params.append("payment_method", form.payment_method);
        params.append("address", form.billing_address_1);
        params.append("address_2", form.billing_address_2);
        params.append("city", form.billing_city);
        params.append("postcode", form.billing_postcode);
        params.append("country", form.billing_country);
        params.append("state", form.billing_state);
        params.append("s_address", form.billing_address_1);
        params.append("s_address_2", form.billing_address_2);
        params.append("s_city", form.billing_city);
        params.append("s_postcode", form.billing_postcode);
        params.append("s_country", form.billing_country);
        params.append("s_state", form.billing_state);
        params.append("shipping_method[0]", form.shipping_method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkout = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkouttest = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", "Name hajsk");
        params.append("billing_last_name", "Name hajsk");
        params.append("billing_company", "Name hajsk");
        params.append("billing_email", "test@gmail.com");
        params.append("billing_phone", "237648372");
        params.append("billing_address_1", "form billing_address_1");
        params.append("billing_address_2", "dsjfh sdjfhsdkj");
        params.append("billing_city", "fsdfdjgif");
        params.append("billing_postcode", "560048");
        params.append("billing_country", "IN");
        params.append("billing_state", "KA");
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveBillingAddress = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.nonce.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("createaccount", form.billing_address_1);
        params.append("account_password", form.billing_address_2);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", "544bcd0d1d");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveShippingAddress = function (shipping) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping[firstname]", shipping.firstname);
        params.append("shipping[lastname]", shipping.lastname);
        params.append("shipping[company]", shipping.company);
        params.append("shipping[street][0]", shipping.street1);
        params.append("shipping[street][1]", shipping.street2);
        params.append("shipping[city]", shipping.city);
        params.append("shipping[postcode]", shipping.postcode);
        params.append("shipping[country_id]", shipping.country_id);
        params.append("shipping[state_id]", shipping.state_id);
        if (shipping.entity_id) {
            params.append("shipping_address_id", shipping.entity_id);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getShippingPayment = function () {
        var _this = this;
        if (this.shippingMethods && this.paymentMethods) {
            return Promise.resolve(this.shippingMethods);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingMethods = data[0];
                _this.paymentMethods = data[1];
                resolve(_this.shippingMethods);
            });
        });
    };
    CheckoutService.prototype.saveMethods = function (shippingMethod, payment) {
        var _this = this;
        var shipping = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        shipping.append("shipping_method", shippingMethod);
        for (var param in payment) {
            params.set("payment[" + param + "]", payment[param]);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', params, _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingStatus = data[0];
                _this.paymentStatus = data[1];
                resolve(_this.shippingStatus);
            });
        });
    };
    CheckoutService.prototype.getTime = function (date) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_slots_on_date");
        params.append("date", date);
        console.log(params);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getDate = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_upcoming_bookable_dates");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.login = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", form.username);
        params.append("password", form.password);
        params.append("_wpnonce", form.checkout_login);
        params.append("login", "Login");
        params.append("_wp_http_referer", "/checkout/");
        params.append("redirect", this.config.url + "/wp-admin/admin-ajax.php?action=mstoreapp-userdata");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout/', params)
                .subscribe(function (data) {
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.status = data;
                    resolve(_this.status);
                });
            });
        });
    };
    CheckoutService.prototype.submitCoupon = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", form.coupon_code);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getStripeToken = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("key", form.payment.stripe.publishable_key);
        params.append("payment_user_agent", 'stripe.js/6ea8d55');
        params.append("card[number]", form.stripe_number);
        params.append("card[cvc]", form.stripe_code);
        params.append("card[exp_month]", form.stripe_exp_month);
        params.append("card[exp_year]", form.stripe_exp_year);
        params.append("card[name]", form.billing_first_name + form.billing_last_name);
        params.append("card[address_line1]", form.billing_address_1);
        params.append("card[address_line2]", form.billing_address_2);
        params.append("card[address_state]", form.billing_state);
        params.append("card[address_city]", form.billing_city);
        params.append("card[address_zip]", form.billing_postcode);
        params.append("card[address_country]", form.billing_country);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/tokens', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(err.json()); });
        });
    };
    CheckoutService.prototype.stripePlaceOrder = function (form, token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("wc-stripe-payment-token", 'new');
        params.append("stripe_token", token.id);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getOrderSummary = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/orders/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orderSummary = data;
                resolve(_this.orderSummary);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsPage = /** @class */ (function () {
    function ProductsPage(nav, popoverCtrl, service, params, values, functions) {
        var _this = this;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.shouldShowCancel = true;
        this.showFilters = false;
        this.sort = 0;
        this.data = {};
        this.filter = {};
        this.q = "";
        this.filter['filter[category]'] = params.data.slug;
        this.filter.id = params.data.id;
        this.categoryName = params.data.name;
        this.filter.page = 1;
        this.categories = params.data.categories;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = "1";
        this.service.load(this.filter)
            .then(function (results) { return _this.products = results; });
        for (var i = 0; i < this.categories.product_categories.length; i++) {
            if (this.categories.product_categories[i].parent == this.filter.id) {
                this.subCategories.push(this.categories.product_categories[i]);
            }
        }
    }
    ProductsPage_1 = ProductsPage;
    ProductsPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.categories;
        this.nav.push(ProductsPage_1, this.items);
    };
    ProductsPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    ProductsPage.prototype.getProducts = function (id) {
        this.nav.push(ProductsPage_1, id);
    };
    ProductsPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
    };
    ProductsPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.loadMore(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results.products != undefined) {
            for (var i = 0; i < results.products.length; i++) {
                this.products.products.push(results.products[i]);
            }
            ;
        }
        if (results.products.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductsPage.prototype.updateCart = function (a) { };
    ProductsPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        console.log(this.filter['filter[q]']);
        this.service.search(this.filter).then(function (results) { return _this.products = results; });
    };
    ProductsPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    ProductsPage.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    ProductsPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    ProductsPage.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        if (sort == 0) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "date";
        }
        if (sort == 1) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "name";
        }
        else if (sort == 2) {
            this.filter['filter[order]'] = "DESC";
            this.filter['filter[orderby]'] = "name";
        }
        else if (sort == 3) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "meta_value_num";
            this.filter['filter[orderby_meta_key]'] = "_price";
        }
        else if (sort == 4) {
            this.filter['filter[order]'] = "DESC";
            this.filter['filter[orderby]'] = "meta_value_num";
            this.filter['filter[orderby_meta_key]'] = "_price";
        }
        /*this.filter['filter[meta_query][key]'] = "_price";
        this.filter['filter[meta_query][value]'] = '[0,10]';
        this.filter['filter[meta_query][compare]'] = "BETWEEN";*/
        this.service.load(this.filter).then(function (results) { return _this.products = results; });
    };
    ProductsPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    ProductsPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    ProductsPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsPage = ProductsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/products/products.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center *ngIf="categoryName"><span [innerHTML]="categoryName"></span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getFilter()">\n        <ion-icon ios="ios-funnel" md="md-funnel">\n        </ion-icon>\n      </button>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-basket-outline item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light"  *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="products">\n  <div *ngIf="showFilters" class="filter">\n    <ion-list radio-group [(ngModel)]="sort" (ngModelChange)="chnageFilter(sort)">\n      <ion-list-header>\n        <b>\n          {{"Sort" | translate}}\n        </b>\n      </ion-list-header>\n      <ion-item>\n        <ion-label text-wrap>{{"Default" | translate}}\n        </ion-label>\n        <ion-radio value="0">\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Name" | translate}} (A - Z)\n        </ion-label>\n        <ion-radio value="1">\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Name" | translate}} (Z - A)\n        </ion-label>\n        <ion-radio value="2">\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Price" | translate}} (Low - High)\n        </ion-label>\n        <ion-radio value="3">\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Price" | translate}} (High - Low)\n        </ion-label>\n        <ion-radio value="4">\n        </ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button block color="button-color" (click)="cancel()">\n      {{"CANCEL" | translate}}\n    </button> \n  </div>\n\n\n  <div *ngIf="!showFilters">\n    <ion-searchbar\n                   [(ngModel)]="q"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="onInput($event)"\n                   (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n    <div *ngIf="!this.filter[\'filter[q]\'] || this.filter[\'filter[q]\'] == \'\'">\n    <div *ngIf="subCategories" class="category">\n      <ion-item *ngIf="subCategories.length" no-lines class="category-name"> \n        <ion-label text-uppercase>{{"Categories" | translate}}\n        </ion-label>\n      </ion-item>\n      <div class="sub-category">\n        <ion-item *ngFor="let item of subCategories">\n          <ion-thumbnail item-left>\n            <a (click)="getCategory(item.id, item.slug)">\n              <img src="{{item.image}}"/>\n            </a>\n          </ion-thumbnail>\n          <a (click)="getCategory(item.id, item.slug)">\n            <h2>\n              <span [innerHTML]="item.name"></span>\n            </h2>\n          </a>\n          <ion-icon item-right ios="ios-arrow-forward" md="md-arrow-forward" (click)="getCategory(item.id, item.slug, item.name)">\n          </ion-icon>\n        </ion-item>\n      </div>\n    </div>\n    </div>\n    \n    <ion-spinner *ngIf="!products?.products" name="crescent">\n    </ion-spinner>\n    <div *ngIf="products">\n      <h2 *ngIf="!products.products.length" style="font-size: 15px;text-align: center;margin-top: 30px">No products found!.</h2>\n    </div>\n    <div *ngIf="products?.products" class="products-listing">\n      <div *ngIf="products.products.length">\n        <div *ngIf="values.listview">\n          <ion-item no-lines class="item-name">\n            <ion-label text-uppercase>{{"Products" | translate}}\n            </ion-label>\n            <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n              <ion-icon ios="ios-grid" md="md-grid">\n              </ion-icon>\n            </button>\n          </ion-item>\n          <ion-list>\n            <div class="item-list" *ngFor="let item of products.products">\n              <ion-item class="left-padding" no-lines>\n                  <ion-thumbnail item-left class="stock-list">\n                    <img tappable (click)="getProduct(item.id)" src="{{item.images[0].src}}">\n                    <button class="out-of-stock-button" ion-button color="danger" *ngIf="!item.in_stock">{{"OUTOFSTOCK" | translate}}\n                    </button>             \n                  </ion-thumbnail> \n\n                <!--div tappable (click)="getProduct(item.id)"-->\n                  <div class="product-name-top">                  \n                  <ion-row>                 \n                  <ion-col width-80 class="product-label">\n                   <div tappable (click)="getProduct(item.id)">\n                  <h2 *ngIf="item.title">{{item.title}}\n                    </h2>\n                    <h2 *ngIf="item.name">{{item.name}}\n                    </h2>\n                    </div>\n                  </ion-col>\n                  <ion-col width-20 class="wishlist-label">\n                  <ion-icon ios="ios-heart" md="md-heart" color="danger" class="wishlist-button" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                  <ion-icon ios="ios-heart-outline" md="md-heart-outline" color="danger" class="wishlist-button" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                  </ion-col>\n                  </ion-row>\n                    <p tappable (click)="getProduct(item.id)" class="max-lines" [innerHTML]="item.description">\n                    </p>\n                  </div>\n\n\n                  <div class="price-bottom-list">\n                    <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </h3>\n                    <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </h3>\n                    <h3 class="price-del" *ngIf="item.sale_price">\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                      </del>\n                    </h3>\n                  </div>\n                <!--/div-->\n\n                <div class="bottom-right-button">\n                  <button ion-button [disabled]=\'!item.in_stock\' text-uppercase color="button-color"  item-right outline *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                    {{"Add"  | translate}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                    <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                    </ion-icon>\n                  </button>\n                  <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                    <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                    </ion-icon>\n                  </button>\n                </div>\n              </ion-item>\n            </div>\n          </ion-list>\n        </div>\n        <div *ngIf="!values.listview">\n          <ion-item no-lines class="item-name">\n            <ion-label text-uppercase>{{"Products" | translate}}\n            </ion-label>\n            <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n              <ion-icon ios="ios-list-box" md="ios-list-box">\n              </ion-icon>\n            </button>\n          </ion-item>\n          <div class="card-background-page grid">\n            <ion-row class="row unlimited-items">\n              <ion-col class="col" *ngFor="let item of products.products">\n                <ion-card>\n                  <ion-card-content class="stock">\n\n                      <img tappable src="{{item.images[0].src}}" (click)="getProduct(item.id)">\n                      <button ion-button color="danger" *ngIf="!item.in_stock">{{"OUTOFSTOCK" | translate}}\n                      </button>\n                  <ion-icon ios="ios-heart" md="md-heart" color="danger" class="wishlist-button-grid" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                  <ion-icon ios="ios-heart-outline" md="md-heart-outline" color="danger" class="wishlist-button-grid" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>                  \n                  </ion-card-content>\n                  <div tappable (click)="getProduct(item.id)" class="card-name">\n                  <ion-label *ngIf="item.title">{{item.title}}\n                  </ion-label>\n                  <ion-label *ngIf="item.name">{{item.name}}\n                  </ion-label>\n                  </div>\n                  <ion-item no-padding class="price-list">\n                    <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </h3>\n                    <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </h3>\n                    <h3 class="price-delete" primary *ngIf="item.sale_price">\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                      </del>\n                    </h3>\n                    <button ion-button [disabled]=\'!item.in_stock\' text-uppercase color="button-color" item-right clear *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                      {{"Add"  | translate}}\n                    </button>\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                      <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                      </ion-icon>\n                    </button>\n                    <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                    </button>\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                      <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                      </ion-icon>\n                    </button>\n                  </ion-item>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n        <ion-infinite-scroll-content\n         loadingSpinner="crescent"\n         loadingText="{{\'Loading more items..\' | translate}}">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/products/products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], ProductsPage);
    return ProductsPage;
    var ProductsPage_1;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = /** @class */ (function () {
    function CartService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CartService.prototype.loadCart = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteItem = function (item_key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' + item_key, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.billing = data;
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                });
                resolve(_this.billing);
            });
        });
    };
    CartService.prototype.addToCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity += 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] += 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity -= 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] -= 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.submitCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.removeCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params)
                .subscribe(function (data) {
                _this.status = data;
            });
        });
    };
    CartService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping_method[0]", method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CartService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BillingAddressForm = /** @class */ (function () {
    function BillingAddressForm(iab, nav, service, params, functions, values) {
        this.iab = iab;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.showCreateAccont = false;
        this.buttonSubmit = false;
        this.buttonSubmitLogin = false;
        this.buttonSubmitCoupon = false;
        this.buttonText = "Place order";
        this.buttonText1 = "Apply";
        this.buttonText2 = "Login";
        this.loginData = [];
        this.form = params.data;
        this.billing = {};
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = true;
        this.shipping = {};
        this.shipping.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
    }
    BillingAddressForm.prototype.getRegion = function (countryId) {
        var _this = this;
        this.states = this.form.state[countryId];
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.handleOrderReviews = function (results) {
        this.OrderReview = results;
        this.chosen_shipping = this.OrderReview.chosen_shipping;
    };
    BillingAddressForm.prototype.checkout = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing order...";
        if (this.form.shipping) {
            this.form.shipping_first_name = this.form.billing_first_name;
            this.form.shipping_last_name = this.form.billing_last_name;
            this.form.shipping_company = this.form.billing_company;
            this.form.shipping_address_1 = this.form.billing_address_1;
            this.form.shipping_address_2 = this.form.billing_address_2;
            this.form.shipping_city = this.form.billing_city;
            this.form.shipping_country = this.form.billing_country;
            this.form.shipping_state = this.form.billing_state;
            this.form.shipping_postcode = this.form.billing_postcode;
        }
        if (this.form.payment_method == 'bacs' || this.form.payment_method == 'cheque' || this.form.payment_method == 'cod') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handleBilling(results); });
        }
        else if (this.form.payment_method == 'stripe') {
            this.service.getStripeToken(this.form)
                .then(function (results) { return _this.handleStripeToken(results); });
        }
        else {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayment(results); });
        }
    };
    BillingAddressForm.prototype.handlePayment = function (results) {
        var _this = this;
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(results.redirect, '_blank', options);
            browser_1.show();
            browser_1.on('loadstart').subscribe(function (data) {
                if (data.url.indexOf('order-received') != -1 && data.url.indexOf('return=') == -1) {
                    _this.values.cart = [];
                    _this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
                    browser_1.hide();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.buttonSubmit = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.checkoutStripe = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing Order...";
        this.service.getStripeToken(this.form)
            .then(function (results) { return _this.handleStripeToken(results); });
    };
    BillingAddressForm.prototype.handleStripeToken = function (results) {
        var _this = this;
        if (results.error) {
            this.buttonSubmit = false;
            this.buttonText = "Place Order";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results)
                .then(function (results) { return _this.handleBilling(results); });
        }
    };
    BillingAddressForm.prototype.handleBilling = function (results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("order-received/");
            var pos2 = str.lastIndexOf("?key=wc_order");
            var pos3 = pos2 - (pos1 + 15);
            var order_id = str.substr(pos1 + 15, pos3);
            this.values.cart = [];
            this.values.count = 0;
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.buttonText = "Place Order";
    };
    BillingAddressForm.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.buttonText2 = "Loading";
            this.service.login(this.form)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    BillingAddressForm.prototype.validateForm = function () {
        if (this.form.username == undefined || this.form.username == "") {
            return false;
        }
        if (this.form.password == undefined || this.form.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.handleResults = function (a) {
        this.buttonSubmitLogin = false;
        this.buttonText2 = "Login";
        //this.form.shipping = true;
        if (a.user_logged) {
            this.form = a;
            this.states = this.form.state[this.form.billing_country];
            this.values.isLoggedIn = a.user_logged;
            this.values.customerName = a.billing_first_name;
            this.values.customerId = a.user_id;
            this.values.logoutUrl = a.logout_url;
        }
        else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    };
    BillingAddressForm.prototype.submitCoupon = function () {
        var _this = this;
        this.buttonSubmitCoupon = true;
        this.buttonText1 = "Loading";
        this.service.submitCoupon(this.form)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    BillingAddressForm.prototype.handleCoupon = function (results) {
        var _this = this;
        this.buttonSubmitCoupon = false;
        this.buttonText1 = "Apply";
        this.couponStatus = results._body;
        this.functions.showAlert("STATUS", results._body);
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.OrderReview = results; });
    };
    BillingAddressForm.prototype.createAccount = function () {
        this.showCreateAccont = true;
    };
    BillingAddressForm.prototype.changePayment = function () {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    };
    BillingAddressForm.prototype.terms = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__["a" /* TermsCondition */], this.form.terms_content);
    };
    BillingAddressForm.prototype.updateOrderReview = function () {
        var _this = this;
        this.form.shipping_method = this.chosen_shipping;
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/checkout/billing-address-form/billing-address-form.html"*/'<ion-header>\n  <ion-navbar color="header"> \n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-wrap text-center>{{"Checkout" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="billing-address-form">\n <div>\n    <ion-item *ngIf="!values.isLoggedIn" class="side-heading-background Returningcustomer" no-lines>\n      <ion-label color="side-heading-color">{{"Returningcustomer?Loginhere.." | translate}}\n        <ion-icon ios="ios-log-in" md="md-log-in">\n        </ion-icon>\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.islogin" name="subscribe">\n      </ion-toggle>\n    </ion-item>\n    <div *ngIf="form.islogin" class="login-form">\n      <form #f="ngForm">\n        <ion-list>\n          <ion-item>\n            <ion-label floating>{{"username" | translate}}\n            </ion-label>\n            <ion-input required type="email" [(ngModel)]="form.username" name="firstname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"password" | translate}}\n            </ion-label>\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n            </ion-input>\n          </ion-item>\n        </ion-list> \n        <div class="login-button">\n          <button ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="login(loginData)">{{buttonText2}}\n          </button> \n        </div>\n      </form>\n    </div>\n    <div *ngIf="form.iscoupon" class="coupon">\n      <form #f="ngForm">\n        <ion-item>\n          <ion-label floating>coupon\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="form.coupon_code" name="coupon">\n          </ion-input>\n        </ion-item> \n        <button ion-button color="button-color" block type="submit" [disabled]="buttonSubmitCoupon" (click)="submitCoupon()"> {{buttonText1}}\n        </button> \n      </form>\n    </div>\n    <div *ngIf="form">\n      <form #f="ngForm" class="form">\n        <ion-list no-margin>\n          <ion-item class="side-heading-background">\n            <ion-label class="col" color="side-heading-color">{{"BillingAddress" | translate}}\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"FirstName" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_first_name" name="firstname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"LastName"| translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_last_name" name="lastname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Company" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_company" name="company">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Phone" | translate}}\n            </ion-label>\n            <ion-input required type="number" [(ngModel)]="form.billing_phone" name="telephone">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"StreetAddress" | translate}} 1\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_address_1" name="street1">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"StreetAddress" | translate}} 2\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_address_2" name="street2">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Email" | translate}}\n            </ion-label>\n            <ion-input required type="email" [(ngModel)]="form.billing_email" name="email">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"City" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_city" name="city">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Postcode" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_postcode" name="postcode">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label> {{"Country" | translate}}\n            </ion-label>\n            <ion-select [(ngModel)]="form.billing_country" (ngModelChange)="getRegion(form.billing_country)" name="billing_country">\n              <div *ngFor="let field of form.country.countries | keys">\n                <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n                </ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf="states">\n            <ion-label> {{"State" | translate}} \n            </ion-label>\n            <ion-select [(ngModel)]="form.billing_state" name="billing_state">\n              <div *ngFor="let field of states | keys">\n                <ion-option value="{{field.key}}">{{field.value}}\n                </ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf="!states">\n            <ion-label floating> {{"State" | translate}} \n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_state" name="billing_state">\n            </ion-input>\n          </ion-item>\n\n        </ion-list>\n        <div class="same-for-shipping">\n          <ion-item class="side-heading-background">\n            <ion-label color="side-heading-color">{{"SameForShipping" | translate}}\n            </ion-label>\n            <ion-toggle checked="true" [(ngModel)]="form.shipping" name="shipping">\n            </ion-toggle>\n          </ion-item>\n        </div>\n        <div *ngIf="!form.shipping" class="same-for-shipping-form">\n          <ion-list class="shipping-address-list">\n            <ion-item class="side-heading-background">\n              <ion-label color="side-heading-color">{{"ShippingAddress" | translate}}\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"FirstName" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_first_name" name="first_name">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"LastName"| translate}}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_last_name" name="last_name">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"Company" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_company" name="shipping_company">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"StreetAddress" | translate}} 1\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_1" name="address_1">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"StreetAddress" | translate}} 2\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_2" name="address_2">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"City" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_city" name="shipping_city">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label> {{"Country" | translate}}\n              </ion-label>\n              <ion-select [(ngModel)]="form.shipping_country" (ngModelChange)="getRegion(form.shipping_country)" name="shipping_country">\n                <div *ngFor="let field of form.country.countries | keys">\n                  <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n                  </ion-option>\n                </div>\n              </ion-select>\n            </ion-item>\n            <ion-item *ngIf="states">\n              <ion-label> {{"State" | translate}} \n              </ion-label>\n              <ion-select [(ngModel)]="form.shipping_state" name="form.shipping_state">\n                <div *ngFor="let field of states | keys">\n                  <ion-option value="{{field.key}}">{{field.value}}\n                  </ion-option>\n                </div>\n              </ion-select>\n            </ion-item>\n            <ion-item *ngIf="!states">\n              <ion-label floating>{{form.checkout_fields?.shipping?.shipping_state?.label}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_state" name="form.shipping_state">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"Postcode" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_postcode" name="shipping_postcode">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </div>\n      </form>\n    </div>\n    <ion-item *ngIf="!values.isLoggedIn" no-lines class="side-heading-background create-account">\n      <ion-label color="side-heading-color">{{"CreateAccount" | translate}}\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.register" name="subscribe">\n      </ion-toggle>\n    </ion-item>\n    <div *ngIf="form.register" class="create-account-form">\n      <form #f="ngForm">\n        <ion-list>\n          <ion-label class="create-account-label"> {{"Createanaccounttext" | translate}} \n          </ion-label>\n          <ion-item>\n            <ion-label floating>{{"password" | translate}}\n            </ion-label>\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n    </div>\n\n\n    <div *ngIf="OrderReview?.shipping" class="shipping">\n      <div no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateOrderReview()">\n          <ion-item class="side-heading-background payment-method-header" no-lines>\n            <ion-label color="side-heading-color">{{"Select a shipping method" | translate}}\n            </ion-label>\n          </ion-item>\n          <ion-item *ngFor="let method of OrderReview.shipping | keys" style="padding-left:20px">\n            <ion-label><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost  | currency:values.currency:true:\'1.2-2\'}}</span></ion-label>           \n            <ion-radio value="{{method.value.id}}">\n            </ion-radio>\n          </ion-item>\n      </div>\n    </div>\n\n<ion-list *ngIf="OrderReview?.cart">\n      <ion-item class="side-heading-background order-review-header" no-lines>\n        <ion-label color="side-heading-color">{{"Your Orders" | translate}}\n        </ion-label>\n      </ion-item>\n      <div *ngFor="let item of OrderReview.cart.cart_contents | keys">\n        <ion-row>\n          <ion-col width-75>\n            <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="OrderReview.totals.discount_total && OrderReview.totals.discount_total != 0">\n        <ion-row>\n          <ion-col width-75>\n            <ion-label no-margin>{{"Coupon" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin> - {{1*OrderReview.totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-row>\n        <ion-col width-75>\n          <ion-label no-margin>{{"SubTotal" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label no-margin>{{1*OrderReview.totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="OrderReview.totals.shipping_total != 0">\n        <ion-col width-75>\n          <ion-label>{{"Shipping" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="OrderReview.totals.fee_total != 0">\n        <ion-col width-75>\n          <ion-label>{{"Fee" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.fee_total | currency:values.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="OrderReview.totals.cart_contents_total != 0">\n        <ion-col width-75>\n          <ion-label>{{"Subtotal_ex_tax" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>  \n\n      <ion-row *ngIf="OrderReview.totals.total_tax != 0">\n        <ion-col width-75>\n          <ion-label>{{"Tax_total" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-75>\n          <ion-label no-margin>\n            <b>{{"Total" | translate}}\n            </b>\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label no-margin>\n            <b>{{1*OrderReview.totals.total | currency:values.currency:true:\'1.2-2\'}}\n            </b>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-item class="side-heading-background payment-method-header" no-lines>\n      <ion-label color="side-heading-color">{{"SelectPaymentMethod" | translate}}\n      </ion-label>\n    </ion-item>\n    <div *ngIf="form.payment">\n      <ion-list no-margin text-wrap radio-group [(ngModel)]="form.payment_method" (ngModelChange)="changePayment()">\n        <ion-item *ngFor="let method of form.payment | keys">\n          <ion-label class="payment-method-title">{{method.value.title}}\n          </ion-label>\n          <ion-radio value="{{method.value.id}}">\n          </ion-radio>\n        </ion-item>\n      </ion-list>\n      <div *ngIf="form.payment_method != \'stripe\'" class="side-heading-background">\n        <ion-label class="payment-instructions">{{form.payment_instructions}}\n        </ion-label> \n      <ion-item *ngIf="form.terms_content" no-lines class="side-heading-background">\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n      </ion-toggle>\n      </ion-item>\n      <div class="button-margin">\n        <button ion-button color="button-color" text-uppercase [disabled]="buttonSubmit" block secondary type="submit" class="button button-block button-default" (click)="checkout()">{{"PlaceOrder" | translate}}\n        </button> \n      </div>\n        \n      </div>\n    </div>\n    <div *ngIf="form.payment_method ==\'stripe\'" class="side-heading-background stripe-payment">\n      <ion-label [innerHTML]="form.payment.stripe.description">\n      </ion-label>\n      <form #f="ngForm">\n        <ion-list no-margin>\n          <ion-item class="side-heading-background">\n            <ion-label color="side-heading-color">Stripe Card Details\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"CardNumber" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_number" name="stripe_number">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"ExpiryMonth" | translate}} (MM)\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_month" name="stripe_exp_year">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"ExpiryYear" |translate}} (YYYY)\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_year" name="stripe_exp_year">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"CardCode" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_code" name="stripe_code">\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </form> \n     <ion-item class="side-heading-background" no-lines>\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n      </ion-toggle>\n    </ion-item>\n\n      <div class="button-margin">\n      <button ion-button color="button-color" text-uppercase *ngIf="form.payment_method ==\'stripe\'" [disabled]="buttonSubmit" (click)="checkout()" block secondary type="submit" class="button button-block button-default">{{"PlaceOrder" | translate}}\n      </button>\n      </div>\n    </div>\n    <br>\n    <br>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/checkout/billing-address-form/billing-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */]])
    ], BillingAddressForm);
    return BillingAddressForm;
}());

//# sourceMappingURL=billing-address-form.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Service = /** @class */ (function () {
    function Service(reqhttp, http, config, values, loadingCtrl, nativeStorage) {
        this.reqhttp = reqhttp;
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.dir = 'left';
        this.filter = {};
        this.has_more_items = true;
        this.mainCategories = [];
        this.filter.page = 1;
    }
    Service.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.data = data;
                _this.values.currency = data.currency;
                _this.login_nonce = data.login_nonce;
                _this.banners = data.banners;
                if (data.user.data != undefined) {
                    _this.values.isLoggedIn = data.user.data.status;
                    _this.values.customerId = data.user.data.ID;
                    _this.values.customerName = data.user.data.user_nicename;
                    _this.values.logoutUrl = _this.encodeUrl(data.user.data.url);
                }
                _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products/categories?', false), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.categories = data;
                    for (var i = 0; i < _this.categories.product_categories.length; i++) {
                        if (_this.categories.product_categories[i].parent == '0') {
                            _this.mainCategories.push(_this.categories.product_categories[i]);
                        }
                    }
                    _this.nativeStorage.getItem('loginData').then(function (data) { return _this.login(data); }, function (error) { return console.error(error); });
                    _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.cart = data;
                        _this.values.updateCart(_this.cart);
                    });
                    resolve(_this.categories);
                });
            });
        });
    };
    Service.prototype.getNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.login = function (loginData) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", loginData.username);
        params.append("password", loginData.password);
        params.append("_wpnonce", this.login_nonce);
        params.append("login", 'Login');
        params.append("redirect", this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (!data.errors) {
                    _this.values.isLoggedIn = data.data.status;
                    _this.values.customerName = data.data.display_name;
                    _this.values.customerId = data.data.ID;
                    _this.values.logoutUrl = _this.encodeUrl(data.data.url);
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append("customer_id", _this.values.customerId.toString());
                    _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append("customer_id", _this.values.customerId.toString());
                    _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        console.log(data);
                    });
                    _this.nativeStorage.setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password
                    }).then(function (data) { return console.log('Login Details Stored'); }, function (error) { return console.error(error); });
                }
                resolve(data);
            }, function (err) {
                resolve(JSON.parse(err._body));
            });
        });
    };
    Service.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    Service.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', _this.config.options).subscribe(function (data) {
                _this.values.isLoggedIn = false;
                _this.values.customerName = "";
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                });
                resolve(_this.cart);
            });
        });
    };
    Service.prototype.passwordreset = function (email, nonce, url) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("user_login", email);
        params.append("wc_reset_password", "true");
        params.append("_wpnonce", nonce);
        params.append("_wp_http_referer", '/my-account/lost-password/');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/my-account/lost-password/', params).subscribe(function (status) {
                resolve(status);
            });
        });
    };
    Service.prototype.passwordResetNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/customers/' + _this.values.customerId + '?', false), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.saveAddress = function (address) {
        var _this = this;
        var params = {
            customer: address
        };
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp.put(_this.config.setUrl('PUT', '/wc-api/v3/customers/' + _this.values.customerId + '?', false), params, {}).then(function (data) {
                resolve(JSON.parse(data.data));
            });
        });
    };
    Service.prototype.pushNotification = function (notification) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", notification.device_id);
        params.append("platform", notification.platform);
        params.append("email", notification.email);
        params.append("city", notification.city);
        params.append("state", notification.state);
        params.append("country", notification.country);
        params.append("pincode", notification.pincode);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.pushNotify = function (deviceId, platform) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", deviceId);
        params.append("platform", platform);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/orders/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.country = data;
                resolve(_this.country);
            });
        });
    };
    Service.prototype.registerCustomer = function (customer) {
        var _this = this;
        var params = {
            customer: customer,
        };
        return new Promise(function (resolve) {
            _this.http.post(_this.config.setUrl('POST', '/wc-api/v3/customers?', false), params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.user = data;
                resolve(_this.user);
            }, function (err) {
                resolve(err.json());
            });
        });
    };
    Service.prototype.getOrders = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/orders?', filter), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.updateOrder = function (data, id) {
        var _this = this;
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp.put(_this.config.setUrl('PUT', '/wc-api/v3/orders/' + id + '?', false), data, {}).then(function (data) {
                _this.status = JSON.parse(data.data);
                resolve(_this.status);
            }, function (err) {
                console.log(JSON.parse(err.error));
                resolve(JSON.parse(err.error));
            });
        });
    };
    Service.prototype.presentLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    Service.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Service.prototype.getPage = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("page_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getProducts = function () {
        var _this = this;
        this.http.get(this.config.setUrl('GET', '/wc-api/v3/products?', false), this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.products = data;
        });
    };
    Service.prototype.loadMore = function () {
        var _this = this;
        this.filter.page += 1;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products?', _this.filter), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.handleMore(data);
                resolve(true);
            });
        });
    };
    Service.prototype.handleMore = function (results) {
        if (results != undefined) {
            for (var i = 0; i < results.products.length; i++) {
                this.products.products.push(results.products[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Functions = /** @class */ (function () {
    function Functions(alert, loadingController, values) {
        this.alert = alert;
        this.loadingController = loadingController;
        this.values = values;
    }
    Functions.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    Functions.prototype.presentLoading = function () {
        this.loader = this.loadingController.create({
            content: this.values.lan.WaitTitle
        });
        this.loader.present();
    };
    Functions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__values__["a" /* Values */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderSummary = /** @class */ (function () {
    function OrderSummary(nav, service, params, functions, values) {
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.functions = functions;
        this.values = values;
        this.id = params.data;
    }
    OrderSummary.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getOrderSummary(this.id)
            .then(function (results) { return _this.orderSummary = results; });
    };
    OrderSummary.prototype.Continue = function () {
        this.values.count = 0;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    OrderSummary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/checkout/order-summary/order-summary.html"*/'<ion-header>\n  <ion-navbar color="header" hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-wrap text-center>{{"OrderSummary" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="order-summary">\n  <ion-spinner *ngIf="!orderSummary" name="crescent">\n  </ion-spinner>\n  <div *ngIf="orderSummary" class="margin">\n    <div *ngIf="orderSummary.order">\n      <div class="thank-you-message">\n        <ion-item>\n          <h2>{{"OrderReceived" | translate}} \n          </h2>\n          <h3>{{"orderreceivedtext" | translate}}\n          </h3>\n        </ion-item>\n      </div>\n      <div *ngIf="orderSummary" class="summary">\n        <ion-item no-lines>\n          <h2>{{"OrderNumber" | translate}} : {{orderSummary.order.order_number}}\n          </h2>\n          <h2>{{"Orderdate" | translate}} : {{orderSummary.order.created_at | date:\'medium\'}}\n          </h2>\n          <h2>{{"Totalquantity" | translate}} :  {{orderSummary.order.total_line_items_quantity}}\n          </h2>\n          <h2>{{"Totals" | translate}} :  {{1*orderSummary.order.total | currency:values.currency:true:\'1.2-2\'}}\n          </h2>\n          <h2>{{"PaymentMethod" | translate}} :  {{orderSummary.order.payment_details.method_title}}\n          </h2>\n        </ion-item>\n      </div>\n      <div class="order-details">\n        <ion-item no-lines>\n          <ion-label class="side-header">{{"OrderDetails" | translate}}\n          </ion-label>\n        </ion-item>\n        <div *ngFor="let item of orderSummary.order.line_items | keys">\n          <ion-row >\n            <ion-col width-75>\n              <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label no-margin>{{1*item.value.subtotal | currency:values.currency:true:\'1.2-2\' }}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-row *ngIf="orderSummary.order.coupon_lines.length != 0" > \n          <ion-col width-75>\n            <ion-label no-margin>{{"Coupon" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*orderSummary.order.total_discount | currency:values.currency:true:\'1.2-2\' }}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row > \n          <ion-col width-75>\n            <ion-label no-margin>{{"SubTotal" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*orderSummary.order.subtotal | currency:values.currency:true:\'1.2-2\' }}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row > \n          <ion-col width-50>\n            <ion-label no-margin>{{"Shipping" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-50 text-right>\n            <ion-label no-margin>{{orderSummary.order.shipping_methods}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row > \n          <ion-col width-50>\n            <ion-label no-margin>{{"PaymentMethod" |translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-50 text-right>\n            <ion-label no-margin>{{orderSummary.order.payment_details.method_title}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row class="order-total"> \n          <ion-col width-75>\n            <ion-label class="side-header">{{"Totals" |translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label>\n              <b>{{1*orderSummary.order.total | currency:values.currency:true:\'1.2-2\' }}\n              </b>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf="orderSummary">\n  <button ion-button full color="button-color" no-padding no-margin text-uppercase (click)="Continue()">\n    {{"Continue" | translate}}\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/checkout/order-summary/order-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], OrderSummary);
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsCondition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsCondition = /** @class */ (function () {
    function TermsCondition(nav) {
        this.nav = nav;
    }
    TermsCondition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/checkout/terms-condition/terms-condition.html"*/'<ion-header>\n   <ion-navbar color="header">\n      <ion-title text-center>{{"TermsConditions" | translate}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding class="terms-condition">\n   <div class="terms">\n   <p>Add terms and conditions here</p>\n   </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/checkout/terms-condition/terms-condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], TermsCondition);
    return TermsCondition;
}());

//# sourceMappingURL=terms-condition.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryService = /** @class */ (function () {
    function CategoryService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CategoryService.prototype.load = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products?', params), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products?', filter), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CategoryService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CategoryService.prototype.search = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products?', params), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = /** @class */ (function () {
    function ProductService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.product = data;
                resolve(_this.product);
            });
        });
    };
    ProductService.prototype.getReviews = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products/' + id + '/reviews/' + '?', false), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reviews = data;
                resolve(_this.reviews);
            });
        });
    };
    ProductService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
                console.log(param);
                console.log(params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    ProductService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    ProductService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(nav, service, values, params) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.page = 1;
        this.shouldShowCancel = true;
        this.showSearch = true;
        this.filter = {};
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.myInput = "";
    }
    SearchPage.prototype.ionViewWillLeave = function () {
        this.showSearch = false;
    };
    SearchPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter['filter[q]'] = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.products = results; });
    };
    SearchPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    SearchPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], id);
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page += 1;
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results.products != undefined) {
            for (var i = 0; i < results.products.length; i++) {
                this.products.products.push(results.products[i]);
            }
            ;
        }
        if (results.products.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.addToCart = function (id) {
        var _this = this;
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"' + res[0] + '":"' + res[1] + '",';
        }
        text += '"product_id":"' + id + '",';
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.service.addToCart(obj)
            .then(function (results) { return _this.updateCart(results); });
    };
    SearchPage.prototype.updateCart = function (a) {
    };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    SearchPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-searchbar\n      *ngIf="showSearch"\n     [(ngModel)]="myInput"\n     [showCancelButton]="shouldShowCancel"\n     (ionInput)="onInput($event)"\n     (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content class="search">\n\n  <div *ngIf="products" class="products-search">     \n      <h2 *ngIf="!products?.products?.length" style="font-size: 15px;text-align: center;margin-top: 30px">No products found!.</h2>\n    <div *ngIf="products?.products?.length">\n      <div *ngIf="values.listview">\n        <ion-item no-lines class="item-name">\n          <ion-label text-uppercase>{{"Products" | translate}}\n          </ion-label>\n          <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n            <ion-icon ios="ios-grid" md="md-grid">\n            </ion-icon>\n          </button>\n        </ion-item>\n        <ion-list *ngIf="products.products">\n          <div class="item-list" *ngFor="let item of products.products">\n            <ion-item no-lines class="price-list" >\n              <ion-thumbnail item-left class="stock-list">\n                <a (click)="getProduct(item.id)">\n                  <img src="{{item.images[0].src}}">\n                  <button ion-button color="danger" *ngIf="!item.in_stock">{{"OUTOFSTOCK" | translate}}\n                  </button>\n                </a>\n              </ion-thumbnail> \n              <a (click)="getProduct(item.id)">\n                <div class="product-name-top">\n                  <h2>{{item.title}}\n                  </h2>\n                  <p class="max-lines" [innerHTML]="item.description">\n                  </p>\n                </div>\n                <div class="bottom-left">\n                  <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-del" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                  </h3>\n                </div>\n              </a>\n              <div class="bottom-right-button">\n                <button ion-button text-uppercase color="button-color" item-right outline *ngIf="item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                  {{"Add" | translate}}\n                </button>\n                <button ion-button icon-only  item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                  <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                  </ion-icon>\n                </button>\n                <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                </button>\n                <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                  <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                  </ion-icon>\n                </button>\n                <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear *ngIf="!item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                  {{button}}\n                </button>\n              </div>\n            </ion-item>\n          </div>\n        </ion-list>\n      </div>\n      <div *ngIf="!values.listview">\n        <ion-item no-lines class="item-name">\n          <ion-label text-uppercase>{{"Products" | translate}}\n          </ion-label>\n          <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n            <ion-icon ios="ios-list-box" md="ios-list-box">\n            </ion-icon>\n          </button>\n        </ion-item>\n        <div class="card-background-page grid" *ngIf="products.products">\n          <ion-row class="row unlimited-items">\n            <ion-col class="col" *ngFor="let item of products.products">\n              <ion-card>\n                <ion-card-content class="stock">\n                  <a (click)="getProduct(item.id)">\n                    <img src="{{item.images[0].src}}">\n                    <button ion-button color="danger" *ngIf="!item.in_stock">{{"OUTOFSTOCK" | translate}}\n                    </button>\n                  </a>\n                </ion-card-content>\n                <ion-label class="product-label">{{item.title}}\n                </ion-label>\n                <ion-item no-padding class="price-list">\n                  <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                  </h3>\n                  <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear *ngIf="!item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                    {{button}}\n                  </button>\n                  <button ion-button text-uppercase color="button-color" item-right clear *ngIf="item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                    {{"Add" | translate}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                    <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                    </ion-icon>\n                  </button>\n                  <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                    <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                    </ion-icon>\n                  </button>\n                </ion-item>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>    \n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n    <ion-infinite-scroll-content\n       loadingSpinner="crescent"\n       loadingText="{{\'Loading more items..\' | translate}}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = /** @class */ (function () {
    function SearchService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    SearchService.prototype.getSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products?', filter), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    SearchService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgotten_forgotten__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountLogin = /** @class */ (function () {
    function AccountLogin(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.loginData = {};
        this.buttonText = "Login";
        this.service.getNonce()
            .then(function (results) { return _this.nonce = results; });
    }
    AccountLogin.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = "Logging In...";
            this.service.login(this.loginData)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        this.disableSubmit = false;
        this.buttonText = "Login";
        if (!results.errors) {
            this.functions.showAlert('success', 'You have successfully logged in');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.functions.showAlert('error', 'invalid username/password');
        }
    };
    AccountLogin.prototype.forgotten = function (loginData) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__forgotten_forgotten__["a" /* AccountForgotten */]);
    };
    AccountLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/login/login.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"LogIn"| translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="account-login">\n  <div class="margin">\n    <div>\n      <img src="assets/image/login_logo.png">\n    </div>\n    <form #f="ngForm" class="login">\n      <ion-list>\n        <ion-item>\n          <!--ion-label floating>{{"username" | translate}}</ion-label-->\n          <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname" placeholder="Username">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <!--ion-label floating>{{"password" | translate}}</ion-label-->\n          <ion-input required type="password" [(ngModel)]="loginData.password" name="password" placeholder="Password">\n          </ion-input>\n        </ion-item>\n      </ion-list>\n      <div class="margin"> \n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="login(loginData)">{{buttonText}}\n        </button>\n        <br>\n        <button ion-button clear color="button-color" type="submit" class="button button-block button-clear" text-uppercase (click)="forgotten()">{{"ForgotPassword" | translate}} ?\n        </button>\n      </div>\n    </form>\n    <br/>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountLogin);
    return AccountLogin;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotten; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountForgotten = /** @class */ (function () {
    function AccountForgotten(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.reset = "reset";
        this.loadForgotten = null;
        this.forgottenData = [];
        this.service.passwordResetNonce()
            .then(function (results) { return _this.handleNonce(results); });
    }
    AccountForgotten.prototype.forgotten = function (email) {
        var _this = this;
        if (this.validateForm()) {
            this.reset = "resetting...";
            this.disableSubmit = true;
            this.service.passwordreset(email, this.nonce, this.url)
                .then(function (results) { return _this.handleResult(results, email); });
        }
    };
    AccountForgotten.prototype.validateForm = function () {
        if (this.forgottenData.email == undefined || this.forgottenData.email == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountForgotten.prototype.handleNonce = function (results) {
        this.nonce = results.nonce;
        this.url = results.url;
    };
    AccountForgotten.prototype.handleResult = function (results, email) {
        this.reset = "reset";
        this.disableSubmit = false;
        this.functions.showAlert("SUCCESS", "An email with password reset link has been sent to your mail address " + email);
        this.nav.pop();
    };
    AccountForgotten = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/forgotten/forgotten.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <ion-title text-center>{{"ResetPassword" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="forgotten">\n  <div class="margin">\n    <form #f="ngForm">\n      <ion-item>\n        <ion-label floating>{{"Enteremailaddress"| translate}}\n        </ion-label>\n        <ion-input required type="email" [(ngModel)]="forgottenData.email" name="email">\n        </ion-input>\n      </ion-item>\n      <h2>{{"ForgotPasswordReset" | translate}}\n      </h2>\n      <button ion-button block color="button-color" class="button button-block button-default" [disabled]="disableSubmit" (click)="forgotten(forgottenData.email)">{{reset | translate}}\n      </button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/forgotten/forgotten.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountForgotten);
    return AccountForgotten;
}());

//# sourceMappingURL=forgotten.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Address = /** @class */ (function () {
    function Address(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.service.getAddress()
            .then(function (results) { return _this.addresses = results; });
    }
    Address.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses.customer);
    };
    Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/address/address.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-wrap text-center>{{"AddressBook" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="account-address">\n<ion-spinner *ngIf="!addresses" name="crescent" style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px" ></ion-spinner>\n   <div *ngIf="addresses" class="address">\n      <div *ngIf="addresses.customer.billing_address">\n      <ion-card>\n        <ion-card-header style="background-color: #f9f9f9">\n          {{"BillingAddress" | translate}}\n        </ion-card-header>\n        <ion-card-content style="margin-top: 10px">\n          {{addresses.customer.billing_address.first_name}} {{addresses.customer.billing_address.last_name}}<br *ngIf="addresses.customer.billing_address.first_name">\n          {{addresses.customer.billing_address.address_1}}<br *ngIf="addresses.customer.billing_address.address_1">\n          {{addresses.customer.billing_address.address_2}}<br *ngIf="addresses.customer.billing_address.address_2">\n          {{addresses.customer.billing_address.city}} {{addresses.customer.billing_address.state}}<br *ngIf="addresses.customer.billing_address.city">\n          {{addresses.customer.billing_address.phone}}<br *ngIf="addresses.customer.billing_address.phone">\n          {{addresses.customer.billing_address.email}}<br *ngIf="addresses.customer.billing_address.email">\n          {{addresses.customer.billing_address.country}} {{addresses.customer.billing_address.postcode}}<br *ngIf="addresses.customer.billing_address.postcode">\n        </ion-card-content>\n      </ion-card>\n      </div>\n      <div *ngIf="addresses.customer.shipping_address">\n      <ion-card>\n        <ion-card-header style="background-color: #f9f9f9">\n          {{"ShippingAddress" | translate}}\n        </ion-card-header>\n        <ion-card-content style="margin-top: 10px">\n          {{addresses.customer.shipping_address.first_name}} {{addresses.customer.shipping_address.last_name}}<br *ngIf="addresses.customer.shipping_address.first_name">\n          {{addresses.customer.shipping_address.address_1}}<br *ngIf="addresses.customer.shipping_address.address_1">\n          {{addresses.customer.shipping_address.address_2}}<br *ngIf="addresses.customer.shipping_address.address_2">\n          {{addresses.customer.shipping_address.city}} {{addresses.customer.shipping_address.state}}<br *ngIf="addresses.customer.shipping_address.city">\n          {{addresses.customer.shipping_address.phone}}<br *ngIf="addresses.customer.shipping_address.phone">\n          {{addresses.customer.shipping_address.email}}<br *ngIf="addresses.customer.shipping_address.email">\n          {{addresses.customer.shipping_address.country}} {{addresses.customer.shipping_address.postcode}}<br>\n        </ion-card-content>\n      </ion-card>\n      </div>\n      <div class="margin">\n         <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase (click)="editAddress()">{{"EditAddress" | translate}}</button>\n      </div>\n   </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Address);
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAddressForm = /** @class */ (function () {
    function EditAddressForm(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping = true;
        this.service.getCountry()
            .then(function (results) { return _this.handleContries(results); });
    }
    EditAddressForm.prototype.handleContries = function (results) {
        this.country = results;
        this.billing_states = this.country.state[this.editAddress.billing_address.country];
        this.shipping_states = this.country.state[this.editAddress.shipping_address.country];
    };
    EditAddressForm.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.country.state[countryId];
    };
    EditAddressForm.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress.shipping) {
            this.editAddress.shipping_address.first_name = this.editAddress.billing_address.first_name;
            this.editAddress.shipping_address.last_name = this.editAddress.billing_address.last_name;
            this.editAddress.shipping_address.company = this.editAddress.billing_address.company;
            this.editAddress.shipping_address.address_1 = this.editAddress.billing_address.address_1;
            this.editAddress.shipping_address.address_2 = this.editAddress.billing_address.address_2;
            this.editAddress.shipping_address.city = this.editAddress.billing_address.city;
            this.editAddress.shipping_address.country = this.editAddress.billing_address.country;
            this.editAddress.shipping_address.state = this.editAddress.billing_address.state;
            this.editAddress.shipping_address.postcode = this.editAddress.billing_address.postcode;
        }
        this.service.saveAddress(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditAddressForm.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving...";
        this.nav.pop();
    };
    EditAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/edit-address-form/edit-address-form.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Edit Address" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="edit-address-form">\n  <div>\n    <ion-list>\n      <ion-item class="side-heading-background">\n        <h2 class="heading-label">{{"Billing Address" | translate}}\n        </h2>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"First Name" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.first_name" name="first_name">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Last Name"| translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.last_name" name="last_name">\n        </ion-input>\n      </ion-item>\n      <!--ion-item>\n        <ion-label floating>{{"Company" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.company" name="company">\n        </ion-input>\n      </ion-item-->\n      <ion-item>\n        <ion-label floating>{{"Phone" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.phone" name="phone">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Email" | translate}}\n        </ion-label>\n        <ion-input required type="email" [(ngModel)]="editAddress.billing_address.email" name="email">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Street Address" | translate}} 1\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.address_1" name="address_1">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Street Address" | translate}} 2\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.address_2" name="address_2">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"City" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.city" name="city">\n        </ion-input>\n      </ion-item>\n      <ion-item *ngIf="country">\n        <ion-label>  \n          {{"Country" | translate}}\n        </ion-label>   \n        <ion-select [(ngModel)]="editAddress.billing_address.country" (ngModelChange)="getBillingRegion(editAddress.billing_address.country)" name="country">\n          <div *ngFor="let field of country.country.countries | keys">\n            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n            </ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="billing_states">\n        <ion-label>  \n          {{"State" | translate}}\n        </ion-label>   \n        <ion-select [(ngModel)]="editAddress.billing_address.state" name="state">\n          <div *ngFor="let field of billing_states | keys">\n            <ion-option value="{{field.key}}">{{field.value}}\n            </ion-option>\n          </div>\n        </ion-select>      \n      </ion-item>\n      <ion-item *ngIf="!billing_states">\n        <ion-label floating>{{"Country" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.state" name="state">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Postcode" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing_address.postcode" name="postcode">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-item class="side-heading-background">\n    <ion-label class="heading-label">{{"Same For Shipping" | translate}}\n    </ion-label>\n    <ion-toggle checked="true" [(ngModel)]="editAddress.shipping_true" name="subscribe">\n    </ion-toggle>\n  </ion-item>\n  <br>\n  <div *ngIf="!editAddress.shipping_true">\n    <ion-list>\n      <ion-item class="side-heading-background">\n        <h2 class="heading-label">{{"Shipping Address" | translate}}\n        </h2>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"First Name" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.first_name" name="firstname">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Last Name"| translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.last_name" name="last_name">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Company" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.company" name="company">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Street Address" | translate}} 1\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.address_1" name="address_1">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Street Address" | translate}} 2\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.address_2" name="address_2">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"City" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.city" name="city">\n        </ion-input>\n      </ion-item>\n      <ion-item *ngIf="country">\n        <ion-label>  \n          {{"Country" | translate}}\n        </ion-label>   \n        <ion-select [(ngModel)]="editAddress.shipping_address.country" (ngModelChange)="getShippingRegion(editAddress.shipping_address.country)" name="country">\n          <div *ngFor="let field of country.country.countries | keys">\n            <ion-option value="{{field.key}}">{{field.value}}\n            </ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="shipping_states">\n        <ion-label>  \n          {{"State" | translate}}\n        </ion-label>   \n        <ion-select [(ngModel)]="editAddress.shipping_address.state" name="state">\n          <div *ngFor="let field of shipping_states | keys">\n            <ion-option value="{{field.key}}">{{field.value}}\n            </ion-option>\n          </div>\n        </ion-select>      \n      </ion-item>\n      <ion-item *ngIf="!shipping_states">\n        <ion-label floating>{{"Country" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.state" name="state">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Postcode" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping_address.postcode" name="postcode">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="margin">\n    <button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/edit-address-form/edit-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], EditAddressForm);
    return EditAddressForm;
}());

//# sourceMappingURL=edit-address-form.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
var Config = /** @class */ (function () {
    function Config() {
        this.url = 'http://example.com';
        this.consumerKey = 'ck_bf87b818dfd31fdg4354766bcd82cb5f3b07e';
        this.consumerSecret = 'cs_11f6613b7eeedsfsa435ac814058b67cda9c5';
        this.oneSignalAppId = '2916e1f4-b655-47b4-8ac8-4e7gdsgf006c';
        this.googleProjectId = '5755432549046';
        this.language = 'english';
        this.appDir = 'ltr';
        this.appRateIosAppId = '12345678';
        this.appRateAndroidLink = 'https://play.google.com/store/apps/details?id=com.mstoreapp.wootab0002&hl=en';
        this.appRateWindowsId = '12345678';
        this.shareAppMessage = 'Hi Check this app and download it';
        this.shareAppSubject = 'Hi';
        this.shareAppURL = 'https://play.google.com/store/apps/details?id=com.mstoreapp.wootab0002&hl=en';
        this.shareAppChooserTitle = 'Pick an app';
        this.supportEmail = 'support@mstoreapp.com';
        this.options = {};
        this.options.withCredentials = true;
        this.options.headers = headers;
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    Config.prototype.setOauthNonce = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    Config.prototype.setUrl = function (method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
        }
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Orders = /** @class */ (function () {
    function Orders(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter['filter[customer_id]'] = this.values.customerId.toString();
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    Orders.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Orders.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results.orders != undefined) {
            for (var i = 0; i < results.orders.length; i++) {
                this.orders.orders.push(results.orders[i]);
            }
            ;
        }
        if (results.orders.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Orders.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    Orders.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "cancelled"
            }
        }, id)
            .then(function (results) { return _this.handleCancelOrder(results); });
    };
    Orders.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({
            "order": {
                "status": "pending"
            }
        }, id)
            .then(function (results) { return _this.handleReOrder(results); });
    };
    Orders.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/orders/orders.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title  text-center>{{"LastOrders" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="account-order">\n  <ion-spinner *ngIf="!orders" name="crescent">\n  </ion-spinner>\n  <div *ngIf="orders">\n\n    <div class="no-orders">\n    <h4 *ngIf="orders.orders.length == 0" text-center no-lines>\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n      </button>\n    </h4>\n    </div>\n\n    <div *ngIf="orders.orders.length">\n      <ion-item *ngFor="let item of orders.orders">\n        <h2>\n          <b>{{"OrderNumber" | translate}} :\n          </b> {{item.order_number}}\n        </h2>\n        <h2>\n          <b>{{"Orderdate" | translate}} :\n          </b> {{item.created_at | date:\'medium\'}}\n        </h2>\n        <h2>\n          <b>{{"Shipto" | translate}} :\n          </b> {{item.shipping_address.first_name}} {{item.shipping_address.last_name}}, {{item.shipping_address.address_1}}, {{item.shipping_address.address_2}}, {{item.shipping_address.city}}, {{item.shipping_address.state}}, {{item.shipping_address.country}}, {{item.shipping_address.postcode}}\n        </h2>\n        <h2>\n          <b>{{"Status" | translate}} :\n          </b> {{item.status}}\n        </h2>\n        <h2>\n          <b>{{"Quantity" | translate}} :\n          </b> {{item.total_line_items_quantity}}\n        </h2>\n        <h2>\n          <b>{{"SubTotal" | translate}} :\n          </b> {{1*item.subtotal  }}\n        </h2>\n        <h2>\n          <b>{{"Totals" | translate}} :\n          </b> {{1*item.total  }}\n        </h2>\n        <ion-row class="row-buttons">\n          <ion-col no-padding width-50>\n            <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.id)">\n              <ion-icon name="ios-eye">\n              </ion-icon>\n              {{"ViewDetails" | translate}} \n            </button>\n          </ion-col>\n          <ion-col no-padding width-50>\n            <button *ngIf="item.status != \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="cancelOrder(item.id)">		\n              <ion-icon ios="ios-close" md="md-close">\n              </ion-icon>  		\n              {{"Cancel" | translate}} \n            </button>\n            <button *ngIf="item.status == \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="reOrder(item.id)">\n              <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n              </ion-icon>		  		\n              {{"Reorder" | translate}} \n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div> \n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n      <ion-infinite-scroll-content\n      loadingSpinner="crescent"\n      loadingText="{{\'Loading more items..\' | translate}}">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetails = /** @class */ (function () {
    function OrderDetails(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/order-details/order-details.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"OrderInfo" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="order-details">\n  <ion-spinner *ngIf="!orderDetails" name="crescent">\n  </ion-spinner>\n  <div *ngIf="orderDetails">\n    <ion-item-group>\n      <ion-item-divider>{{"OrderNumber" | translate }}\n      </ion-item-divider>\n      <ion-item no-lines>{{orderDetails.order.order_number}}\n      </ion-item>\n      <ion-item-divider>{{"Date" | translate}}\n      </ion-item-divider>\n      <ion-item no-lines>{{orderDetails.order.created_at | date:\'medium\'}}\n      </ion-item>\n      <ion-item-divider>{{"PaymentMethod" | translate}}\n      </ion-item-divider>\n      <ion-item no-lines>{{orderDetails.order.payment_details.method_title}}\n      </ion-item>\n      <ion-item-divider>{{"BillingAddress" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        {{orderDetails.order.billing_address.first_name}}\n        {{orderDetails.order.billing_address.last_name}},\n        <br>\n        {{orderDetails.order.billing_address.email}}\n        <br>\n        {{orderDetails.order.billing_address.phone}}\n        <br>\n        {{orderDetails.order.billing_address.address_1}},\n        <br>\n        {{orderDetails.order.billing_address.address_2}},\n        <br>\n        {{orderDetails.order.billing_address.city}}, \n        {{orderDetails.order.billing_address.state}}\n        <br>\n        {{orderDetails.order.billing_address.postcode}}\n      </ion-item>\n      <ion-item-divider>{{"ShippingMethod" | translate}}\n      </ion-item-divider>\n      <ion-item no-lines>{{orderDetails.order.shipping_methods}}\n      </ion-item>\n      <ion-item-divider>{{"ShippingAddress" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        {{orderDetails.order.shipping_address.first_name}}\n        {{orderDetails.order.shipping_address.last_name}},\n        <br>\n        {{orderDetails.order.shipping_address.company}}\n        <br>\n        {{orderDetails.order.shipping_address.address_1}},\n        <br>\n        {{orderDetails.order.shipping_address.address_2}},\n        <br>\n        {{orderDetails.order.shipping_address.city}}, \n        {{orderDetails.order.shipping_address.state}}\n        <br>\n        {{orderDetails.order.shipping_address.country}}\n        <br>\n        {{orderDetails.order.shipping_address.postcode}}\n      </ion-item>\n      <ion-item-divider>{{"ProductDetails" | translate}}\n      </ion-item-divider>\n      <ion-item *ngFor="let item of orderDetails.order.line_items">\n        <h2>{{"ProductName" | translate}} : {{item.name}}\n        </h2>\n        <h2>{{"Price" | translate}} : {{item.price}}\n        </h2>\n        <h2>{{"Quantity" | translate}} : {{item.quantity}}\n        </h2>     \n        <h2>{{"SubTotal" | translate}} : {{1*item.subtotal}}\n        </h2>\n      </ion-item>\n      <ion-item-divider>{{"Totals" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        <ion-row>\n          <ion-col>{{"SubTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.order.subtotal}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col> {{"ShippingTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.order.total_shipping}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>{{"TaxTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.order.total_tax}}\n          </ion-col>\n        </ion-row>\n        <ion-row text-uppercase>\n          <ion-col>{{"GrandTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.order.total}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/order-details/order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], OrderDetails);
    return OrderDetails;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountRegister = /** @class */ (function () {
    function AccountRegister(nav, service, functions, oneSignal, values, platform) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.oneSignal = oneSignal;
        this.values = values;
        this.platform = platform;
        this.disableSubmit = false;
        this.RegisterAccount = "RegisterAccount";
        this.registerData = {};
        this.countries = {};
        this.registerData.billing_address = {};
        this.registerData.shipping_address = {};
        this.service.getNonce()
            .then(function (results) { return _this.handleResults(results); });
    }
    AccountRegister.prototype.handleResults = function (results) {
        this.countries = results;
    };
    AccountRegister.prototype.getBillingRegion = function (countryId) {
        this.billing_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.validateForm = function () {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false;
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false;
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
        this.registerData.username = this.registerData.email;
        this.registerData.billing_address.email = this.registerData.email;
        this.registerData.billing_address.first_name = this.registerData.first_name;
        this.registerData.billing_address.last_name = this.registerData.last_name;
        this.registerData.shipping_address.first_name = this.registerData.first_name;
        this.registerData.shipping_address.last_name = this.registerData.last_name;
        this.registerData.shipping_address.company = this.registerData.billing_address.company;
        this.registerData.shipping_address.address_1 = this.registerData.billing_address.address_1;
        this.registerData.shipping_address.address_2 = this.registerData.billing_address.address_2;
        this.registerData.shipping_address.city = this.registerData.billing_address.city;
        this.registerData.shipping_address.state = this.registerData.billing_address.state;
        this.registerData.shipping_address.postcode = this.registerData.billing_address.postcode;
        this.registerData.shipping_address.country = this.registerData.billing_address.country;
        return true;
    };
    AccountRegister.prototype.registerCustomer = function () {
        var _this = this;
        this.errors = "";
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.RegisterAccount = "Registering...";
            this.service.registerCustomer(this.registerData)
                .then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.handleRegister = function (results) {
        var _this = this;
        console.log(results.errors);
        this.disableSubmit = false;
        this.RegisterAccount = "RegisterAccount";
        if (!results.errors) {
            this.countries.checkout_login;
            this.service.login(this.registerData)
                .then(function (results) { return _this.loginStatus = results; });
            if (this.platform.is('cordova')) {
                this.oneSignal.sendTags({ email: this.registerData.email, pincode: this.registerData.billing_address.postcode, city: this.registerData.billing_address.city });
            }
            this.functions.showAlert("Success", "Registration successfull..");
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    };
    AccountRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/register/register.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"RegisterAccount" | translate}}\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n<ion-content class="account-register">\n  <div>\n    <form #f="ngForm">\n      <ion-list>\n        <ion-list-header>\n          <b primary>{{"AccountInfo" | translate}}\n          </b>\n        </ion-list-header>\n        <ion-item>\n          <ion-label floating>{{"FirstName" | translate}}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="registerData.first_name" name="firstname">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"LastName" | translate}}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="registerData.last_name" name="lastname">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Email" | translate}}\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="registerData.email" name="Email">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Password" | translate}}\n          </ion-label>\n          <ion-input type="password" [(ngModel)]="registerData.password" name="password">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Company" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.company" name="billing_company">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Phone" | translate}}\n          </ion-label>\n          <ion-input required type="number" [(ngModel)]="registerData.billing_address.phone" name="billing_phone">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"StreetAddress" | translate}} 1\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.address_1" name="billing_address_1">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"StreetAddress" | translate}} 2\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.address_2" name="billing_address_2">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"City" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.city" name="billing_city">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Postcode" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.postcode" name="postcode">\n          </ion-input>\n        </ion-item>\n        <ion-item *ngIf="countries.country">     \n          <ion-label>  \n            {{"Country" | translate}}\n          </ion-label>   \n          <ion-select [(ngModel)]="registerData.billing_address.country" (ngModelChange)="getBillingRegion(registerData.billing_address.country)" name="country">\n            <div *ngFor="let field of countries.country.countries | keys">\n              <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span></ion-option>\n            </div>\n          </ion-select>      \n        </ion-item>\n        <ion-item *ngIf="billing_states">  \n          <ion-label>  \n            {{"State" | translate}}\n          </ion-label>   \n          <ion-select [(ngModel)]="registerData.billing_address.state" name="state">\n            <div *ngFor="let field of billing_states | keys">\n              <ion-option value="{{field.key}}">{{field.value}}\n              </ion-option>\n            </div>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="!billing_states">\n          <ion-label floating>{{"State" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing_address.state" name="state">\n          </ion-input>\n        </ion-item>\n      </ion-list>\n\n        <div *ngIf="errors" class="error-message">\n            <h2 *ngFor="let item of errors | keys">{{item.value.message}}\n            </h2>\n        </div>\n\n      <div class="margin"> \n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="registerCustomer()">{{RegisterAccount | translate}}\n        </button>\n      </div>\n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], AccountRegister);
    return AccountRegister;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WishlistPage = /** @class */ (function () {
    function WishlistPage(nav, values, params, functions, service) {
        var _this = this;
        this.nav = nav;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.service = service;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
    }
    WishlistPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.service.deleteItem(id)
            .then(function (results) { return _this.updateWish(results, id); });
    };
    WishlistPage.prototype.updateWish = function (results, id) {
        var _this = this;
        if (results.status == "success") {
            this.service.loadWishlist()
                .then(function (results) { return _this.wishlist = results; });
            this.values.wishlistId.splice(id, 0);
        }
    };
    WishlistPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    WishlistPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            this.service.addToCart(id)
                .then(function (results) { return _this.updateCart(results, id); });
        }
    };
    WishlistPage.prototype.updateCart = function (results, id) {
        var _this = this;
        if (results.error) {
            this.functions.showAlert("ERROR", "Unable to add to Wishlist");
        }
        else {
            this.service.deleteItem(id)
                .then(function (results) { return _this.updateWishlist(results); });
        }
    };
    WishlistPage.prototype.updateWishlist = function (results) {
        var _this = this;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
        this.functions.showAlert("SUCCESS", "Item has been added to cart");
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/wishlist/wishlist.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Wishlist"| translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-cart item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="wishlistPage">\n\n<div *ngIf="wishlist?.error" class="margin">\n    <h2>{{wishlist.message}}\n    </h2>\n</div>\n\n    <div *ngIf="wishlist">\n    <div *ngIf="wishlist.length">\n    <div *ngFor="let item of wishlist | keys"  class="wish-list">\n\n    <ion-item no-lines>\n    <ion-thumbnail item-left>\n        <img src="{{item.value.image_thumb}}">\n    </ion-thumbnail>\n\n            <h2 wrap-text>{{item.value.name}}\n            </h2>\n            <h3 wrap-text > {{"Price" | translate}}: {{item.value.price | currency:values.currency:true:\'1.2-2\'}}\n            </h3>\n\n            <ion-row class="add-remove-button">\n            <ion-col royal width-50>\n\n                <button ion-button full color="danger" clear text-uppercase no-padding  item-left no-margin (click)="removeFromWishlist(item.value.id)">\n                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n                 REMOVE\n                </button>\n            </ion-col>\n            <ion-col royal width-50>\n                <button ion-button full no-padding no-margin clear text-uppercase item-right (click)="addToCart(item.value.id, item.value.type)">\n                <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n                  ADD TO CART\n                </button>\n                </ion-col>\n            </ion-row>\n\n    </ion-item>\n    </div>\n    </div>\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/account/wishlist/wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__["a" /* WishlistService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoadingController } from 'ionic-angular';




var WishlistService = /** @class */ (function () {
    function WishlistService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    WishlistService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.addToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    WishlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */]])
    ], WishlistService);
    return WishlistService;
}());

//# sourceMappingURL=wishlist-service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = /** @class */ (function () {
    function Post(service, values, params) {
        var _this = this;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getPage(this.id)
            .then(function (results) { return _this.post = results; });
    }
    Post = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/post/post.html"*/'<ion-header class="settings-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n     </button>\n        <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="post" padding>\n    <ion-spinner *ngIf="!post" name="crescent"> </ion-spinner>\n    <div *ngIf="post">\n        <div [innerHTML]="post.post_content"></div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/post/post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Post);
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_post_post__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkout_billing_address_form_billing_address_form__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_terms_condition_terms_condition__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_products_products__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_search__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_storage__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_service_cart_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_service_wishlist_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_service_category_service__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_service_checkout_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_service_config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_service_product_service__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_service_search_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_pipe_pipe__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_call_number__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_email_composer__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_app_rate__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_social_sharing__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_common_http__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ngx_translate_core__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ngx_translate_http_loader__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_onesignal__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_http__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















/*------------------------Providers----------------------------------*/
















//import { PhotoViewer } from '@ionic-native/photo-viewer';










function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_43__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_35__providers_pipe_pipe__["a" /* KeysPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_41__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_42__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_42__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_40__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__providers_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_service_wishlist_service__["a" /* WishlistService */],
                __WEBPACK_IMPORTED_MODULE_27__providers_service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_28__providers_service_checkout_service__["a" /* CheckoutService */],
                __WEBPACK_IMPORTED_MODULE_29__providers_service_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_30__providers_service_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_31__providers_service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_32__providers_service_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_33__providers_service_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_34__providers_service_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_config__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_products_products__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_address_address__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_orders_orders__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_product_product__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_post_post__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_rate__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var MyApp = /** @class */ (function () {
    function MyApp(statusBar, splashScreen, alertCtrl, config, oneSignal, emailComposer, appRate, platform, service, values, translateService, socialSharing) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.oneSignal = oneSignal;
        this.emailComposer = emailComposer;
        this.appRate = appRate;
        this.platform = platform;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.socialSharing = socialSharing;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */];
        this.items = {};
        this.buttonLanguagesSettings = false;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.platform.setDir(_this.config.appDir, true);
            _this.translateService.setDefaultLang(_this.config.language);
            _this.service.load().then(function (results) { });
            if (platform.is('cordova')) {
                _this.oneSignal.startInit(_this.config.oneSignalAppId, _this.config.googleProjectId);
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                _this.oneSignal.handleNotificationReceived().subscribe(function (result) {
                    console.log(result);
                });
                _this.oneSignal.handleNotificationOpened().subscribe(function (result) {
                    if (result.notification.payload.additionalData.category) {
                        _this.items.id = result.notification.payload.additionalData.category;
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_products_products__["a" /* ProductsPage */], _this.items);
                    }
                    else if (result.notification.payload.additionalData.product) {
                        _this.items.id = result.notification.payload.additionalData.product;
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_product_product__["a" /* ProductPage */], _this.items.id);
                    }
                    else if (result.notification.payload.additionalData.post) {
                        _this.items.id = result.notification.payload.additionalData.post;
                        _this.post(_this.items.id);
                    }
                });
                _this.oneSignal.endInit();
            }
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.getCategory = function (id, slug, name) {
        this.items = [];
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_products_products__["a" /* ProductsPage */], this.items);
    };
    MyApp.prototype.getCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
        this.values.wishlistId = [];
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__["a" /* AccountRegister */]);
    };
    MyApp.prototype.address = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_account_address_address__["a" /* Address */]);
    };
    MyApp.prototype.order = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_account_orders_orders__["a" /* Orders */]);
    };
    MyApp.prototype.cart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.wishlist = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_account_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.shop = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */]);
    };
    MyApp.prototype.rateApp = function () {
        this.appRate.preferences.storeAppURL = {
            ios: this.config.appRateIosAppId,
            android: this.config.appRateAndroidLink,
            windows: 'ms-windows-store://review/?ProductId=' + this.config.appRateWindowsId
        };
        this.appRate.promptForRating(true);
    };
    MyApp.prototype.shareApp = function () {
        var options = {
            message: this.config.shareAppMessage,
            subject: this.config.shareAppSubject,
            files: ['', ''],
            url: this.config.shareAppURL,
            chooserTitle: this.config.shareAppChooserTitle
        };
        this.socialSharing.shareWithOptions(options);
    };
    MyApp.prototype.contact = function () {
        var email = {
            to: this.config.supportEmail,
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    MyApp.prototype.post = function (id) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_post_post__["a" /* Post */], id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/app/app.html"*/'<ion-menu [content]="content" *ngIf="config.appDir == \'rtl\'" side="right">\n  <div class="menu-toolbar">\n    <ion-toolbar color="header">\n      <div class="profile-image">\n        <img src="assets/image/menu_logo.png">\n        <!--img src="{{values.avatar}}"-->\n      </div>\n      <!--button ion-button full menuClose clear color="light" class="button-customername" *ngIf="values.isLoggedIn">\n        <strong>{{values.customerName}}\n        </strong>\n      </button>\n      <button ion-button full menuClose clear color="light" class="button-welcome" *ngIf="!values.isLoggedIn">\n        <strong>{{"Welcome" | translate}}\n        </strong>\n      </button-->\n    </ion-toolbar>\n  </div>  \n  <ion-content class="sidemenugrad rtl">\n    <ion-list no-margin>\n      <ion-item-divider menuClose (click)="shop()">\n        <ion-icon item-left ios="ios-home" md="md-home">\n        </ion-icon>\n        <strong>{{"Shop" | translate}}\n        </strong>\n      </ion-item-divider>\n      <div *ngIf="service.categories" class="category-name">\n        <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n          <ion-icon  item-right class="ion-ios-arrow-back item-icon">\n          </ion-icon>\n          <span [innerHTML]="item.name"></span>\n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-list>\n      <div class="list-item-divider">\n        <ion-item-divider>    \n          <ion-icon ios="ios-contact" md="md-contact" item-left>\n          </ion-icon>\n          <strong>{{"Account" | translate}}\n          </strong>        \n        </ion-item-divider>\n      </div>\n      <ion-item tappable full menuClose  (click)="login()" *ngIf="!values.isLoggedIn">       \n        <ion-icon item-left name="md-log-in">\n        </ion-icon>{{"LogIn" | translate}}       \n      </ion-item>\n      <ion-item tappable full menuClose (click)="register()" *ngIf="!values.isLoggedIn">       \n        <ion-icon item-left ios="ios-create" md="md-create">\n        </ion-icon>{{"RegisterAccount" | translate}}      \n      </ion-item>\n      <ion-item tappable full menuClose ((click)="address()" *ngIf="values.isLoggedIn">       \n        <ion-icon item-left ios="md-locate" md="md-locate">\n        </ion-icon>{{"Address" | translate}}     \n      </ion-item>\n      <ion-item tappable full menuClose (click)="order()" *ngIf="values.isLoggedIn">\n        <ion-icon item-left ios="md-reorder" md="md-reorder">\n        </ion-icon>{{"Yourorder" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="wishlist()" *ngIf="values.isLoggedIn">\n        <ion-icon ios="ios-heart" md="md-heart" item-left>\n        </ion-icon>wishlist\n      </ion-item>\n      <ion-item tappable full menuClose ((click)="cart()">        \n        <ion-icon ios="ios-cart" md="md-cart" item-left>\n        </ion-icon>\n        {{"Checkout" | translate}}        \n      </ion-item>\n      <ion-item tappable full menuClose (click)="logout()" *ngIf="values.isLoggedIn">        \n        <ion-icon item-left name="md-log-out">\n        </ion-icon>{{"Logout" | translate}}        \n      </ion-item>\n    </ion-list>\n    <br>\n  </ion-content>\n</ion-menu>\n<ion-menu [content]="content" *ngIf="config.appDir == \'ltr\'" side="left">\n  <div class="menu-toolbar">\n    <ion-toolbar color="header">\n      <div class="profile-image">\n        <img src="assets/image/menu_logo.png">\n        <!--img src="{{values.avatar}}"-->\n      </div>\n      <!--button ion-button full menuClose clear color="light" class="button-customername" *ngIf="values.isLoggedIn">\n        <strong>{{values.customerName}}\n        </strong>\n      </button>\n      <button ion-button full menuClose clear color="light" class="button-welcome" *ngIf="!values.isLoggedIn">\n        <strong>{{"Welcome" | translate}}\n        </strong>\n      </button-->  \n    </ion-toolbar>\n  </div>\n  <ion-content class="sidemenugrad">\n    <ion-list no-margin>\n      <div class="list-item-divider">\n        <ion-item-divider tappable menuClose (click)="shop()">\n          <ion-icon item-left ios="ios-home" md="md-home">\n          </ion-icon>\n          <strong>{{"Shop" | translate}}\n          </strong>\n        </ion-item-divider>\n      </div>       \n      <div *ngIf="service.categories" class="category-name">\n        <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n          <ion-icon item-right class="ion-ios-arrow-forward item-icon">\n          </ion-icon>\n          <span [innerHTML]="item.name"></span>     \n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-list class="menu-items">\n      <ion-item-divider>\n        <ion-icon style="background-color: #32db64;" ios="ios-contact" md="md-contact" item-left>\n        </ion-icon>\n        <strong>{{"Account" | translate}}\n        </strong>\n      </ion-item-divider>\n      <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n        <ion-icon style="background-color: #f25362" name="md-log-in" item-left>\n        </ion-icon>{{"LogIn" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="register()" *ngIf="!values.isLoggedIn">\n        <ion-icon style="background-color: #3aa756" item-left ios="ios-create" md="md-create">\n        </ion-icon>{{"Register" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="address()" *ngIf="values.isLoggedIn">\n        <ion-icon style="background-color: #3aa756" item-left ios="md-locate" md="md-locate">\n        </ion-icon>{{"Address" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="order()" *ngIf="values.isLoggedIn">\n        <ion-icon style="background-color: #4688f1" item-left ios="md-reorder" md="md-reorder">\n        </ion-icon>{{"Yourorder" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="wishlist()" *ngIf="values.isLoggedIn">\n        <ion-icon style="background-color: #e8453c" ios="ios-heart" md="md-heart" item-left>\n        </ion-icon>wishlist\n      </ion-item>\n      <ion-item tappable menuClose (click)="cart()">\n        <ion-icon style="background-color: #8BC34A" name="ios-basket-outline" item-left>\n        </ion-icon>\n        {{"Checkout" | translate}}\n      </ion-item>\n            <ion-item tappable menuClose (click)="contact()">\n               {{"Contact Us" | translate}}\n               <ion-icon style="background-color: #FF5722" name="ios-mail" item-left></ion-icon>\n            </ion-item>\n            <ion-item tappable menuClose (click)="post(this.values.data.pages.about)">\n               {{"About us" | translate}}\n               <ion-icon style="background-color: #26C6DA" name="ios-information-circle" item-left></ion-icon>\n            </ion-item>\n            <ion-item tappable menuClose (click)="post(this.values.data.pages.terms)">\n               <ion-icon style="background-color: #8BC34A" name="ios-paper" item-left></ion-icon>\n               {{"Terms & Conditions" | translate}}\n            </ion-item>\n            <ion-item tappable menuClose no-line (click)="shareApp()">\n               <ion-icon style="background-color: #FF5722" name="md-share" item-left></ion-icon>\n               {{"Share App" | translate}}\n            </ion-item>\n            <ion-item tappable menuClose no-line (click)="rateApp()">\n               <ion-icon style="background-color: #43A047" name="md-thumbs-up" item-left></ion-icon>\n               {{"Rate App" | translate}}\n            </ion-item>\n      <ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n        <ion-icon style="background-color: #FDD835" item-left name="md-log-out">\n        </ion-icon>{{"Logout" | translate}}\n      </ion-item>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n</ion-nav>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_6__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartPage = /** @class */ (function () {
    function CartPage(nav, service, values, params, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.addProduct = true;
        this.disableSubmit = false;
        this.buttonCoupon = false;
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
        this.service.loadCart()
            .then(function (results) { return _this.handleCartInit(results); });
    }
    CartPage.prototype.handleCartInit = function (results) {
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    };
    CartPage.prototype.handleCart = function (results) {
        this.cart = results;
    };
    CartPage.prototype.delete = function (key) {
        var _this = this;
        this.service.deleteItem(key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableSubmit = true;
        this.Checkout = "PleaseWait";
        this.service.checkout()
            .then(function (results) { return _this.handleBilling(results); });
    };
    CartPage.prototype.handleBilling = function (results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */], results);
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        if (Object.keys(this.cart.cart_contents).length == 1) {
            if (this.cart.cart_contents[key].quantity == 1) {
                this.cart.cart_contents = {};
                console.log(this.cart);
            }
            ;
        }
        this.service.deleteFromCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.addToCart = function (id, key) {
        var _this = this;
        this.service.addToCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.updateCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleAddToCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.submitCoupon = function () {
        var _this = this;
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon)
                .then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.removeCoupon = function () {
        var _this = this;
        this.service.removeCoupon(this.cart.applied_coupons)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleResults = function (a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    };
    CartPage.prototype.updateShipping = function (method) {
        var _this = this;
        this.chosen_shipping = method;
        this.service.updateShipping(method)
            .then(function (results) { return _this.handleShipping(results); });
    };
    CartPage.prototype.gohome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* Home */]);
    };
    CartPage.prototype.handleShipping = function (results) {
        this.cart = results;
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Cart"| translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge">\n        <ion-icon class="ion-ios-basket-outline item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="cart">\n  <ion-spinner *ngIf="!cart" name="crescent">\n  </ion-spinner>\n  <div *ngIf="cart">\n        <div class="empty" *ngIf="cart.cart_contents.length == 0"> \n            <img src="assets/image/empty-cart.png">\n            <h4 color="side-heading-color" text-center no-lines>{{"Your Cart Is Empty" | translate}}!</h4>\n            <h5 text-center no-lines>{{"Add some products available in our menu to checkout" | translate}}</h5> \n            <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Continue Shopping" | translate}}</button> \n        </div>\n    <div *ngIf="cart?.cart_contents">\n\n      <div class="cart-items">\n      <ion-list>\n        <div class="cart-list" *ngFor="let item of cart.cart_contents | keys">\n          <ion-item no-lines *ngIf="item.value.quantity != 0">\n            <ion-thumbnail item-left>\n              <img src="{{item.value.thumb}}">\n            </ion-thumbnail>\n            <h2 wrap-text>{{item.value.name}}\n            </h2>\n            <h3 wrap-text > {{"Price" | translate}}: {{item.value.price | currency:values.currency:true:\'1.2-2\'}}\n            </h3>\n            <h3 wrap-text> {{"Totals" | translate}}: {{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'  }}\n            </h3>\n            <a (click)="delete( item.key )">\n              <ion-icon name="trash">\n              </ion-icon>\n            </a>\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="deleteFromCart(item.value.product_id, item.key)">\n              <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n              </ion-icon>\n            </button>\n            <button ion-button item-right color="button-color" clear>{{item.value.quantity}}\n            </button>\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="addToCart(item.value.product_id, item.key)">\n              <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n              </ion-icon>\n            </button>\n          </ion-item>\n        </div>\n      </ion-list>\n      </div>\n\n      <div *ngIf="cart.cart_contents.length != 0">\n        <ion-list *ngIf="shipping" no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateShipping(chosen_shipping)" class="shipping-methods">\n          <ion-item-divider>\n            <h2>{{"Selectashippingmethod" | translate}}\n            </h2>\n          </ion-item-divider>\n          <ion-item *ngFor="let method of shipping | keys" >\n            <ion-label>{{method.value.method_title}} \n              <span *ngIf="method.value.cost">{{ 1*method.value.cost | currency:values.currency:true:\'1.2-2\'}}\n              </span> \n            </ion-label>\n            <ion-radio value="{{method.value.id + \':\' + method.value.instance_id}}" >\n            </ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <form #f="ngForm" class="coupon">\n          <ion-item>\n            <ion-label>{{"Coupon Code" | translate}}</ion-label>\n            <ion-input type="text" [(ngModel)]="cart.coupon" name="coupon">\n            </ion-input>\n            <h2 item-right>\n              <button ion-button color="button-color" block type="submit" text-uppercase [disabled]=\'disableSubmitCoupon\' (click)="submitCoupon()"> {{Apply | translate}}\n              </button>\n            </h2>\n          </ion-item>\n        </form>\n\n        <ion-list class="totals" *ngIf="cart.cart_totals">\n          <!--ion-item-divider>\n            <h2>{{"Totals" | translate}}\n            </h2>\n          </ion-item-divider-->\n          <ion-row>\n            <ion-col width-75>\n              <ion-label>{{"SubTotal" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>  \n\n          <ion-row *ngIf="cart.cart_totals.cart_contents_total != 0">\n            <ion-col width-75>\n              <ion-label>{{"Subtotal_ex_tax" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>  \n\n          <ion-row *ngIf="cart.cart_totals.tax_total != 0">\n            <ion-col width-75>\n              <ion-label>{{"Tax_total" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.discount_total && cart.cart_totals.discount_total != 0"> \n            <ion-col width-75 class="remove-coupon">\n              <ion-label>{{"Coupons" | translate}} - {{cart.applied_coupons}} \n                <a (click)="removeCoupon()"> (Remove)\n                </a>\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>- {{1*cart.cart_totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.shipping_total != 0"> \n            <ion-col width-75>\n              <ion-label>{{"Shipping" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label >{{1*cart.cart_totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col width-75>\n              <ion-label>\n                <b> {{"Grand Total" | translate}}\n                </b>\n              </ion-label>\n            </ion-col >\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n        </ion-list>\n        \n      </div>\n    </div>\n  </div>\n</ion-content>\n<div *ngIf="cart">\n  <ion-footer *ngIf="cart.cart_contents.length != 0">\n    <button ion-button full color="button-color" no-padding no-margin text-uppercase [disabled]=\'disableSubmit\' (click)="checkout()">{{Checkout | translate}}\n    </button>\n  </ion-footer>\n</div>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Home = /** @class */ (function () {
    function Home(nav, service, values) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.options = [];
        this.service.getProducts();
    }
    Home.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
    };
    Home.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    Home.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    Home.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    Home.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.service.loadMore().then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Home.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Home.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], id);
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n  <ion-title>\n    <img style="width: 60%; max-width: 200px;" src="assets/image/home_header.png">\n  </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light color="shadowlite" (click)="getSearch()">\n        <ion-icon ios="ios-search" md="md-search">\n        </ion-icon>\n      </button>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-basket-outline item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="home">\n    <ion-spinner *ngIf="!service?.banners" name="crescent">\n    </ion-spinner>\n  <div *ngIf="service?.banners" class="home-banners">\n    <ion-slides pager="true" loop="true" autoplay="5800">\n      <ion-slide *ngFor=\'let value of service.banners\'>\n        <img src="{{value}}">\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div *ngIf="service?.categories" style="margin-bottom: 10px;">\n    <div class="shop-name">\n      <ion-item no-lines>\n        <b color="side-heading-color" text-uppercase>{{"Shop by categories"| translate}}\n        </b>\n      </ion-item>\n    </div>\n    <div *ngIf="service.mainCategories" class="main-categories">\n      <ion-row class="row unlimited-items">\n        <ion-col class="col" *ngFor="let item of service.mainCategories">\n          <a (click)="getCategory(item.id, item.slug, item.name)">\n            <ion-card>\n              <ion-card-content>\n                <img src="{{item.image}}"/>\n              </ion-card-content>\n              <div text-center>\n                <ion-label text-uppercase><span [innerHTML]="item.name"></span>\n                </ion-label>\n              </div>\n            </ion-card>\n          </a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n    <div *ngIf="service?.products?.products" class="products-listing">\n      <div *ngIf="service?.products.products.length">\n          <ion-item no-lines class="item-name">\n            <ion-label text-uppercase><b>{{"Products" | translate}}</b>\n            </ion-label>\n          </ion-item>\n          <ion-list>\n                      <div class="card-background-page grid">\n            <ion-row class="row unlimited-items">\n              <ion-col class="col" *ngFor="let item of service.products.products">\n                <ion-card>\n                  <ion-card-content class="stock">\n\n                      <img tappable src="{{item.images[0].src}}" (click)="getProduct(item.id)">\n                      <button ion-button color="danger" *ngIf="!item.in_stock">{{"OUTOFSTOCK" | translate}}\n                      </button>\n\n     \n                  <ion-icon ios="ios-heart" md="md-heart" color="danger" class="wishlist-button-grid" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                  <ion-icon ios="ios-heart-outline" md="md-heart-outline" color="danger" class="wishlist-button-grid" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                  \n                  </ion-card-content>\n                  <div tappable (click)="getProduct(item.id)" class="card-name">\n                  <ion-label *ngIf="item.title">{{item.title}}\n                  </ion-label>\n                  <ion-label *ngIf="item.name">{{item.name}}\n                  </ion-label>\n                  </div>\n                  <ion-item no-padding class="price-list">\n                    <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n                    <span class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n                    <span class="price-delete" primary *ngIf="item.sale_price">\n                      <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                      </del>\n                    </span>\n                    <!--button ion-button [disabled]=\'!item.in_stock\' text-uppercase color="button-color" item-right clear *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                      {{"Add"  | translate}}\n                    </button>\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                      <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                      </ion-icon>\n                    </button>\n                    <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                    </button>\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                      <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                      </ion-icon>\n                    </button-->\n                  </ion-item>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n          </ion-list>\n        </div>\n      </div>\n          <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n            <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading More Items\' | translate}}"> </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductPage = /** @class */ (function () {
    function ProductPage(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.wishlistIcon = false;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.id = params.data;
        this.options = [];
        this.quantity = "1";
        this.AddToCart = "AddToCart";
        this.service.getProduct(this.id)
            .then(function (results) { return _this.handleProductResults(results); });
        this.getReviews();
    }
    ProductPage_1 = ProductPage;
    ProductPage.prototype.handleProductResults = function (results) {
        this.product = results;
    };
    ProductPage.prototype.getProduct = function (id) {
        this.nav.push(ProductPage_1, id);
    };
    ProductPage.prototype.addToCart = function (id) {
        var _this = this;
        if (this.product.product.type == 'variable' && this.options.length == 0) {
            this.functions.showAlert('Eroor', 'Please Select Product Option...');
        }
        else {
            this.disableSubmit = true;
            // this.AddToCart = "Adding to cart...";
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                for (var j = 0; j < res.length; j = j + 2) {
                    text += '"' + res[j] + '":"' + res[j + 1] + '",';
                }
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductPage.prototype.chnageProduct = function () {
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            for (var j = 0; j < res.length; j = j + 2) {
                text += '"' + res[j] + '":"' + res[j + 1] + '",';
            }
        }
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        for (var item in this.product.product.variations) {
            if (this.product.product.variations[item].id == obj.variation_id) {
                this.product.product.in_stock = this.product.product.variations[item].in_stock;
                this.product.product.price = this.product.product.variations[item].price;
            }
        }
    };
    ProductPage.prototype.updateCart = function (a) {
        this.disableSubmit = false;
        this.values.count += parseInt(this.quantity);
        this.AddToCart = "AddToCart";
    };
    ProductPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.buyNow = function (id) {
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"' + res[0] + '":"' + res[1] + '",';
        }
        text += '"product":"' + id + '",';
        text += '"qty":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */], obj);
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.service.getReviews(this.id).then(function (results) { return _this.handleReview(results); });
    };
    ProductPage.prototype.handleReview = function (a) {
        this.reviews = a;
        for (var item in this.reviews.product_reviews) {
            this.reviews.product_reviews[item].avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(this.reviews.product_reviews[item].reviewer_email);
            console.log(this.reviews.product_reviews[item].avatar);
        }
    };
    ProductPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then(function (results) { return _this.update(results); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    ProductPage.prototype.update = function (a) {
        if (a.success == "Success") {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[this.product.product.id] = true;
        }
        else {
            this.functions.showAlert("error", "error");
        }
    };
    ProductPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ProductPage.prototype, "content", void 0);
    ProductPage = ProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/product/product.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <ion-title text-center *ngIf="product?.product?.title"><span [innerHTML]="product.product.title"></span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-basket-outline item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="product-page">\n  <ion-spinner *ngIf="!product" name="crescent">\n  </ion-spinner>\n  <div *ngIf="product" class="product-details">\n    <div *ngIf="product.product.images">\n      <ion-slides pager="true" loop="true" autoplay="5800" class="product-image-slider">\n        <ion-slide *ngFor="let item of product.product.images">\n          <img src="{{item.src}}">\n          <h2 *ngIf="!product.product.in_stock" item-right class="stock" color="danger">{{"OUTOFSTOCK" | translate}}\n      </h2>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <ion-item class="product-name">\n      <ion-label>\n        {{product.product.title}}\n      </ion-label>\n      <span item-right *ngIf=\'product.product.average_rating\' class="rating">\n        <span class="star-icon" [ngClass]="{full: product.product.average_rating >= 1, half: product.product.average_rating == 0.5}">&#x2605;\n        </span>\n        <span class="star-icon" [ngClass]="{full: product.product.average_rating >= 2, half: product.product.average_rating == 1.5}">&#x2605;\n        </span>\n        <span class="star-icon" [ngClass]="{full: product.product.average_rating >= 3, half: product.product.average_rating == 2.5}">&#x2605;\n        </span>\n        <span class="star-icon" [ngClass]="{full: product.product.average_rating >= 4, half: product.product.average_rating == 3.5}">&#x2605;\n        </span>\n        <span class="star-icon" [ngClass]="{full: product.product.average_rating >= 5, half: product.product.average_rating == 4.5}">&#x2605;\n        </span>\n      </span>\n    </ion-item>\n    <ion-item class="stock-label" no-lines>\n      \n      <ion-label class="price-regular" *ngIf="!product.product.sale_price">{{1*product.product.price | currency:values.currency:true:\'1.2-2\'}}\n      </ion-label>\n                    <ion-label class="price-special" *ngIf="product.product.sale_price"><span>{{1*product.product.sale_price | currency:values.currency:true:\'1.2-2\'}}</span>\n                      <span class="price-delete"><del>{{1*product.product.regular_price | currency:values.currency:true:\'1.2-2\'}}</del></span>\n\n                        <span text-wrap class="price-off-tag">{{(product.product.regular_price - product.product.sale_price) / product.product.regular_price*100 | number : \'1.0-0\'}}% {{"OFF" | translate}}</span>\n                      \n                    </ion-label>\n\n      <h2 *ngIf="values.wishlistId[product.product.id]" item-right class="wishlist" color="danger" (click)="removeFromWishlist(product.product.id)">\n      <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n      </h2>\n      <h2 *ngIf="!values.wishlistId[product.product.id]" item-right class="wishlist" color="danger" (click)="addToWishlist(product.product.id)">\n      <ion-icon ios="ios-heart-outline" md="md-heart-outline"></ion-icon>\n      </h2>\n     \n    </ion-item>\n    <!--variation product starts-->\n    <div *ngIf="product?.product?.variations.length" class="variation-product">\n      <ion-item class="variation-title">\n        <strong>{{"Options"| translate}}\n        </strong>\n      </ion-item>\n      <ion-item>\n        <ion-label>           \n          {{"Variation" | translate}}\n        </ion-label>\n        <ion-select [(ngModel)]="options[0]" (ngModelChange)="chnageProduct()">\n          <div *ngFor="let option of product.product.variations">\n            <div *ngIf="option.attributes.length == 1">\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option}}">{{option.attributes[0].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}}\n              </ion-option>\n            </div>\n            <div *ngIf="option.attributes.length == 2">\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.price | currency:values.currency:true:\'1.2-2\'}}\n              </ion-option>\n            </div>\n            <div *ngIf="option.attributes.length == 3">\n              <ion-option value="{{\'variation_id:\' + option.id + \':variation[attribute_pa_\'+ option.attributes[0].name +\']:\' + option.attributes[0].option + \':variation[attribute_pa_\'+ option.attributes[1].name +\']:\' + option.attributes[1].option + \':variation[attribute_pa_\'+ option.attributes[2].name +\']:\' + option.attributes[2].option}}">{{option.attributes[0].option | uppercase}} - {{option.attributes[1].option | uppercase}} - {{option.attributes[2].option | uppercase}} - {{option.price_inc_tax | currency:values.currency:true:\'1.2-2\'}}\n              </ion-option>\n            </div>\n          </div>\n        </ion-select>           \n      </ion-item>\n    </div>\n    <div class="add-to-cart-button">\n      <button ion-button full color="button-color" text-uppercase [disabled]=\'disableSubmit\' (click)="addToCart(product.product.id)">\n        {{AddToCart | translate}}\n      </button>\n    </div>\n    <div *ngIf="product.product.short_description">\n    <ion-item no-lines class="item-background">\n      {{"ShortDescription" | translate}} :\n    </ion-item>\n    <ion-item text-wrap  no-lines>\n      <div [innerHTML]="product.product.short_description">\n      </div>\n    </ion-item>\n    </div>\n    <div *ngIf="product.product.description">\n    <ion-item no-lines class="item-background">\n      {{"Description" | translate}} :\n    </ion-item>\n    <ion-item text-wrap  no-lines>\n      <div [innerHTML]="product.product.description">\n      </div>\n    </ion-item>\n    </div>\n    <div *ngIf="reviews?.product_reviews.length">\n      <ion-row class="item-background">\n        <ion-col>\n          <!--button ion-button  *ngIf="!reviews" color="button-color" button small clear (click)="getReviews()" style="margin-bottom:0px">{{"ShowReviews" | translate}}\n          </button-->\n          <button ion-button *ngIf="reviews" color="button-color" button small clear class="review-title">{{"Reviews" | translate}}\n          </button>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n      <div  *ngFor="let item of reviews.product_reviews" class="reviews">\n          <ion-item no-lines>\n            <ion-avatar item-start style="margin:8px">\n            <img src="https://www.gravatar.com/avatar/{{item.avatar}}">\n            </ion-avatar>\n             <h3 style="margin-bottom:6px;font-size:15px">{{item.reviewer_name}}\n             <span class="rating review-star">\n             <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span>\n             <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span>\n             <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span>\n             <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span>\n             <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span>\n             </span></h3>\n    \n             <!--h3 style="color:#9e9898">{{item.email}}</h3-->\n             <h3 style="color:#9e9898;margin-bottom:4px">{{item.created_at | date:\'medium\'}}</h3>\n          </ion-item>\n          <p text-wrap>{{item.review}}</p>\n      </div>    \n    </div>\n  </div>\n  <br>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Woo User APP/Woo Side Menu/Upload 8.0/app/src/pages/product/product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], ProductPage);
    return ProductPage;
    var ProductPage_1;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map