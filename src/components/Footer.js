import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="container py-3">
                <p className="text-capitalize">
                    &copy; {new Date().getFullYear()} by nachala vinograd
                </p>
            </div>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
  background: var(--myblue);
  color: var(--primaryColor);
  height: 40px;
  padding: 10px;
  text-align:center;
`;
