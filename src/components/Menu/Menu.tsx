import {useState, useRef, RefObject, useEffect} from "react";

import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu, StyledLink } from "./Menu.styled";

import {useOnClickOutside} from "../../hooks/useOnClickOutside";
import {LinksProps} from "../Header/Header";




const Menu = ({scrollToRef, contactsRef, metalRef, informationRef}: LinksProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);


    const navigation = (ref: RefObject<HTMLElement>) => {
        scrollToRef(ref)
        setOpen(false)
    };

    useOnClickOutside(node, () => {
        setOpen(false)});

    return (
        <div ref={node}>
            <StyledMenu open={open}>
                <StyledLink onClick={() => navigation(metalRef)}>Металл</StyledLink>
                <StyledLink onClick={() => navigation(informationRef)}>Информация</StyledLink>
                <StyledLink onClick={() => navigation(contactsRef)}>Контакты</StyledLink>
            </StyledMenu>
            <Hamburger open={open} setOpen={setOpen} />
        </div>
    );
};

export default Menu;
