import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateProductComponent } from './create-product/create-product.component';
import {  CustomerListComponent } from './customer-list/customer-list.component';
// import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderReceiptComponent } from './order-receipt/order-receipt.component';
import { PaymentServiceComponent } from './payment-service/payment-service.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'order-list', component: OrderListComponent},
//   {path: 'order', component: OrderComponent},
//   {path: '', redirectTo: 'order', pathMatch: 'full'},

{path: 'product-list', component: ProductListComponent},
{path: 'create-product', component: CreateProductComponent},
{path: '', redirectTo: 'customer-list', pathMatch: 'full'},
{path: 'update-product/:id', component: UpdateProductComponent},
{path: 'product-catalog/:id', component: ProductCatalogComponent},
{path: 'place-order/:id/:customerId', component: PlaceOrderComponent},

{path: 'payment-service', component: PaymentServiceComponent},

{path: 'alert-service', component: SweetalertComponent},

{path: 'order-receipt/:id', component: OrderReceiptComponent},
{path: 'track-order/:id', component: TrackOrderComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
