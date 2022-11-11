import React from 'react';

import '../assets/css/components/inputLogin.css';

// parâmetros que meu componente espera receber
interface IInputLoginProps {
    type: string;
    value: string;
    placeholder: string;

    // evento
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}

// todas as vezes que formos tipar o componente, temos que dizer que ele é um React.FC (Functional Component)

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    
    return (
        <label>
            <input
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                ref={ref}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter'
                ? props.onPressEnter && props.onPressEnter() // se props.onPressEnter for diferente de 'undefinded' (setiver uma função entro de onPressEnter) ele executará o onPressEnter()
                : undefined}
            />
        </label>
    )
})