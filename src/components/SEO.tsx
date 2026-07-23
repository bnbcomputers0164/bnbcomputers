import React, { useEffect } from 'react';
import { companyDetails } from '../data/companyData';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string[];
}

export default function SEO({
  title,
  description,
  canonicalUrl = window.location.href,
  keywords = [
    "Tally Partner Bathinda",
    "Busy Partner Bathinda",
    "Tally Software Bathinda",
    "Busy Software Bathinda",
    "Accounting Software Bathinda",
    "Cloud Tally",
    "Tally on Cloud",
    "Busy on Cloud",
    "Accounting Software Punjab",
    "GST Software Bathinda",
    "Tally Customization",
    "Busy Customization",
    "Mobile App for Tally",
    "WhatsApp Integration for Tally"
  ]
}: SEOProps) {
  useEffect(() => {
    // Update Document Title
    document.title = `${title} | BNB COMPUTERS - Tally & BUSY Authorized Partner Bathinda`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));

    // Update Open Graph (OG) Tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:type': 'website',
      'og:url': canonicalUrl,
      'og:image': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'og:site_name': companyDetails.name,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    };

    Object.entries(ogTags).forEach(([property, value]) => {
      let element = document.querySelector(`meta[property="${property}"]`) || 
                    document.querySelector(`meta[name="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (property.startsWith('og:')) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    });

    // Handle Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Inject JSON-LD Schema (Local Business & Software Partner)
    const schemaId = 'bnb-structured-data-schema';
    let scriptElement = document.getElementById(schemaId) as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = schemaId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://bnbcomputers.com/#localbusiness",
          "name": companyDetails.name,
          "url": companyDetails.websiteUrl,
          "telephone": companyDetails.primaryMobile,
          "email": companyDetails.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office Bathinda",
            "addressLocality": "Bathinda",
            "addressRegion": "Punjab",
            "postalCode": "151001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.2110,
            "longitude": 74.9450
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "19:00"
          },
          "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://bnbcomputers.com/#service",
          "name": companyDetails.name,
          "description": "Authorized Partners for TallyPrime and BUSY Accounting Software. Offering local consulting, cloud hosting, customizations, and renewals.",
          "provider": {
            "@id": "https://bnbcomputers.com/#localbusiness"
          },
          "areaServed": {
            "@type": "State",
            "name": "Punjab"
          }
        }
      ]
    };

    scriptElement.textContent = JSON.stringify(localBusinessSchema);

    return () => {
      // Clean up script if needed (optional, keeping it represents current page context)
    };
  }, [title, description, canonicalUrl, keywords]);

  return null; // Side-effect component
}
