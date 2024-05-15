// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  // baseUrl: "http://localhost:8080",
  // baseAuthLoginUrl: "http://localhost:8080/api/auth/login",
  // baseAuthSignupUrl: "http://localhost:8080/api/auth/signup",
  // baseUrl: "http://localhost:8080",
  // baseAuthLoginUrl: "http://localhost:8080/api/auth/login",
  // baseAuthSignupUrl: "http://localhost:8080/api/auth/signup",
  basePaymentPayUrl: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
  baseUrl:"https://api.everse.co.in",
  baseAuthLoginUrl:"https://api.everse.co.in/api/auth/login",
  baseAuthSignupUrl:"https://api.everse.co.in/api/auth/signup"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
