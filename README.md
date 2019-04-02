# Purpose #
Test out Google CICP as authentication provider  
[Server side README](server/README.md)

## Setup instructions ##
host index.html on s3 or web server  
use browser to open root url - http(s)://{host}/  

## Google account configurations ##
GCP  
https://console.cloud.google.com/customer-identity/providers?project=mycrm-adviser-test  
Firebase  
https://console.firebase.google.com/project/mycrm-adviser-test/settings/serviceaccounts/adminsdk  

## Checklist ##
(authentication related)  
- [x] authenticate with google CICP  
- [x] google account SSO  
- [x] forgot password  
- [x] passwordless login (phone)  
- [x] passwordless login (email)  
- [ ] optional - user registration  
- [ ] ability to have multiple roles per user (custom claims in token)  
- [ ] remember me (30 days) - firebase auth is either perpetual (until log out), or per tab/window, there isn't anything in between https://firebase.google.com/docs/auth/web/auth-state-persistence  
- [ ] microsoft account / office 365 SSO? https://groups.google.com/forum/#!topic/firebase-talk/PTq-i-8Il-o  
- [ ] customisation of reset password, user registration screen  
- [ ] customizing the redirect domain for Google sign-in (and other sign ins), currently it's mycrm-advisor-test.firebase.com/xxxxxx https://firebase.google.com/docs/auth/web/google-signin  
- [ ] password policy via firebase console - no option from firebase, has to be frontend validation. Firebase force password to be >= 6 and number+letter.  
- [ ] MFA!!! (to be released, not available in CICP yet)  
- [ ] try firebase pre-built ui  
- [ ] email verification? (on user registration, probably not needed)  

(authorization related)  
- [x] validate tokens using firebase admin service account 
- [ ] handle token expiry (ui) - firebase auth is perpetual, need to find a way to clear refresh tokens in firebase database for users periodically https://firebase.google.com/docs/auth/web/auth-state-persistence  
- [ ] optional - access token doesn't expire after logging out (valid for 1 hour after issuing), may need to handle  

## References ##
https://cloud.google.com/identity-cp/docs/concepts-authentication  
https://firebase.google.com/docs/auth/admin/verify-id-tokens  
https://firebase.google.com/docs/auth/web/start  
https://github.com/firebase/quickstart-js  
https://github.com/firebase/quickstart-js/blob/master/auth/email-password.html  
https://github.com/firebase/quickstart-js/blob/master/functions/functions/index.js  
https://github.com/firebase/firebaseui-web  
