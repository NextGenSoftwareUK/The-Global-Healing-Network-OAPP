import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../common/header/header.component';
import { BannerComponent } from '../../common/banner/banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { FilterComponent } from '../../common/filter/filter.component';
import { HomeComponent } from './home.component';



@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        BannerComponent,
        FooterComponent,
        FilterComponent    
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
