import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * DashFacebookLogin provides a Facebook login button for Plotly Dash dashboards.
 * For details on its configuration, see https://developers.facebook.com/docs/facebook-login/web/login-button/
 */
export default class DashFacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSdkLoaded: false,
        };
    }

    componentDidMount() {
        if (document.getElementById('facebook-jssdk')) {
            this.setIsSdkLoaded();
            return;
        }
        this.setFbAsyncInit();
        this.loadSdkAsynchronously();
        let fbRoot = document.getElementById('fb-root');
        if (!fbRoot) {
            fbRoot = document.createElement('div');
            fbRoot.id = 'fb-root';
            document.body.appendChild(fbRoot);
        }
    }

    componentDidUpdate() {
        // We have to ask the Facebook SDK to rerender the button if
        // some properties changed
        window.FB.XFBML.parse();
    }

    componentWillUnmount() {
        if (this.authStatusChangeListener != null) {
            window.FB.Event.unsubscribe('auth.statusChange', this.authStatusChangeListener);
            this.authStatusChangeListener = null;
        }
        if (this.authResponseChangeSubscription != null) {
            window.FB.Event.unsubscribe('auth.authResponseChange', this.authResponseChangeSubscription);
            this.authResponseChangeSubscription = null;
        }
    }

    setIsSdkLoaded() {
        const { setProps } = this.props;
        this.setState({ isSdkLoaded: true });
        const onFacebookLoginResponseLocal = this.onFacebookLoginResponse;
        this.authStatusChangeSubscription = function (response) {
            onFacebookLoginResponseLocal(setProps, response);
        };
        this.authResponseChangeSubscription = function (response) {
            onFacebookLoginResponseLocal(setProps, response);
        };
        window.FB.Event.subscribe('auth.statusChange', this.authStatusChangeSubscription);
        window.FB.Event.subscribe('auth.authResponseChange', this.authResponseChangeSubscription);
    }

    setFbAsyncInit() {
        const {
            appId,
            version,
            cookie,
            status,
            xfbml,
            frictionlessRequests,
            setProps,
        } = this.props;
        window.fbAsyncInit = () => {
            window.FB.init({
                appId,
                version,
                cookie,
                status,
                xfbml,
                frictionlessRequests,
            });
            this.setIsSdkLoaded();
        };
    }

    loadSdkAsynchronously() {
        const { language } = this.props;
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = `https://connect.facebook.net/${language}/sdk.js`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    onFacebookLoginResponse(setProps, response) {
        setProps({
            facebookLoginResponse: response,
        });
    }

    render() {
        const {
            id,
            autoLogoutLink,
            scope,
            size,
            defaultAudience,
            layout,
            buttonType,
            useContinueAs,
            className,
        } = this.props;
        return (<div
            id={id}
            className={className}
            data-auto-logout-link={autoLogoutLink}
            data-scope={scope}
            data-size={size}
            data-default-audience={defaultAudience}

            data-button-type={buttonType}
            data-layout={layout}
            
            data-use-continue-as={useContinueAs}
            data-width=""
        ></div>);
    }
}

DashFacebookLogin.defaultProps = {
    language: "en_US",
    version: "v8.0",
    cookie: false,
    status: false,
    xfbml: false,
    frictionlessRequests: false,

    autoLogoutLink: false,
    scope: "public_profile",
    size: "small",
    defaultAudience: "friends",
    layout: "default",
    buttonType: "continue_with",
    useContinueAs: false,

    className: "fb-login-button",
};

DashFacebookLogin.propTypes = {
    ///////////////
    // Dash options
    ///////////////
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,



    ///////////////////
    // Facebook options
    ///////////////////
    /**
     * Your Facebook application ID. If you don't have one find it in the App dashboard
     * or go there to create a new app.
     */
    appId: PropTypes.string.isRequired,

    /**
     * The language code, such as "en_US".
     * @default en_US
     */
    language: PropTypes.string,

    /**
     * Determines which versions of the Graph API and any API dialogs or
     * plugins are invoked when using the .api() and .ui() functions. Valid
     * values are determined by currently available versions, such as 'v2.0'.
     * @default v8.0
     */
    version: PropTypes.string,

    /**
     * Determines whether a cookie is created for the session or not. If enabled,
     * it can be accessed by server-side code.
     * @default false
     */
    cookie: PropTypes.bool,

    /**
     * Determines whether the current login status of the user is freshly retrieved
     * on every page load. If this is disabled, that status will have to be manually
     * retrieved using .getLoginStatus().
     * @default false
     */
    status: PropTypes.bool,

    /**
     * Determines whether XFBML tags used by social plugins are parsed, and
     * therefore whether the plugins are rendered or not.
     * @default false
     */
    xfbml: PropTypes.bool,

    /**
     * Frictionless Requests are available to games on Facebook.com or on mobile
     * web using the JavaScript SDK. This parameter determines whether they are
     * enabled.
     * @default false
     */
    frictionlessRequests: PropTypes.bool,



    ///////////////////////
    // Login button options
    ///////////////////////
    /**
     * If enabled, the button will change to a logout button when the user is logged in.
     * @default false
     */
    autoLogoutLink: PropTypes.bool,

    /**
     * The list of permissions to request during login.
     * @default public_profile
    */
    scope: PropTypes.string,

    /**
     * Picks one of the size options for the button.
     * @default small
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),

    /**
     * Determines what audience will be selected by default, when requesting write permissions.
     * @default friends
     */
    defaultAudience: PropTypes.oneOf(["everyone", "friends", "only_me"]),

    /**
     * Determines the display type of the button.
     * @default default
     */
    layout: PropTypes.oneOf(["default", "rounded"]),

    /**
     * Determines the type of button text.
     * @default continue_with
     */
    buttonType: PropTypes.oneOf(["continue_with", "login_with"]),

    /**
     * Determines whether to show the user's profile picture when available.
     * @default false
     */
    useContinueAs: PropTypes.bool,
    


    ////////////////
    // Other options
    ////////////////

    /**
     * A custom class to add to the button.
     * @default fb-login-button
     */
    className: PropTypes.string,

    /**
     * The properties returned by the Facebook login callback.
     */
    facebookLoginResponse: PropTypes.object,
};
