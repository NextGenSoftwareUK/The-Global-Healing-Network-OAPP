import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../common/header/header.component';
import { BannerComponent } from '../common/banner/banner.component';
import { FooterComponent } from '../common/footer/footer.component';
import { FilterComponent } from '../common/filter/filter.component';
import { HomeComponent } from './home.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { LoveBeamComponent } from '../section/love-beam/love-beam.component';
import { HealingTagsComponent } from '../section/healing-tags/healing-tags.component';
import { HealingForumComponent } from '../section/healing-forum/healing-forum.component';
import { BlogSectionComponent } from '../section/blog-section/blog-section.component';
import { HealersSectionComponent } from '../section/healers-section/healers-section.component';
import { EventSectionComponent } from '../section/event-section/event-section.component';
import { EventsComponent } from '../pages/events/events.component';
import { ForumComponent } from '../pages/forum/forum.component';
import { GroupsComponent } from '../pages/groups/groups.component';
import { HealersComponent } from '../pages/healers/healers.component';
import { ProductsComponent } from '../pages/products/products.component';
import { PartnersComponent } from '../pages/partners/partners.component';
import { PricingPlansComponent } from '../pages/pricing-plans/pricing-plans.component';
import { TeamComponent } from '../pages/team/team.component';
import { VideosComponent } from '../pages/videos/videos.component';



@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        BannerComponent,
        FooterComponent,
        FilterComponent,
        LoveBeamComponent,
        HealingTagsComponent,
        HealingForumComponent,
        BlogSectionComponent,
        HealersSectionComponent,
        EventSectionComponent,
        
        BlogComponent,
        HomePageComponent,
        EventsComponent,
        ForumComponent,
        GroupsComponent,
        HealersComponent,
        ProductsComponent,
        PartnersComponent,
        PricingPlansComponent,
        TeamComponent,
        VideosComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
