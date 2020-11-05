import dash_facebook_login
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_facebook_login.DashFacebookLogin(
        id='facebook-login',
        appId='168590974451254',
        autoLoad=True,
        fields="name,email,picture",
        size="small",
        version="8.0",
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('facebook-login', 'facebookLoginResponse')])
def display_output(value):
    return 'Response: {}'.format(value)


if __name__ == '__main__':
    app.run_server(host='localhost', debug=True, ssl_context=('security/cert.pem', 'security/key.pem'))
