import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PaymentServiceComponent } from './payment-service/payment-service.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { OrderReceiptComponent } from './order-receipt/order-receipt.component';
import { TrackOrderComponent } from './track-order/track-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    OrderListComponent,
    CreateProductComponent,
    ProductListComponent,
    UpdateProductComponent,
    ProductCatalogComponent,
    PlaceOrderComponent,
    PaymentServiceComponent,
    SweetalertComponent,
    OrderReceiptComponent,
    TrackOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
