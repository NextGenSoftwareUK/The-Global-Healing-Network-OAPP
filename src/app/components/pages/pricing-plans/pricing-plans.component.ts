import { Component } from '@angular/core';

@Component({
    selector: 'app-pricing-plans',
    templateUrl: './pricing-plans.component.html',
    styleUrls: ['./pricing-plans.component.scss']
})
export class PricingPlansComponent {

    plansList: any = [
        {
            name: "Bronze",
            description: "Choose Custom Services Each service 4.99/month",
            price: "$4.99/month",
            featuresList: [
                {
                    available: true,
                    name: "Profile Listing"
                },
                {
                    available: true,
                    name: "Program Listing"
                },
                {
                    available: false,
                    name: "Podcast/Youtube Listings"
                },
                {
                    available: false,
                    name: "Shop Listings"
                },
                {
                    available: false,
                    name: "Blog Listings"
                }
            ],
            planLink: "#"
        },
        {
            name: "Silver",
            description: "Get All Services",
            price: "$19.99/month",
            featuresList: [
                {
                    available: true,
                    name: "Profile Listing"
                },
                {
                    available: true,
                    name: "Program Listing"
                },
                {
                    available: true,
                    name: "Podcast/Youtube Listings"
                },
                {
                    available: true,
                    name: "Shop Listings"
                },
                {
                    available: true,
                    name: "Blog Listings"
                }
            ],
            planLink: "#"
        },
        {
            name: "Gold",
            description: "Get All Services",
            price: "$29.99/month",
            featuresList: [
                {
                    available: true,
                    name: "Profile Listing"
                },
                {
                    available: true,
                    name: "Program Listing"
                },
                {
                    available: true,
                    name: "Podcast/Youtube Listings"
                },
                {
                    available: true,
                    name: "Shop Listings"
                },
                {
                    available: true,
                    name: "Blog Listings"
                },
                {
                    available: true,
                    name: "Healers Spotlight Section on Home Page"
                },
                {
                    available: true,
                    name: "Priority Customer Support"
                }
            ],
            planLink: "#"
        }
    ]
}
