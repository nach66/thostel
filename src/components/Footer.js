import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="container py-3">
                <p className="text-capitalize">
                    {new Date().getFullYear()} by nachala vinograd &copy;
                </p>
            </div>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
  background: var(--primaryColor);
  color: var(--myblue);
  height: 40px;
  padding: 10px;
  text-align:center;
`;
