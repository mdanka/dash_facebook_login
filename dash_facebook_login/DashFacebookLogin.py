# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashFacebookLogin(Component):
    """A DashFacebookLogin component.
DashFacebookLogin is a wrapper around the react-facebook-login component.
For details on its configuration, see https://www.npmjs.com/package/react-facebook-login

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- appId (string; required): The Facebook App ID.
- size (a value equal to: "small", "medium", "metro"; optional)
- scope (string; optional)
- fields (string; optional)
- returnScopes (boolean; optional)
- autoLoad (boolean; optional)
- xfbml (boolean; optional)
- cookie (boolean; optional)
- textButton (string; optional)
- cssClass (string; optional)
- redirectUri (string; optional)
- version (string; optional)
- icon (string; optional)
- language (string; optional)
- isMobile (boolean; optional)
- isDisabled (boolean; optional)
- tag (string; optional)
- state (string; optional)
- authType (string; optional)
- responseType (string; optional)
- facebookLoginResponse (dict; optional): The properties returned by the Facebook login callback"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, appId=Component.REQUIRED, size=Component.UNDEFINED, scope=Component.UNDEFINED, fields=Component.UNDEFINED, returnScopes=Component.UNDEFINED, autoLoad=Component.UNDEFINED, xfbml=Component.UNDEFINED, cookie=Component.UNDEFINED, textButton=Component.UNDEFINED, cssClass=Component.UNDEFINED, redirectUri=Component.UNDEFINED, version=Component.UNDEFINED, icon=Component.UNDEFINED, language=Component.UNDEFINED, isMobile=Component.UNDEFINED, isDisabled=Component.UNDEFINED, tag=Component.UNDEFINED, state=Component.UNDEFINED, authType=Component.UNDEFINED, responseType=Component.UNDEFINED, facebookLoginResponse=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'appId', 'size', 'scope', 'fields', 'returnScopes', 'autoLoad', 'xfbml', 'cookie', 'textButton', 'cssClass', 'redirectUri', 'version', 'icon', 'language', 'isMobile', 'isDisabled', 'tag', 'state', 'authType', 'responseType', 'facebookLoginResponse']
        self._type = 'DashFacebookLogin'
        self._namespace = 'dash_facebook_login'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'appId', 'size', 'scope', 'fields', 'returnScopes', 'autoLoad', 'xfbml', 'cookie', 'textButton', 'cssClass', 'redirectUri', 'version', 'icon', 'language', 'isMobile', 'isDisabled', 'tag', 'state', 'authType', 'responseType', 'facebookLoginResponse']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['appId']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashFacebookLogin, self).__init__(**args)
