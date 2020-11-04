# AUTO GENERATED FILE - DO NOT EDIT

dashFacebookLogin <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashFacebookLogin',
        namespace = 'dash_facebook_login',
        propNames = c('id', 'label', 'value'),
        package = 'dashFacebookLogin'
        )

    structure(component, class = c('dash_component', 'list'))
}
