% Auto-generated: do not edit by hand
\name{dashFacebookLogin}

\alias{dashFacebookLogin}

\title{DashFacebookLogin component}

\description{
DashFacebookLogin provides a Facebook login button. For details on its configuration, see https://developers.facebook.com/docs/facebook-login/web/login-button/
}

\usage{
dashFacebookLogin(id=NULL, appId=NULL, language=NULL, version=NULL,
cookie=NULL, status=NULL, xfbml=NULL,
frictionlessRequests=NULL, autoLogoutLink=NULL, scope=NULL,
size=NULL, defaultAudience=NULL, layout=NULL,
buttonType=NULL, useContinueAs=NULL, className=NULL,
facebookLoginResponse=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{appId}{Character. Your Facebook application ID. If you don't have one find it in the App dashboard
or go there to create a new app.}

\item{language}{Character. The language code, such as "en_US".
@default en_US}

\item{version}{Character. Determines which versions of the Graph API and any API dialogs or
plugins are invoked when using the .api() and .ui() functions. Valid
values are determined by currently available versions, such as 'v2.0'.
@default v8.0}

\item{cookie}{Logical. Determines whether a cookie is created for the session or not. If enabled,
it can be accessed by server-side code.
@default false}

\item{status}{Logical. Determines whether the current login status of the user is freshly retrieved
on every page load. If this is disabled, that status will have to be manually
retrieved using .getLoginStatus().
@default false}

\item{xfbml}{Logical. Determines whether XFBML tags used by social plugins are parsed, and
therefore whether the plugins are rendered or not.
@default false}

\item{frictionlessRequests}{Logical. Frictionless Requests are available to games on Facebook.com or on mobile
web using the JavaScript SDK. This parameter determines whether they are
enabled.
@default false}

\item{autoLogoutLink}{Logical. If enabled, the button will change to a logout button when the user is logged in.
@default false}

\item{scope}{Character. The list of permissions to request during login.
@default public_profile}

\item{size}{A value equal to: "small", "medium", "large". Picks one of the size options for the button.
@default small}

\item{defaultAudience}{A value equal to: "everyone", "friends", "only_me". Determines what audience will be selected by default, when requesting write permissions.
@default friends}

\item{layout}{A value equal to: "default", "rounded". Determines the display type of the button.
@default default}

\item{buttonType}{A value equal to: "continue_with", "login_with". Determines the type of button text.
@default continue_with}

\item{useContinueAs}{Logical. Determines whether to show the user's profile picture when available.
@default false}

\item{className}{Character. A custom class to add to the button.
@default fb-login-button}

\item{facebookLoginResponse}{Named list. The properties returned by the Facebook login callback.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

