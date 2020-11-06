# AUTO GENERATED FILE - DO NOT EDIT

dashFacebookLogin <- function(id=NULL, appId=NULL, language=NULL, version=NULL, cookie=NULL, status=NULL, xfbml=NULL, frictionlessRequests=NULL, autoLogoutLink=NULL, scope=NULL, size=NULL, defaultAudience=NULL, layout=NULL, buttonType=NULL, useContinueAs=NULL, className=NULL, facebookLoginResponse=NULL) {
    
    props <- list(id=id, appId=appId, language=language, version=version, cookie=cookie, status=status, xfbml=xfbml, frictionlessRequests=frictionlessRequests, autoLogoutLink=autoLogoutLink, scope=scope, size=size, defaultAudience=defaultAudience, layout=layout, buttonType=buttonType, useContinueAs=useContinueAs, className=className, facebookLoginResponse=facebookLoginResponse)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashFacebookLogin',
        namespace = 'dash_facebook_login',
        propNames = c('id', 'appId', 'language', 'version', 'cookie', 'status', 'xfbml', 'frictionlessRequests', 'autoLogoutLink', 'scope', 'size', 'defaultAudience', 'layout', 'buttonType', 'useContinueAs', 'className', 'facebookLoginResponse'),
        package = 'dashFacebookLogin'
        )

    structure(component, class = c('dash_component', 'list'))
}
