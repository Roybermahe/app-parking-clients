import { configureTnsOAuth, TnsOAuthClient } from "nativescript-oauth2";
import {
    TnsOaProviderOptionsGoogle,
    TnsOaProviderGoogle
} from "nativescript-oauth2/providers";

let client: TnsOAuthClient = null;

export function configureOAuthProviders() {
    const googleProvider = configureOAuthProviderGoogle();
    configureTnsOAuth([googleProvider]);
}

function configureOAuthProviderGoogle() {
    const googleProviderOptions: TnsOaProviderOptionsGoogle = {
        openIdSupport: 'oid-full',
        clientId: '646968336422-1mdpo39fv6aua8csh2ljcq8fifoqaqna.apps.googleusercontent.com',
        redirectUri: 'com.googleusercontent.apps.646968336422-1mdpo39fv6aua8csh2ljcq8fifoqaqna:/auth',
        urlScheme: 'com.googleusercontent.apps.646968336422-1mdpo39fv6aua8csh2ljcq8fifoqaqna',
        scopes: ['email']
    }
    const googleProvider = new TnsOaProviderGoogle(googleProviderOptions);
    return googleProvider;
}
