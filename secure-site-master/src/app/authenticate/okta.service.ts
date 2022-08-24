import { AuthConfig, OAuthService, JwksValidationHandler } from "angular-oauth2-oidc";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()

export class OktaService {
    constructor(private oauthService: OAuthService, private router: Router) {
    }
    public okta: AuthConfig = {
        issuer: 'https://dev-95881651.okta.com/oauth2/default',
        oidc: true,
        redirectUri: window.location.origin + '/login',
        postLogoutRedirectUri: window.location.origin + '/home',
        clientId: '0oa69pr758KeExZF65d7',
        scope: 'openid profile email',
        showDebugInformation: true,
    };
    public configure() {
        const oauthService = this.oauthService;
        const router = this.router;
        oauthService.configure(this.okta);
        oauthService.tokenValidationHandler = new JwksValidationHandler();
        oauthService.showDebugInformation = true;
        oauthService.loadDiscoveryDocument().then((doc) => {
            oauthService.tryLogin({
                onTokenReceived: (context) => {
                    router.navigateByUrl(context.state);
                },
                onLoginError: (context) => {
                    console.log('error', context);
                }
            });
        });
    }

    public getClaims() {
        return this.oauthService.getIdentityClaims();
    }
}
