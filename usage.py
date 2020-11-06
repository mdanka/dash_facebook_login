import dash_facebook_login
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_facebook_login.DashFacebookLogin(
        id='facebook-login',
        appId='168590974451254',
        version="v8.0",
        language="hu_HU",
        cookie=True,
        status=True,
        autoLogoutLink=True,
        scope="public_profile",
        size="medium",
        buttonType="login_with",
        useContinueAs=True,
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('facebook-login', 'facebookLoginResponse')])
def display_output(value):
    return 'Response: {}'.format(value)


if __name__ == '__main__':
    app.run_server(host='localhost', debug=True, ssl_context=('security/cert.pem', 'security/key.pem'))
