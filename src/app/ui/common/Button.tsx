import styled from 'styled-components';
import { primaryColor, dangerColor } from 'app/utils/styled-components.utils';

interface ButtonProps { 
    isGhost?: boolean
    danger?: boolean
}

const Button = styled.button<ButtonProps>`
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${primaryColor};
    border-radius: 3px;
    cursor: pointer;
`;

const readFontColorProps = (props: ButtonProps) => {
    if (props.isGhost) {
        if (props.danger) {
            return dangerColor;
        } else {
            return primaryColor;
        }
    } else {
        return 'white'; 
    }
}

const readBackgroundColorProps = (props: ButtonProps) => {
    if (props.isGhost) {
        return 'transparent'; 
    } else {
        if (props.danger) {
            return dangerColor;
        } else {
            return primaryColor;
        }
    }
}

/**
 * Default Button
 * props: @isGhost {boolean}
 */
export const DefaultButton = styled(Button)`
    color: ${readFontColorProps};
    background-color: ${readBackgroundColorProps};
    border: 2px solid ${props => props.danger ? dangerColor : primaryColor};    
`;

/**
 * Rounded Button
 * props: @isGhost {boolean}
 */
export const RoundedButton = styled(Button)`
    color: ${readFontColorProps};
    background-color: ${readBackgroundColorProps};
    border-radius: 50px;
    border: 2px solid ${props => props.danger ? dangerColor : primaryColor};    
`;
