import PropTypes from 'prop-types';
  import Groups from "./post/groups";
import React from "react"; 
import About from "./post/about";
import IDX from "./post/idx";
import OAuth from "./post/oauth";
import NSS from "./post/nss";
import LiteUi from "./post/liteUI";
import GAI from "./post/gai";
import Fido from "./post/fido";
import Consent from "./post/consent";
import Captcha from "./post/captcha";

class Main extends React.Component {
    render() {

        let close = <div className="close" onClick={() => {
            this.props.onCloseArticle()
        }}/>

        return (
            <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
                <article id="about"
                         className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>

                    <About/>
                    {close}
                </article>

                <article id="groups"
                         className={`${this.props.article === 'groups' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>

                    <Groups />
                    {close}
                </article>
                <article id="captcha"
                         className={`${this.props.article === 'captcha' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>

                    <Captcha />
                    {close}
                </article>

                <article id="idx"
                         className={`${this.props.article === 'idx' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>

                    <IDX/>
                    {close}
                </article>

                <article id="oauth"
                         className={`${this.props.article === 'oauth' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>

                    <OAuth/>
                    {close}
                </article>

                <article id="nss"
                         className={`${this.props.article === 'nss' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <NSS/>
                    {close}
                </article>

                <article id="liteUi"
                         className={`${this.props.article === 'liteUi' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <LiteUi/>
                    {close}
                </article>

                <article id="gai"
                         className={`${this.props.article === 'gai' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                   <GAI />
                    {close}
                </article>

                <article id="fido"
                         className={`${this.props.article === 'fido' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <Fido />
                    {close}
                </article>

                <article id="consent"
                         className={`${this.props.article === 'consent' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                         style={{display: 'none'}}>
                    <Consent />
                    {close}
                </article>


            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Main