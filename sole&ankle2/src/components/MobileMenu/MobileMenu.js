/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { NavLink } from "../Header/Header";
import { keyframes } from "styled-components";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Dialog aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" strokeWidth={2}></Icon>
        </CloseButton>
        <nav>
          <NavLink href="/sale" style={{ "--i": 1 }}>
            Sale
          </NavLink>
          <NavLink href="/new" style={{ "--i": 2 }}>
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" style={{ "--i": 3 }}>
            Men
          </NavLink>
          <NavLink href="/women" style={{ "--i": 4 }}>
            Women
          </NavLink>
          <NavLink href="/kids" style={{ "--i": 5 }}>
            Kids
          </NavLink>
          <NavLink href="/collections" style={{ "--i": 6 }}>
            Collections
          </NavLink>
        </nav>
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </Dialog>
    </Overlay>
  );
};

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
`;

const Overlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 6% 40% / 0.8);

  animation: ${fadeIn} 0.2s ease;
`;

const Dialog = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 20%;
  padding: 26px 16px 32px 32px;

  background: ${COLORS.white};

  nav,
  footer,
  & {
    display: flex;
    flex-direction: column;
  }

  justify-content: space-between;

  & nav {
    gap: 16px;
  }

  & footer {
    gap: 9px;
    & a {
      text-decoration: none;
      color: ${COLORS.gray[700]};
      font-size: ${14 / 16}rem;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
  }

  @keyframes nav-link {
    from {
      transform: translateX(calc(var(--i) * 3ch + 2ch));
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: slide-in 0.3s 0.1s both;

    & footer {
      animation: ${fadeIn} 1s 0.5s backwards;
    }

    & ${NavLink} {
      animation: nav-link 0.3s calc(var(--i) * 50ms) backwards linear;
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

export default MobileMenu;
