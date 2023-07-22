import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { CouchDBInterceptor } from './couchdb-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { MyOrderComponent } from './my-order/my-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThemeModule } from './theme/theme.module';
import { ToastrModule } from 'ngx-toastr';
import { NgContentComponent } from './ng-content/ng-content.component';
// import { ProductModule } from './product/product.module';
// import { SalesChartComponent } from './sales-chart/sales-chart.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from "./product/product.module";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ImageGalleryComponent,
        OrderNowComponent,
        MyOrderComponent,
        PageNotFoundComponent,
        NgContentComponent,
        // SalesChartComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: CouchDBInterceptor, multi: true },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        // ProductModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ThemeModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        AdminModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-top-center',
            preventDuplicates: true,
            timeOut: 2000,
        }),
        ProductModule
    ]
})
export class AppModule { }
