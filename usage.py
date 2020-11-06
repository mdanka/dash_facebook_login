import dash_facebook_login
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__, suppress_callback_exceptions=True)

app.layout = html.Div([
    dcc.Checklist(
        id='is-mounted-checkbox',
        options=[{'label': 'Is button mounted?', 'value': 'is_mounted'}],
        value=['is_mounted'],
    ),
    html.Div(id='facebook-login-container'),
    html.Div(id='facebook-login-output'),
])



@app.callback(Output('facebook-login-container', 'children'), [Input('is-mounted-checkbox', 'value')])
def render_facebook_login_container(value):
    if len(value) == 0:
        return 'Button not mounted'
    else:
        return dash_facebook_login.DashFacebookLogin(
            id='facebook-login',
            appId='168590974451254',
            version="v8.0",
            cookie=True,
            status=True,
            xfbml=True,
            autoLogoutLink=True,
            scope="public_profile",
            size="medium",
            buttonType="login_with",
            useContinueAs=True,
        )


@app.callback(Output('facebook-login-output', 'children'), [Input('facebook-login', 'facebookLoginResponse')])
def display_output(value):
    return 'Response: {}'.format(value)


if __name__ == '__main__':
    app.run_server(host='localhost', debug=True, ssl_context=('security/cert.pem', 'security/key.pem'))
