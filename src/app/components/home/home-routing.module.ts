import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { EventsComponent } from '../pages/events/events.component';
import { ForumComponent } from '../pages/forum/forum.component';
import { GroupsComponent } from '../pages/groups/groups.component';
import { HealersComponent } from '../pages/healers/healers.component';
import { ProductsComponent } from '../pages/products/products.component';
import { PricingPlansComponent } from '../pages/pricing-plans/pricing-plans.component';
import { TeamComponent } from '../pages/team/team.component';
import { VideosComponent } from '../pages/videos/videos.component';
import { PartnersComponent } from '../pages/partners/partners.component';
import { PodcastComponent } from '../pages/podcast/podcast.component';
import { HealingArchiveComponent } from '../pages/healing-archive/healing-archive.component';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,   
        children: [
            {
                path: "",
                component: HomePageComponent
            },
            {
                path: "blog",
                component: BlogComponent
            },
            {
                path: "events",
                component: EventsComponent
            },
            {
                path: "forum",
                component: ForumComponent
            },
            {
                path: "groups",
                component: GroupsComponent
            },
            {
                path: "healers",
                component: HealersComponent
            },
            {
                path: "partners",
                component: PartnersComponent
            },
            {
                path: "pricing-plans",
                component: PricingPlansComponent
            },
            {
                path: "products",
                component: ProductsComponent
            },
            {
                path: "team",
                component: TeamComponent
            },
            {
                path: "videos",
                component: VideosComponent
            },
            {
                path: "podcast",
                component: PodcastComponent
            },
            {
                path: "healing-archive",
                component: HealingArchiveComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
