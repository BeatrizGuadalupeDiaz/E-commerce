export interface Props {
    text: string;
    onClick: () => void;
    type? : buttonType;
    btnStyles?: any;
    textStyles?: any;
}

type buttonType = "default" | "add" ;