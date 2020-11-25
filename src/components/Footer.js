import React, { Component } from 'react'
import styled from "styled-components";

export default class Footer extends Component {
/*     componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = `
            var vsid = "sa23145";
            (function() { 
                var vsjs = document.createElement('script'); 
                vsjs.type = 'text/javascript'; 
                vsjs.async = true; 
                vsjs.setAttribute('defer', 'defer');
                vsjs.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'www.virtualspirits.com/vsa/chat-'+vsid+'.js';
                var s = document.getElementsByTagName('script')[0]; 
                s.parentNode.insertBefore(vsjs, s);
            })();
        `;
        this.instance.appendChild(s);
    }; */
    
    render() {
        return (
            <>
                <FooterWrapper>
                    <div className="container py-3">
                        <a className="footer"
                            rel="noopener noreferrer" target={"_blank"} 
                            href='https://portifolti.netlify.app/'
                        >
                            {new Date().getFullYear()} &copy; by nachala vinograd
                        </a>
                    </div>
                </FooterWrapper>
            </>
        );
    }
}

const FooterWrapper = styled.footer`
    background: var(--primaryColor);
    text-align: center;
    height: 40px;
    `;
