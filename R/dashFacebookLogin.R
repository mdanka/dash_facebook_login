# AUTO GENERATED FILE - DO NOT EDIT

dashFacebookLogin <- function(id=NULL, appId=NULL, size=NULL, scope=NULL, fields=NULL, returnScopes=NULL, autoLoad=NULL, xfbml=NULL, cookie=NULL, textButton=NULL, cssClass=NULL, redirectUri=NULL, version=NULL, icon=NULL, language=NULL, isMobile=NULL, isDisabled=NULL, tag=NULL, state=NULL, authType=NULL, responseType=NULL, facebookLoginResponse=NULL) {
    
    props <- list(id=id, appId=appId, size=size, scope=scope, fields=fields, returnScopes=returnScopes, autoLoad=autoLoad, xfbml=xfbml, cookie=cookie, textButton=textButton, cssClass=cssClass, redirectUri=redirectUri, version=version, icon=icon, language=language, isMobile=isMobile, isDisabled=isDisabled, tag=tag, state=state, authType=authType, responseType=responseType, facebookLoginResponse=facebookLoginResponse)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashFacebookLogin',
        namespace = 'dash_facebook_login',
        propNames = c('id', 'appId', 'size', 'scope', 'fields', 'returnScopes', 'autoLoad', 'xfbml', 'cookie', 'textButton', 'cssClass', 'redirectUri', 'version', 'icon', 'language', 'isMobile', 'isDisabled', 'tag', 'state', 'authType', 'responseType', 'facebookLoginResponse'),
        package = 'dashFacebookLogin'
        )

    structure(component, class = c('dash_component', 'list'))
}
