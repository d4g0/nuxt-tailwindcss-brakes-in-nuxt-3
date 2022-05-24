import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: "/admin/",
  },
  runtimeConfig: {
    app: {
      API_URL: process.env.API_URL || "http://localhost:3010/graphql",
      DOMAIN: process.env.DOMAIN || "tiny-bookings.com",
      BRAND: process.env.BRAND || "tiny-bookings",
      SITE_NAME: process.env.SITE_NAME || "tiny-bookings",
      CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
      HOTEL_ID: process.env.HOTEL_ID,
      API_CONTENT_PATH: process.env.API_CONTENT_PATH,
    },
  },
  
  modules: ['@nuxtjs/tailwindcss']
});
