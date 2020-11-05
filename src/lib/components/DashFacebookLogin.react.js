import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

/**
 * DashFacebookLogin is a wrapper around the react-facebook-login component.
 * For details on its configuration, see https://www.npmjs.com/package/react-facebook-login
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

    setIsSdkLoaded() {
        this.setState({ isSdkLoaded: true });
    }

    setFbAsyncInit() {
        const { appId, xfbml, cookie, version, autoLoad } = this.props;
        window.fbAsyncInit = () => {
            window.FB.init({
                version: `v${version}`,
                appId,
                xfbml: true,
                autoLogAppEvents: true,
                // cookie,
            });
          this.setIsSdkLoaded();
        };
    }

    loadSdkAsynchronously() {
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = `https://connect.facebook.net/en_US/sdk.js`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
      }

    render() {
        const {
            id,
            setProps,
            appId,
            size,
            scope,
            fields,
            returnScopes,
            autoLoad,
            xfbml,
            cookie,
            textButton,
            cssClass,
            redirectUri,
            version,
            icon,
            language,
            isMobile,
            isDisabled,
            tag,
            state,
            authType,
            responseType,
        } = this.props;

        const responseFacebook = (response) => {
            console.log(response);
             /*
                * Send the new value to the parent component.
                * setProps is a prop that is automatically supplied
                * by dash's front-end ("dash-renderer").
                * In a Dash app, this will update the component's
                * props and send the data back to the Python Dash
                * app server if a callback uses the modified prop as
                * Input or State.
                */
            // e => setProps({ value: e.target.value })
            setProps({
                facebookLoginResponse: response,
            });
        }

        const componentClicked = (response) => {
            // console.log(response);
        }

        return (
            <div id={id}>
                {false && <FacebookLogin
                    appId={appId}
                    size={size}
                    scope={scope}
                    fields={fields}
                    returnScopes={returnScopes}
                    autoLoad={autoLoad}
                    xfbml={xfbml}
                    cookie={cookie}
                    textButton={textButton}
                    cssClass={cssClass}
                    redirectUri={redirectUri}
                    version={version}
                    icon={icon}
                    language={language}
                    isMobile={isMobile}
                    isDisabled={isDisabled}
                    tag={tag}
                    state={state}
                    authType={authType}
                    responseType={responseType}

                    onClick={componentClicked}
                    callback={responseFacebook}
                />}
                {!this.state.isSdkLoaded && "loading..."}
                {this.state.isSdkLoaded && (
                    <div className="fb-login-button" data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false" data-width=""></div>
                )}
            </div>
        );
    }
}

DashFacebookLogin.defaultProps = {};

DashFacebookLogin.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * The Facebook App ID.
     */
    appId: PropTypes.string.isRequired,

    size: PropTypes.oneOf(["small", "medium", "metro"]),
    scope: PropTypes.string,
    fields: PropTypes.string,
    returnScopes: PropTypes.bool,
    autoLoad: PropTypes.bool,
    xfbml: PropTypes.bool,
    cookie: PropTypes.bool,
    textButton: PropTypes.string,
    cssClass: PropTypes.string,
    redirectUri: PropTypes.string,
    version: PropTypes.string,
    icon: PropTypes.string,
    language: PropTypes.string,
    isMobile: PropTypes.bool,
    isDisabled: PropTypes.bool,
    tag: PropTypes.string,
    state: PropTypes.string,
    authType: PropTypes.string,
    responseType: PropTypes.string,

    /**
     * The properties returned by the Facebook login callback
     */
    facebookLoginResponse: PropTypes.object,
    // facebookLoginResponse: PropTypes.shape({
    //     accessToken: PropTypes.string,
    //     data_access_expiration_time: PropTypes.number,
    //     expiresIn: PropTypes.number,
    //     signedRequest: PropTypes.string,
    //     userID: PropTypes.string,
    // }),
};
